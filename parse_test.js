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
  const categoryDeptText = $('.card-badge').text().trim();
  // Assume "Category" isn't explicitly in the HTML badge, the badge just has department.
  // Wait, let's look at antrix.html: <span class="card-badge">Electronics and Communication Engineering (ECE)</span>
  const department = categoryDeptText;
  
  const overview = $('.modal-rules-section').eq(0).find('p').text().trim();
  
  const stagesText = $('.modal-rules-section').eq(1).find('p').text().trim();
  // We'll just put the raw text in a single stage for now, or split by lines if possible.
  
  const rules = [];
  $('.modal-rules-list li').each((i, el) => {
    // some rules are just a single li with line breaks. Let's get the text and split by newlines.
    const ruleText = $(el).text().trim();
    ruleText.split('\n').forEach(r => {
      const clean = r.trim().replace(/^\d+\.\s*/, '');
      if(clean) rules.push(clean);
    });
  });

  const prizePool = $('.modal-prize-amount').text().trim();
  
  // Stats
  const statsDivs = $('.event-sidebar-sticky .glass-panel, .event-sidebar-sticky > div').filter((i, el) => {
    return $(el).find('span').text().includes('Date');
  }).first();
  
  const date = statsDivs.find('span:contains("Date")').next('span').text().trim();
  const fee = statsDivs.find('span:contains("Registration")').next('span').text().trim();
  const teamSize = statsDivs.find('span:contains("Team Size")').next('span').text().trim();

  // Coordinators
  const coordinators = [];
  $('.contact-card').each((i, el) => {
    const name = $(el).find('.contact-name').text().trim();
    const phone = $(el).find('.contact-link').text().trim();
    coordinators.push({ name, phone });
  });

  const image = $('.events-section img').eq(0).attr('src');
  
  return {
    slug, title, tagline, department, overview,
    prizePool, date, fee, teamSize, rules, coordinators, image
  };
};

console.log(extractEvent('antrix.html'));
