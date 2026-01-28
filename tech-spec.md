# MyStaff App - Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| State Management | React useState/useContext |

## 2. Tailwind Configuration Guide

```javascript
// tailwind.config.js extensions
{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e4a7e',
          dark: '#163a63',
          light: '#2d5a8e',
        },
        accent: {
          DEFAULT: '#f4b942',
          hover: '#e5aa33',
        },
        'yellow-bar': '#d4a03a',
        'card-blue': '#1e4a7e',
        'bg-blue': '#e8f0f8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)
- Button
- Card
- Slider
- Badge
- Separator

### Custom Components

#### Layout Components
| Component | Props | Description |
|-----------|-------|-------------|
| `Navbar` | `scrolled: boolean` | Fixed navigation with scroll behavior |
| `Footer` | - | Site footer with links |
| `Container` | `children, className` | Max-width container wrapper |

#### Section Components
| Component | Props | Description |
|-----------|-------|-------------|
| `HeroSection` | `activeIndustry: string` | Hero with dynamic background |
| `IndustrySelector` | `activeIndustry, onSelect` | Industry tabs selector |
| `YellowInfoBar` | - | Problem/solution cards |
| `PlatformFeatures` | - | 4-card feature grid |
| `DocManagementFeatures` | - | 8-card feature grid |
| `UseCases` | - | Circular diagram |
| `ComplianceApproach` | - | Bullet list section |
| `SavingsCalculator` | - | Interactive slider calculator |
| `CoreModules` | - | Product modules grid |
| `AwardsSection` | - | Awards display |
| `RealImpact` | - | Stats section |
| `FooterCTA` | - | Call-to-action footer |

#### UI Components
| Component | Props | Description |
|-----------|-------|-------------|
| `FeatureCard` | `image, title, description, number` | Platform feature card |
| `DocFeatureCard` | `icon, title` | Document feature card |
| `ModuleCard` | `image, title, description` | Product module card |
| `UseCaseCard` | `icon, title, description` | Use case card |
| `StatCard` | `icon, title, description` | Statistics card |
| `AwardBadge` | `image, alt` | Award badge display |

## 4. Animation Implementation Plan

| Interaction | Tech | Implementation |
|-------------|------|----------------|
| Page Load | Framer Motion | `staggerChildren` container, `fadeIn + slideUp` children |
| Navbar Scroll | React State + CSS | `useScroll` hook toggles `scrolled` class |
| Hero Parallax | Framer Motion | `useScroll` + `useTransform` for background |
| Section Reveal | Framer Motion | `whileInView` with `fadeIn + slideUp` |
| Card Hover | Tailwind | `hover:-translate-y-1 hover:shadow-xl transition-all duration-300` |
| Button Hover | Tailwind | `hover:scale-102 hover:shadow-lg transition-all duration-200` |
| Industry Select | React State | Active state with smooth background transition |
| Slider | shadcn Slider | Built-in drag animation |
| Number Count | Custom Hook | `useCountUp` hook for animated numbers |
| Float Animation | CSS | `animate-float` keyframe animation |

### Animation Timing Reference
```typescript
const animations = {
  fast: { duration: 0.15 },
  default: { duration: 0.3 },
  slow: { duration: 0.5 },
  easing: [0.4, 0, 0.2, 1], // ease-out
  spring: { type: 'spring', stiffness: 300, damping: 30 },
};
```

## 5. Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── hero-healthcare.jpg
│   │   ├── hero-education.jpg
│   │   ├── hero-education-teacher.jpg
│   │   ├── doctor-savings.jpg
│   │   ├── real-impact.jpg
│   │   ├── feature-instant-access.jpg
│   │   ├── feature-high-uptake.jpg
│   │   ├── feature-material-depth.jpg
│   │   ├── feature-material-compliance.jpg
│   │   └── device-mockup.png
│   └── awards/
│       ├── hetty.svg
│       ├── health-tech-digital.svg
│       ├── workforce-finalist.svg
│       └── hsj-awards.svg
├── src/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── YellowInfoBar.tsx
│   │   ├── PlatformFeatures.tsx
│   │   ├── DocManagementFeatures.tsx
│   │   ├── UseCases.tsx
│   │   ├── ComplianceApproach.tsx
│   │   ├── SavingsCalculator.tsx
│   │   ├── CoreModules.tsx
│   │   ├── AwardsSection.tsx
│   │   ├── RealImpact.tsx
│   │   ├── FooterCTA.tsx
│   │   └── Footer.tsx
│   ├── components/
│   │   ├── IndustrySelector.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── DocFeatureCard.tsx
│   │   ├── ModuleCard.tsx
│   │   ├── UseCaseCard.tsx
│   │   ├── StatCard.tsx
│   │   └── AwardBadge.tsx
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useCountUp.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 6. Package Installation List

```bash
# Already installed via init script
# - react, react-dom
# - typescript
# - vite
# - tailwindcss
# - @radix-ui/*
# - lucide-react
# - class-variance-authority
# - clsx
# - tailwind-merge

# Additional packages to install
npm install framer-motion
```

## 7. Key Implementation Notes

### Hero Section Dynamic Background
- Use React state to track active industry
- Preload all background images
- Smooth crossfade transition between backgrounds
- Industry selector updates state on click

### Savings Calculator
- Slider range: 0 to 400 (representing £0 to £400M)
- Calculate savings based on percentage of operational spend
- Animate number changes with useCountUp hook
- Format currency with Intl.NumberFormat

### Use Cases Circular Diagram
- Use absolute positioning for circular layout
- SVG dashed lines for connections
- Center logo with connected cards
- Responsive: stack vertically on mobile

### Navbar Scroll Behavior
- Track scroll position with useScrollPosition hook
- Toggle `scrolled` state at threshold (e.g., 50px)
- Animate background and logo color transitions

### Performance Considerations
- Use `will-change` on animated elements
- Lazy load images below the fold
- Use `transform` and `opacity` for animations
- Implement `prefers-reduced-motion` media query
