const fs = require('fs');
const xlsx = require('xlsx');

// 1. Load the existing events data by evaluating it
const eventsFilePath = 'src/data/eventsData.ts';
const fileContent = fs.readFileSync(eventsFilePath, 'utf8');

// Use regex to extract the JSON-like array
const match = fileContent.match(/export const EVENTS_DATA: EventDetail\[\] = (\[[\s\S]*\]);/);
if (!match) {
  console.error("Could not find EVENTS_DATA in the file.");
  process.exit(1);
}
let eventsData;
try {
  eventsData = eval(match[1]);
} catch (e) {
  console.error("Failed to eval EVENTS_DATA", e);
  process.exit(1);
}

// 2. Load the Master Sheet
const workbook = xlsx.readFile('/home/vyshak/Downloads/Jon_Event Details Master sheet.xlsx');
const sheetName = workbook.SheetNames[0];
const excelData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 'A' });

// Carry forward department for merged cells
let currentDept = '';
excelData.forEach(row => {
  if (row.A && typeof row.A === 'string' && row.A.trim() !== '') {
    currentDept = row.A.trim();
  } else {
    row.A = currentDept;
  }
});

const normalizeSlug = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');

// 3. Update events
eventsData.forEach(event => {
  // Convert the existing single coordinator into the new array format if not already
  if (event.coordinator && !event.coordinators) {
    event.coordinators = [
      {
        name: event.coordinator.name,
        phone: event.coordinator.email, // previously we used the email field for phone numbers from HTML
        email: "",
        role: "Coordinator"
      }
    ];
    delete event.coordinator; // remove the old property
  }

  // Find matching row in Master Sheet (only if it's Culturals or just match by name)
  const normEventTitle = normalizeSlug(event.title);
  const matchedRow = excelData.find(row => normalizeSlug(row.B) === normEventTitle);

  if (matchedRow) {
    // We found a match in the Master Sheet! Enrich it.
    
    // Description -> Overview
    if (matchedRow.C) {
      const fullText = matchedRow.C.toString();
      // If there are "Number of Rounds/Event Structure:" we can try to split, or just dump it all into overview.
      event.overview = fullText.trim();
    }
    
    if (matchedRow.D) event.date = matchedRow.D.toString().trim();
    if (matchedRow.E) event.fee = matchedRow.E.toString().trim();
    if (matchedRow.F) event.teamSize = matchedRow.F.toString().trim();
    if (matchedRow.G) event.format = matchedRow.G.toString().trim();
    if (matchedRow.H) event.prizePool = matchedRow.H.toString().trim();
    
    // Coordinators (Columns I to Q)
    const newCoordinators = [];
    
    // Faculty (I, J, K)
    if (matchedRow.I) {
      newCoordinators.push({
        name: matchedRow.I.toString().trim(),
        phone: matchedRow.J ? matchedRow.J.toString().trim() : "",
        email: matchedRow.K ? matchedRow.K.toString().trim() : "",
        role: "Faculty Coordinator"
      });
    }
    
    // Student 1 (L, M, N)
    if (matchedRow.L) {
      newCoordinators.push({
        name: matchedRow.L.toString().trim(),
        phone: matchedRow.M ? matchedRow.M.toString().trim() : "",
        email: matchedRow.N ? matchedRow.N.toString().trim() : "",
        role: "Student Coordinator"
      });
    }
    
    // Student 2 (O, P, Q)
    if (matchedRow.O) {
      newCoordinators.push({
        name: matchedRow.O.toString().trim(),
        phone: matchedRow.P ? matchedRow.P.toString().trim() : "",
        email: matchedRow.Q ? matchedRow.Q.toString().trim() : "",
        role: "Student Coordinator"
      });
    }

    if (newCoordinators.length > 0) {
      event.coordinators = newCoordinators;
    }
  }
});

// 4. Generate the new file content
const outputContent = `export interface EventDetail {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  department: string;
  overview: string;
  stages: { title: string; desc: string }[];
  rules: string[];
  faqs: { q: string; a: string }[];
  prizePool: string;
  date: string;
  fee: string;
  teamSize: string;
  format: string;
  coordinators: { name: string; phone: string; email: string; role: string }[];
  image: string;
  registrationLink?: string;
}

export const EVENTS_DATA: EventDetail[] = ${JSON.stringify(eventsData, null, 2)};
`;

fs.writeFileSync(eventsFilePath, outputContent, 'utf8');
console.log('Successfully enriched eventsData.ts');
