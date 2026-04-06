import os
import glob

files = glob.glob("src/content/skills/**/*.md", recursive=True)
for fpath in files:
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    
    parts = content.split("---", 2)
    if len(parts) >= 3:
        frontmatter = parts[1]
        lines = frontmatter.split("\n")
        for i, line in enumerate(lines):
            if line.startswith("title: ") and not line.startswith('title: "'):
                val = line[7:]
                val = val.replace('"', '\\"')
                lines[i] = f'title: "{val}"'
            elif line.startswith("description: ") and not line.startswith('description: "'):
                val = line[13:]
                val = val.replace('"', '\\"')
                lines[i] = f'description: "{val}"'
        parts[1] = "\n".join(lines)
        new_content = "---".join(parts)
        
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new_content)
print("Done fixing YAML frontmatter.")