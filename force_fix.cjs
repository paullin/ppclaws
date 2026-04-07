const fs = require('fs');
const path = require('path');

const basePath = '/Users/paullin/Dropbox/Study/Project/Python/ppclaws/src/content/skills';

const skills = {
  'brainstorming': { repo: 'https://github.com/obra/superpowers', url: 'https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md' },
  'write-a-prd': { repo: 'https://github.com/mattpocock/skills', url: 'https://github.com/mattpocock/skills/blob/main/write-a-prd/SKILL.md' },
  'writing-plans': { repo: 'https://github.com/obra/superpowers', url: 'https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md' },
  'ab-test-setup': { repo: 'https://github.com/coreyhaines31/marketingskills', url: 'https://github.com/coreyhaines31/marketingskills/blob/main/skills/ab-test-setup/SKILL.md' },
  'analytics-tracking': { repo: 'https://github.com/coreyhaines31/marketingskills', url: 'https://github.com/coreyhaines31/marketingskills/blob/main/skills/analytics-tracking/SKILL.md' },
  'onboarding-cro': { repo: 'https://github.com/coreyhaines31/marketingskills', url: 'https://github.com/coreyhaines31/marketingskills/blob/main/skills/onboarding-cro/SKILL.md' }
};

function forceFix(lang, key, data) {
  const filePath = path.join(basePath, lang, 'product-manager', key + '.md');
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  const instHeader = lang === 'en' ? '## Installation and Usage Guide' : '## 安装与调用指南';
  const nextHeader = lang === 'en' ? '## Workflow Analysis (SOP)' : '## 工作流程解析 (SOP)';

  // Fix Installation section forcefully
  const instRegex = new RegExp(`(${instHeader}\\n)[\\s\\S]*?(?=\\n${nextHeader})`);
  content = content.replace(instRegex, `$1${data.repo}\n`);

  // Force add SOP link right after the nextHeader
  const sopLink = lang === 'en' ? `[Read original SKILL.md](${data.url})\n\n` : `[阅读原始 SKILL.md](${data.url})\n\n`;
  if (!content.includes(data.url)) {
    content = content.replace(new RegExp(`(${nextHeader}\\n)`), `$1${sopLink}`);
  }

  fs.writeFileSync(filePath, content);
}

for (const key in skills) {
  forceFix('en', key, skills[key]);
  forceFix('zh', key, skills[key]);
}
