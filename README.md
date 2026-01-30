# Portfolio Website - Next.js

A modern, responsive portfolio website built with Next.js, featuring multiple pages, server-side rendering, and beautiful styling.

## Features

✨ **Modern Design**
- Clean and professional layout
- Responsive design that works on all devices
- Smooth animations and transitions
- Beautiful gradient backgrounds

🎯 **Multiple Pages**
- Home - Showcase your skills and experience
- About - Detailed information about your background
- Projects - Display your portfolio projects
- Contact - Contact form for potential clients/employers

🔧 **Technologies Used**
- **Framework**: Next.js 15
- **Styling**: CSS Modules with CSS variables
- **Image Optimization**: Next.js Image component
- **Client Interactivity**: React hooks (useState)
- **Type Safety**: TypeScript

📱 **Responsive & Accessible**
- Mobile-first design approach
- Fully responsive on all screen sizes
- Semantic HTML structure
- Fast loading times with optimized images

## Project Structure

```
portfolio-website/
├── app/
│   ├── components/           # Reusable components
│   │   ├── Header.tsx
│   │   ├── Header.module.css
│   │   ├── Footer.tsx
│   │   ├── Footer.module.css
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectCard.module.css
│   │   ├── SkillCard.tsx
│   │   └── SkillCard.module.css
│   ├── about/               # About page
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── projects/            # Projects page
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── contact/             # Contact page
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── page.module.css
│   └── globals.css
├── public/                  # Static assets
│   ├── hero-image.svg
│   ├── profile-image.svg
│   ├── project*.svg
│   └── favicon.ico
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project directory**
   ```bash
   cd c:\Users\mayed\desktop\nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the website in action.

## Building for Production

### Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm build

# Start production server
npm run start

# Run linter
npm run lint
```

### Production Build
```bash
npm run build
npm run start
```

## Customization

### Update Personal Information
Edit the content in each page:
- **Home Page**: `app/page.tsx` - Update skills and hero content
- **About Page**: `app/about/page.tsx` - Update experience, education, and tech stack
- **Projects Page**: `app/projects/page.tsx` - Add your own projects
- **Contact Page**: `app/contact/page.tsx` - Update contact information

### Update Colors
Modify the CSS variables in `app/globals.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  /* ... other variables ... */
}
```

### Add New Images
1. Place image files in the `public/` folder
2. Reference them in your components using the Image component:
   ```tsx
   import Image from "next/image";
   
   <Image
     src="/your-image.jpg"
     alt="Description"
     width={300}
     height={200}
   />
   ```

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub account
   - Click "New Project"
   - Select this repository
   - Click "Deploy"

### Deploy to Netlify

1. **Create a production build**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`

### Deploy to AWS/Google Cloud

Follow the respective platform's Next.js deployment guides or use serverless platforms like AWS Lambda with the `serverless-next.js` plugin.

## Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Automatic code splitting
- ✅ CSS modules for scoped styling
- ✅ Server-side rendering for SEO
- ✅ Mobile-optimized responsive design

## SEO Features

- ✅ Metadata configuration in `app/layout.tsx`
- ✅ Semantic HTML structure
- ✅ Mobile-friendly design
- ✅ Fast page load times
- ✅ Structured content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, feel free to reach out through the contact page.

---

Made with ❤️ using Next.js
