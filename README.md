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