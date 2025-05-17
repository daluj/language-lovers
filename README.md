# Landing Docs Starter

This project is a Hugo-based starter template for creating landing pages and documentation sites. It is designed to be lightweight, fast, and easy to customize, leveraging modern web technologies like TailwindCSS and PostCSS.

## Project Structure

The project is organized as follows:

```
.
├── assets/         # Contains CSS, JavaScript, and other static assets
├── bin/            # Contains the Hugo binary
├── content/        # Markdown content for the site (e.g., blog posts, docs)
├── layouts/        # Hugo templates for rendering the site
├── public/         # Generated static files (output directory)
├── resources/      # Hugo-generated resources (e.g., minified CSS/JS)
├── static/         # Static files served as-is (e.g., images, fonts)
├── devbox.json     # Development environment configuration
├── go.mod          # Go module dependencies
├── hugo.yaml       # Hugo configuration file
├── package.json    # Node.js dependencies for TailwindCSS/PostCSS
└── README.md       # Project documentation
```

## Features

- **Markdown Support**: Write content in Markdown for blogs and documentation.
- **TailwindCSS**: Customizable styling with utility-first CSS.
- **Multilingual Support**: Easily add translations for your site.
- **Search Integration**: Powered by FlexSearch for fast and flexible search.
- **Customizable Themes**: Toggle between light, dark, and system themes.
- **SEO Optimized**: Includes robots.txt and other SEO-friendly features.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Hugo](https://gohugo.io/) (extended version, minimum version `0.145.0`)
- [Node.js](https://nodejs.org/) (for TailwindCSS and PostCSS)
- [Go](https://golang.org/) (for managing Hugo modules)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install Node.js dependencies:

   ```sh
   npm install
   ```

3. Install Hugo modules:

   ```sh
   hugo mod get
   ```

## Development

To start a local development server, run:

```sh
hugo server
```

```sh
hugo server --logLevel debug
```

This will start the server at `http://localhost:1313/`. Changes to content or templates will automatically reload the site.

## Production

To run the project in production mode, use the following command:

```sh
hugo server --environment production
```

This will start the server in production mode, applying production-specific configurations (e.g., minified CSS/JS).

## Deployment

To generate the static files for deployment, run:

```sh
hugo --environment production
```

The generated files will be available in the `public/` directory. You can deploy this directory to any static hosting provider, such as:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

## Configuration

The main configuration file is `hugo.yaml`. Key settings include:

- **Base URL**: Set the `baseURL` to your site's domain.
- **Languages**: Configure multilingual support under the `languages` section.
- **Search**: Enable or disable search functionality under the `search` section.

## Customization

### TailwindCSS

The TailwindCSS configuration is located in `assets/css/tailwind.config.js`. You can extend or modify the theme as needed.

### PostCSS

The PostCSS configuration is located in `assets/css/postcss.config.js`. It includes plugins for importing CSS, nesting, and TailwindCSS.

### Templates

Hugo templates are located in the `layouts/` directory. You can customize the layout and structure of your site by modifying these files.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions or improvements.

# Hugo Shortcodes

## Image Shortcode

The `image` shortcode is a wrapper for the `image-optimized` partial that makes it easier to use in content files.

### Usage

```markdown
{{< image 
  src="images/example.jpg" 
  alt="Example image" 
  widths="400 800 1200" 
  quality="80" 
  isLCP=true 
  class="my-custom-class" 
  ref="myImageRef" 
>}}
```

### Parameters

- `src`: Path to the image (e.g., "images/thumbnail.jpg")
- `alt`: Alt text for accessibility (default: "Image")
- `widths`: Space-separated list of widths for responsive images (default: "400 800 1200")
- `quality`: WebP quality (default: 80)
- `isLCP`: Boolean to indicate if this is the Largest Contentful Paint image for performance optimization (default: false)
- `class`: Optional CSS class for styling
- `ref`: Optional Alpine.js x-ref attribute

### Example in Content

```markdown
## My Page Title

{{< image src="images/hero.jpg" alt="Hero image" isLCP=true class="w-full rounded-lg shadow-md" >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.
```

This shortcode automatically handles:
- Responsive image generation
- WebP conversion
- Lazy loading (except for LCP images)
- Proper HTML structure with the `<picture>` element

# Image Shortcode Usage Example

This file demonstrates how to use the new `image` shortcode in your content files.

## Basic Usage

```markdown
---
title: "My Page with Optimized Images"
description: "A page demonstrating the image shortcode"
---

## Welcome to My Page

{{< image 
  src="images/hero.jpg" 
  alt="Hero image" 
  isLCP=true 
  class="w-full rounded-lg shadow-md" 
>}}

This is my main content with an optimized hero image above.

## More Content

Here are some additional images:

{{< image src="images/photo1.jpg" alt="Photo 1" class="rounded-md" >}}

{{< image 
  src="images/photo2.jpg" 
  alt="Photo 2" 
  widths="300 600 900" 
  quality="90" 
  class="border-2 border-gray-200" 
>}}
```

## Parameter Details

- `src`: Path to the image file (required)
- `alt`: Accessibility text (defaults to "Image" if not provided)
- `widths`: Custom responsive widths (defaults to "400 800 1200" if not provided)
- `quality`: WebP conversion quality (defaults to 80 if not provided)
- `isLCP`: Set to true for the main/hero image for performance optimization
- `class`: Any CSS classes you want to apply
- `ref`: For Alpine.js references if needed

The shortcode automatically handles responsive image generation, WebP conversion, and proper loading attributes.