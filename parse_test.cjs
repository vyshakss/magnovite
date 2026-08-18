const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const htmlDir = '/home/vyshak/updatedhtml files';
const files = fs.readdirSync(htmlDir).filter(f => f.endsWith('.html'));

const extractEvent = (filename) => {
  const filepath = path.join(htmlDir, filename);
  const html = fs.readFileSync(filepath, 'utf8');
  const $ = cheerio.load(html);
  
  const slug = filename.replace('.html', '');
  const title = $('.page-title').text().trim();
  const tagline = $('.page-title').next('p').text().trim();
  const department = $('.card-badge').text().trim();
  
  const overview = $('.modal-rules-section').eq(0).find('p').text().trim();
  
  const rulesText = $('.modal-rules-section').eq(2).find('ul, p').text().trim();
  
  const rules = [];
  if (rulesText) {
    rulesText.split('\n').forEach(r => {
      const clean = r.trim().replace(/^\d+\.\s*/, '');
      if(clean) rules.push(clean);
    });
  }

  const prizePool = $('.modal-prize-amount').text().trim() || "TBA";
  
  const statsDivs = $('.event-sidebar-sticky .glass-panel, .event-sidebar-sticky > div').filter((i, el) => {
    return $(el).find('span').text().includes('Date');
  }).first();
  
  const date = statsDivs.find('span:contains("Date")').next('span').text().trim() || "TBA";
  const fee = statsDivs.find('span:contains("Registration")').next('span').text().trim() || "TBA";
  const teamSize = statsDivs.find('span:contains("Team Size")').next('span').text().trim() || "TBA";

  const coordinators = [];
  $('.contact-card').each((i, el) => {
    const name = $(el).find('.contact-name').text().trim();
    const phone = $(el).find('.contact-link').text().trim();
    coordinators.push({ name, email: phone }); // map phone to email just to satisfy TS interface, or we can update the TS interface to `contact`
  });

  const image = $('.events-section img').eq(0).attr('src');
  
  return {
    slug, title, tagline, department, overview,
    prizePool, date, fee, teamSize, rules, coordinators, image
  };
};

console.log(extractEvent('antrix.html'));
