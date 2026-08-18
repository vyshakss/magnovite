const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const xlsx = require('xlsx');

const htmlDir = '/home/vyshak/updatedhtml files';
const outputFilePath = path.join('/home/vyshak/cosmic-reveal-main/src/data/eventsData.ts');

const files = fs.readdirSync(htmlDir).filter(f => f.endsWith('.html'));

// Load Excel
const workbook = xlsx.readFile('/home/vyshak/Downloads/Copy of Event_Forms_manager.xlsx');
const sheetName = workbook.SheetNames[0];
const excelData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Simple department to category mapper
const mapCategory = (dept) => {
  const d = dept.toLowerCase();
  if (d.includes('computer science') || d.includes('aids') || d.includes('artificial intelligence')) return 'Coding & Tech';
  if (d.includes('mechanical') || d.includes('automotive') || d.includes('civil') || d.includes('electrical') || d.includes('ece') || d.includes('electronics')) return 'Engineering';
  if (d.includes('business') || d.includes('mba') || d.includes('bba')) return 'Management';
  if (d.includes('psychology') || d.includes('humanities')) return 'Arts & Humanities';
  if (d.includes('architecture')) return 'Design';
  return 'General Fest Events';
};

const normalizeSlug = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

const extractEvent = (filename) => {
  const filepath = path.join(htmlDir, filename);
  const html = fs.readFileSync(filepath, 'utf8');
  const $ = cheerio.load(html);
  
  const originalSlug = filename.replace('.html', '');
  const title = $('.page-title').text().trim() || originalSlug;
  const tagline = $('.page-title').next('p').text().trim() || "Shape the Wave.";
  const department = $('.card-badge').text().trim() || "General";
  const category = mapCategory(department);
  
  let overview = "";
  const firstSectionTitle = $('.modal-rules-section').eq(0).find('h2, h3').text().toLowerCase();
  if (firstSectionTitle.includes('overview') || firstSectionTitle.includes('about')) {
    overview = $('.modal-rules-section').eq(0).find('p').text().trim();
  }
  if (!overview) {
     overview = "Join us for an exciting event at Magnovite '26!";
  }
  
  const rules = [];
  $('.modal-rules-list li').each((i, el) => {
    const ruleText = $(el).text().trim();
    ruleText.split('\n').forEach(r => {
      const clean = r.trim().replace(/^\d+\.\s*/, '');
      if(clean) rules.push(clean);
    });
  });

  const prizePool = $('.modal-prize-amount').text().trim() || "TBA";
  
  const statsDivs = $('.event-sidebar-sticky .glass-panel, .event-sidebar-sticky > div').filter((i, el) => {
    return $(el).find('span').text().includes('Date');
  }).first();
  
  const date = statsDivs.find('span:contains("Date")').next('span').text().trim() || "15 Sept 2026";
  const fee = statsDivs.find('span:contains("Registration")').next('span').text().trim() || "TBA";
  const teamSize = statsDivs.find('span:contains("Team Size")').next('span').text().trim() || "TBA";

  const coordinators = [];
  $('.contact-card').each((i, el) => {
    const name = $(el).find('.contact-name').text().trim();
    const phone = $(el).find('.contact-link').text().trim();
    coordinators.push({ name, email: phone });
  });

  const image = $('.events-section img').eq(0).attr('src') || "/images/shaanrahman.jpg";
  
  const stages = [];
  const eventStructureSection = $('.modal-rules-section').filter((i, el) => {
    return $(el).find('h3, h2').text().toLowerCase().includes('structure');
  }).first();

  if (eventStructureSection.length > 0) {
    const pText = eventStructureSection.find('p').text().trim();
    if (pText) {
      stages.push({ title: "Event Structure", desc: pText });
    }
  }

  const format = "Live Event";
  
  // Fuzzy match with Excel to find Form Link
  const normHtmlSlug = normalizeSlug(originalSlug);
  const matchedRow = excelData.find(row => normalizeSlug(row.Slug) === normHtmlSlug || normalizeSlug(row.Event) === normalizeSlug(title));
  const registrationLink = matchedRow ? (matchedRow['Form Link'] || "") : "";

  return {
    slug: originalSlug, title, tagline, category, department, overview,
    stages, rules, faqs: [], prizePool, date, fee, teamSize, format,
    coordinator: coordinators.length > 0 ? coordinators[0] : { name: "Magnovite Support", email: "support@magnovite.com" },
    image, registrationLink
  };
};

const allEvents = files.map(extractEvent);

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
  coordinator: { name: string; email: string };
  image: string;
  registrationLink?: string;
}

export const EVENTS_DATA: EventDetail[] = ${JSON.stringify(allEvents, null, 2)};
`;

fs.writeFileSync(outputFilePath, outputContent, 'utf8');
console.log('Successfully generated eventsData.ts with ' + allEvents.length + ' events.');
