import os
import re
import json

# Strict Category -> Theme Mapping
# All Skills categories use Premium Dark themes
# All Examples categories use Premium Light themes
category_themes = {
    'product-manager': 'dark-blue',
    'developer': 'dark-emerald',
    'ui-ux-designer': 'dark-purple',
    'marketing': 'dark-rose',
    'requirement-analysis': 'light-stone',
    'seo-keyword-mining': 'light-slate',
    'prototyping': 'light-sand',
    'ab-testing': 'light-mint'
}

def process_md(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match category
    category_match = re.search(r'category:\s*"([^"]+)"', content)
    if not category_match:
        return
        
    category = category_match.group(1)
    if category not in category_themes:
        return
        
    target_theme = category_themes[category]
    
    # Replace cover_theme if exists, otherwise we'll inject it
    if 'cover_theme:' in content:
        new_content = re.sub(
            r'cover_theme:\s*"[^"]+"',
            f'cover_theme: "{target_theme}"',
            content
        )
    else:
        new_content = re.sub(
            r'(category:\s*"[^"]+"\n)',
            f'\\1cover_theme: "{target_theme}"\n',
            content
        )
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        # print(f"Updated MD {filepath} -> {target_theme}")

def process_json(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError:
            return
            
    changed = False
    
    # Check homepage sections
    if 'sections' in data:
        for sec in data['sections']:
            if 'items' in sec:
                for item in sec['items']:
                    if 'link' in item:
                        # Extract category from link (e.g. /zh/skills/product-manager/...)
                        for cat, theme in category_themes.items():
                            if f'/{cat}/' in item['link']:
                                if item.get('cover_theme') != theme:
                                    item['cover_theme'] = theme
                                    changed = True
                                break
                                
    # Check category sections
    if 'id' in data and data.get('id') in category_themes:
        # It's a category definition file, wait, id in json doesn't usually map like this, 
        # it's just the filename. But we already process homepage items properly.
        pass

    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        # print(f"Updated JSON {filepath}")

for root, dirs, files in os.walk('src/content'):
    for file in files:
        filepath = os.path.join(root, file)
        if file.endswith('.md') or file.endswith('.mdx'):
            process_md(filepath)
        elif file.endswith('.json'):
            process_json(filepath)
