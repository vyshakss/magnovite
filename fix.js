const fs = require('fs');
const code = fs.readFileSync('src/data/eventsData.ts', 'utf8');
const fixed = code.replace('"registrationLink": ""', '"registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSfJIH5GkgFVNkV5vPX5LdX6OdVfOzjBsSmYZ-0osJgbPkZWRQ/viewform?usp=publish-editor"');
fs.writeFileSync('src/data/eventsData.ts', fixed);
