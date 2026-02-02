# Donald Rastetter - Portfolio Website

A modern, professional portfolio website showcasing skills as an AI Engineer and Game Developer.

**Live Site:** [drastetter.github.io](https://drastetter.github.io)

## Features

- **Modern Design**: Sophisticated design with teal accents on dark gray/black backgrounds
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Engaging animations and transitions throughout
- **Interactive Components**: Dynamic navigation, hover effects, and smooth scrolling
- **Certification Highlights**: Prominently features Python PCEP certification and upcoming AI/ML certificate
- **Dark Theme**: Professional dark sections alternating with light sections for visual interest

## Tech Stack

- React 18
- Vite (Build tool)
- CSS3 (Custom animations and modern layouts)
- Google Fonts (Inter & Space Grotesk)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd portfolio-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx/css      # Navigation header
│   │   ├── Hero.jsx/css        # Hero section with intro
│   │   ├── Skills.jsx/css      # Skills & certifications
│   │   ├── Experience.jsx/css  # Work experience timeline
│   │   ├── Projects.jsx/css    # Project showcase
│   │   ├── Contact.jsx/css     # Contact form & info
│   │   └── Footer.jsx/css      # Footer section
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Global app styles
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles & CSS variables
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js             # Vite configuration
└── README.md                   # This file
```

## Customization

### Colors

The color scheme features teal accents on dark backgrounds. Customize in `src/index.css`:

```css
:root {
  --teal-primary: #14b8a6;
  --teal-dark: #0d9488;
  --teal-light: #5eead4;

  --gray-darkest: #0f172a;
  --gray-darker: #1e293b;
  --gray-dark: #1f2937;
  --gray-medium: #4b5563;
  --gray-light: #9ca3af;
  --white: #ffffff;
}
```

### Content

To update personal information:

1. **Contact Info**: Edit `src/components/Contact.jsx`
2. **Skills & Certifications**: Edit `src/components/Skills.jsx`
3. **Experience**: Edit `src/components/Experience.jsx`
4. **Projects**: Edit `src/components/Projects.jsx`
5. **Hero Section**: Edit `src/components/Hero.jsx`

## Sections

1. **Hero**: Eye-catching introduction with animated elements
2. **Skills**: Certifications and technical skills with progress bars
3. **Experience**: Professional work history with timeline
4. **Projects**: Portfolio of technical projects
5. **Contact**: Contact form and information

## Deployment

### GitHub Pages (Recommended)

This site is configured for automatic deployment to GitHub Pages at **drastetter.github.io**.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy:**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/drastetter/drastetter.github.io.git
git push -u origin main
```

Then enable GitHub Pages in your repository settings.

### Other Platforms

- **Vercel**: `npm run build` then deploy the `dist` folder
- **Netlify**: Connect your Git repository or drag and drop the `dist` folder
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## License

This project is open source and available for personal use.

## Contact

Donald Rastetter

- Email: donaldrastetter@yahoo.com
- Phone: 402.417.2605
- Location: Plano, TX

---

Built with React and modern web technologies.

> > > > > > > e419218 (Initial commit - Portfolio website)
