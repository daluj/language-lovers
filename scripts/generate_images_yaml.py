import os
import yaml

# Define the source and output paths
source_dir = "static/images/fluency"
output_file = "data/images.yml"
extensions = (".jpg", ".png", ".gif", ".webp")

# Ensure the output directory exists
os.makedirs(os.path.dirname(output_file), exist_ok=True)

# Collect image files
images = []
for file in os.listdir(source_dir):
    if file.lower().endswith(extensions):
        images.append({
            "url": f"/images/fluency/{file}",
            "name": file
        })

# Create YAML structure
data = {"fluency": images}

# Write to YAML file
with open(output_file, "w") as f:
    yaml.dump(data, f, allow_unicode=True, sort_keys=False)