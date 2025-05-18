#!/bin/bash
# scripts/generate_images_yaml.sh
echo "fluency:" > data/images.yml
shopt -s nullglob # Prevents unmatched globs from being included
for file in static/images/fluency/*.{jpg,png,gif,webp}; do
    if [ -f "$file" ]; then # Only process if file exists
        filename=$(basename "$file")
        echo "  - url: \"/images/fluency/$filename\"" >> data/images.yml
        echo "    name: \"$filename\"" >> data/images.yml
    fi
done