import json

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Remove featured sections
    if 'sections' in data:
        data['sections'] = [s for s in data['sections'] if s.get('id') not in ('featured-skills', 'featured-cases')]
    
    # Remove featured links from footer
    if 'footer' in data and 'columns' in data['footer']:
        for col in data['footer']['columns']:
            if 'links' in col:
                col['links'] = [link for link in col['links'] if 'featured' not in link.get('link', '')]

    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

process_file('src/content/homepage/zh.json')
process_file('src/content/homepage/en.json')
print("JSON files updated successfully.")
