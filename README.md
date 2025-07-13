# Industrix - Industrial Digital Transformation Website

A modern, responsive website built with Next.js 15, React 19, TypeScript, and Ant Design, showcasing industrial digital transformation solutions with advanced UI/UX features.

![Industrix Website](./public/og-image.jpg)

## 🌟 Features

### 🎨 **Modern Design System**
- **Glassmorphism UI**: Frosted glass effects with backdrop blur
- **Dynamic Animations**: Smooth entrance animations with staggered delays
- **Dark/Light Mode**: Complete theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with breakpoint optimizations
- **Advanced Hover States**: Micro-interactions and smooth transitions

### ⚡ **Performance Optimized**
- **Next.js 15**: Latest features with App Router
- **Image Optimization**: WebP/AVIF formats with responsive sizing
- **Code Splitting**: Automatic bundle optimization
- **SEO Ready**: Meta tags, OpenGraph, and structured data
- **TypeScript Strict**: Enhanced type safety and error prevention

### 🎯 **Interactive Components**
- **Floating Logo**: Animated hero logo with glassmorphism
- **Solution Cards**: Color-coded accent animations from bottom
- **Smooth Navigation**: JavaScript-powered smooth scrolling
- **Contact Form**: Enhanced styling with validation
- **Error Boundaries**: Graceful error handling and recovery

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd website

# Install dependencies
npm install

# Create environment file (optional)
cp .env.example .env.local

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
website/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage component
│   └── theme/
│       └── ThemeProvider.tsx    # Dark/light theme context
├── components/                   # React components
│   ├── AboutSection.tsx         # About section with stats
│   ├── ContactSection.tsx       # Contact form and info
│   ├── ErrorBoundary.tsx        # Error handling component
│   ├── Footer.tsx               # Website footer
│   ├── HeroSection.tsx          # Landing hero section
│   ├── LoadingSpinner.tsx       # Loading states
│   ├── Navbar.tsx               # Navigation header
│   └── SolutionsSection.tsx     # Solutions showcase
├── public/                       # Static assets
│   ├── Logo.svg                 # Company logo
│   └── og-image.jpg             # Social media preview
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server (localhost:3000)

# Production
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint code analysis
```

## 🎨 Design System

### Color Palette
```css
:root {
  --industrix-blue: #1079FF;      /* Primary brand color */
  --industrix-cyan: #29C5FF;      /* Secondary brand color */
  --industrix-red: #F62A3A;       /* Accent color */
  --industrix-coral: #F85B62;     /* Secondary accent */
  --industrix-gradient: linear-gradient(135deg, #1079FF, #29C5FF);
  --industrix-gradient-red: linear-gradient(135deg, #F62A3A, #F85B62);
}
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Heading Weights**: 700-900 (Bold to Black)
- **Body Weight**: 400-600 (Regular to Semi-bold)
- **Responsive Sizes**: `clamp()` functions for fluid typography

### Animations
- **Entrance**: `fadeInUp`, `slideInLeft/Right`, `fadeInScale`
- **Continuous**: `float`, `pulse`, `glow`, `gradientShift`
- **Hover**: Transform and shadow enhancements
- **Timing**: `cubic-bezier(0.4, 0, 0.2, 1)` for premium feel

## 🌙 Dark Mode Implementation

### Theme Provider
```tsx
import { useTheme } from '../app/theme/ThemeProvider'

function Component() {
  const { isDarkMode, toggleTheme } = useTheme()
  // Use theme state for conditional styling
}
```

### CSS Theme Support
```css
[data-theme="dark"] .element {
  background-color: rgba(30, 41, 59, 0.9);
  color: #e2e8f0;
}
```

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
@media (max-width: 768px) {
  .desktop-only { display: none; }
  .mobile-only { display: block; }
}

@media (min-width: 769px) {
  .desktop-only { display: block; }
  .mobile-only { display: none; }
}
```

## 🎯 Component Guide

### HeroSection
- **Floating Logo**: Glassmorphism effect with animation
- **Gradient Text**: Animated color-shifting headlines
- **CTA Buttons**: Enhanced hover states with glow effects
- **Feature Cards**: Three-column layout with hover animations

### SolutionsSection
- **Card Grid**: 6 solution cards with alternating accent colors
- **Hover Animation**: Bottom accent border grows on hover
- **Icons**: Floating animated icons with gradients
- **Learn More**: Interactive buttons with slide animations

### ContactSection
- **Contact Form**: Enhanced inputs with focus states
- **Contact Info**: Glassmorphism cards with click actions
- **Social Links**: Icon buttons with hover effects
- **CTA Card**: Gradient background with call-to-action

### Navbar
- **Fixed Position**: Backdrop blur with glassmorphism
- **Smooth Scroll**: JavaScript-powered navigation
- **Theme Toggle**: Dark/light mode switch
- **Mobile Menu**: Responsive drawer component

## 🔧 Configuration

### Next.js Config
```javascript
// next.config.js
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
}
```

### TypeScript Config
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Production deployment
vercel --prod
```

### Manual Build
```bash
# Build the application
npm run build

# Start production server
npm run start
```

### Environment Variables
Create `.env.local` for any environment-specific variables:
```bash
# Optional: Analytics or API keys
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## 🔍 SEO Features

### Meta Tags
- **Title**: Dynamic with template support
- **Description**: Comprehensive business description
- **Keywords**: Industry-relevant terms
- **OpenGraph**: Social media preview cards
- **Twitter Cards**: Enhanced sharing appearance

### Structured Data
- **Organization**: Company information
- **Website**: Site metadata
- **Local Business**: Location-based SEO

### Performance
- **Core Web Vitals**: Optimized for Google metrics
- **Image Optimization**: Automatic format conversion
- **Code Splitting**: Reduced bundle sizes

## 🧪 Testing

### Manual Testing Checklist
- [ ] Light/Dark mode toggle works
- [ ] All navigation links scroll smoothly
- [ ] Contact form validation works
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Hover animations function properly
- [ ] Page loads under 3 seconds

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 90+
- ✅ Safari 14+
- ✅ Edge 90+

## 🎨 Customization

### Adding New Sections
1. Create component in `/components/`
2. Import in `app/page.tsx`
3. Add navigation link in `Navbar.tsx`
4. Update CSS for consistency

### Modifying Colors
1. Update CSS variables in `app/globals.css`
2. Modify theme in `app/theme/ThemeProvider.tsx`
3. Test both light and dark modes

### Adding Animations
```css
/* Create new animation */
@keyframes yourAnimation {
  from { /* initial state */ }
  to { /* final state */ }
}

/* Apply with utility class */
.animate-yourAnimation {
  animation: yourAnimation 0.6s ease-out forwards;
}
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** changes (`git commit -m 'Add amazing feature'`)
4. **Push** to branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Style
- Use TypeScript for all components
- Follow ESLint configuration
- Maintain consistent naming conventions
- Add comments for complex logic

## 📊 Performance

### Lighthouse Scores (Target)
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimization Features
- Image lazy loading and optimization
- CSS and JavaScript minification
- Gzip compression enabled
- CDN-ready static assets

## 🐛 Troubleshooting

### Common Issues

**Dark mode not working**
- Check `ThemeProvider` is wrapping the app
- Verify `data-theme` attribute is set
- Ensure CSS selectors use `[data-theme="dark"]`

**Animations not showing**
- Check CSS animation classes are applied
- Verify browser supports CSS animations
- Test with reduced motion preferences

**Build errors**
- Run `npm run lint` to check for issues
- Verify all imports are correct
- Check TypeScript strict mode compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@industrix.id or create an issue in the repository.

---

## 🎯 Next Steps

### Planned Features
- [ ] Blog/News section
- [ ] Client testimonials carousel
- [ ] Interactive demos
- [ ] Multi-language support
- [ ] Advanced analytics integration

### Performance Improvements
- [ ] Implement service worker
- [ ] Add progressive web app features
- [ ] Optimize critical rendering path
- [ ] Add resource hints

---

**Built with ❤️ by the Industrix Team**

*Transform your industrial operations with smart digital solutions.*