const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = [
  "https://raw.githubusercontent.com/mattpocock/skills/main/write-a-prd/SKILL.md",
  "https://raw.githubusercontent.com/obra/superpowers/main/skills/writing-plans/SKILL.md",
  "https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/ab-test-setup/SKILL.md",
  "https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/analytics-tracking/SKILL.md",
  "https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/onboarding-cro/SKILL.md",
  "https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/.claude/skills/banner-design/SKILL.md",
  "https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/.claude/skills/brand/SKILL.md",
  "https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/.claude/skills/design-system/SKILL.md",
  "https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/.claude/skills/design/SKILL.md",
  "https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/.claude/skills/slides/SKILL.md",
  "https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/.claude/skills/ui-styling/SKILL.md",
  "https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/.claude/skills/ui-ux-pro-max/SKILL.md",
  "https://raw.githubusercontent.com/anthropics/claude-code/main/plugins/frontend-design/skills/frontend-design/SKILL.md",
  "https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/marketing-ideas/SKILL.md",
  "https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/marketing-psychology/SKILL.md",
  "https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/launch-strategy/SKILL.md",
  "https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/pricing-strategy/SKILL.md",
  "https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/seo-audit/SKILL.md",
  "https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/copywriting/SKILL.md",
  "https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/copy-editing/SKILL.md",
  "https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/email-sequence/SKILL.md",
  "https://raw.githubusercontent.com/obra/superpowers/main/skills/requesting-code-review/SKILL.md",
  "https://raw.githubusercontent.com/obra/superpowers/main/skills/subagent-driven-development/SKILL.md",
  "https://raw.githubusercontent.com/obra/superpowers/main/skills/systematic-debugging/SKILL.md",
  "https://raw.githubusercontent.com/obra/superpowers/main/skills/test-driven-development/SKILL.md",
  "https://raw.githubusercontent.com/obra/superpowers/main/skills/verification-before-completion/SKILL.md",
  "https://raw.githubusercontent.com/obra/superpowers/main/skills/writing-skills/SKILL.md"
];

const names = [
  "write-a-prd", "writing-plans", "ab-test-setup", "analytics-tracking", "onboarding-cro",
  "banner-design", "brand", "design-system", "design", "slides", "ui-styling", "ui-ux-pro-max", "frontend-design",
  "marketing-ideas", "marketing-psychology", "launch-strategy", "pricing-strategy", "seo-audit", "copywriting", "copy-editing", "email-sequence",
  "requesting-code-review", "subagent-driven-development", "systematic-debugging", "test-driven-development", "verification-before-completion", "writing-skills"
];

const dir = path.join(__dirname, 'temp_skills');
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

function fetchUrl(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchUrl(res.headers.location, filepath).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        fs.writeFileSync(filepath, data);
        console.log(`Fetched ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  const promises = [];
  for (let i = 0; i < urls.length; i++) {
    const filepath = path.join(dir, names[i] + '.md');
    promises.push(fetchUrl(urls[i], filepath));
  }
  await Promise.all(promises);
  console.log('All done!');
}

run();
