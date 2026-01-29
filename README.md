# Figma Claude Prototype

A modern e-commerce prototype built from Figma designs using Claude AI and the Figma MCP (Model Context Protocol) integration. This project demonstrates how effectively Claude can translate design files into production-ready code.

![React](https://img.shields.io/badge/React-18.3.1-blue) ![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC) ![Tests](https://img.shields.io/badge/Tests-235%2B-green)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server (opens on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Project Overview

This project showcases:
- ✅ **Design-to-Code Translation**: Direct extraction of design specs from Figma using MCP
- ✅ **Component-Driven Architecture**: 12+ reusable React components following Atomic Design
- ✅ **Design System Integration**: 27 colors, 11 typography scales, complete token system
- ✅ **Comprehensive Testing**: 235+ E2E test cases across 5 browsers/devices
- ✅ **Responsive Design**: Mobile-first approach with 3 breakpoints (320px, 768px, 1024px+)
- ✅ **Production-Ready**: CI/CD pipeline with automated testing and GitHub Pages deployment

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | React | 18.3.1 |
| **Build Tool** | Vite | 5.0.8 |
| **Styling** | Tailwind CSS | 3.4.0 |
| **Routing** | React Router | 7.13.0 |
| **Testing** | Playwright | 1.58.0 |
| **Package Manager** | npm | - |

## 📁 Project Structure

```
src/
├── components/          # 12 reusable UI components
│   ├── Button.jsx      # 4 variants: primary, secondary, outline, accent
│   ├── Badge.jsx       # 5 variants with color coding
│   ├── Card.jsx        # Container with hover effects
│   ├── Input.jsx       # Form input with validation states
│   ├── Checkbox.jsx    # Checkbox with label support
│   ├── Header.jsx      # Sticky header with mobile menu
│   ├── Navigation.jsx  # Category navigation
│   ├── ProductCard.jsx # Product display with cart integration
│   ├── ProductGrid.jsx # Responsive product layout
│   ├── CartModal.jsx   # Shopping cart drawer
│   ├── FilterSidebar.jsx # Product filtering UI
│   ├── Breadcrumb.jsx  # Navigation breadcrumbs
│   └── Footer.jsx      # Site footer with links
├── pages/              # Route components
│   ├── Home.jsx        # Landing page with hero & featured products
│   └── Products.jsx    # Product listing with filters & sorting
├── context/            # Global state management
│   └── CartContext.jsx # Shopping cart state & actions
├── hooks/              # Custom React hooks
│   └── useCart.js      # Cart context consumer hook
├── data/               # Static data
│   └── products.js     # Product catalog (12 items)
├── designTokens.js     # Design system tokens from Figma
├── designSystem.css    # Global styles & CSS variables
├── App.jsx            # Root component with routing
└── main.jsx           # Application entry point
```

## 🎨 Design System

All design tokens were extracted directly from Figma:

- **Colors**: 27 colors including primary (black/white), grays (5 shades), accent colors
- **Typography**: 11 font sizes from xs (12px) to 5xl (48px)
- **Spacing**: 10-step scale from xs (4px) to 5xl (80px)
- **Breakpoints**: Mobile (320px), Tablet (768px), Desktop (1024px+)
- **Components**: 12 fully documented, reusable components

See [DESIGN_SPECIFICATION.md](DESIGN_SPECIFICATION.md) for complete details.

## 🧪 Testing

Comprehensive E2E testing with Playwright:

```bash
# Run all tests (5 browsers/devices)
npm run test:e2e

# Run tests with interactive UI
npm run test:e2e:ui

# Debug tests
npm run test:e2e:debug

# View test report
npm run test:e2e:report
```

**Test Coverage**:
- ✅ 235+ test cases across 7 spec files
- ✅ Multi-browser: Chromium, Firefox, WebKit
- ✅ Mobile devices: Pixel 5, iPhone 12
- ✅ User flows: Navigation, cart management, filtering, responsive design

See [E2E_TESTS.md](E2E_TESTS.md) for detailed test documentation.

## 📦 Features

### Implemented ✅
- [x] Responsive design (mobile, tablet, desktop)
- [x] Shopping cart with add/remove/quantity management
- [x] Product filtering by size, availability, color
- [x] Product sorting (price, name)
- [x] Sticky header with mobile menu
- [x] Category navigation
- [x] Hero section with CTAs
- [x] Newsletter subscription UI
- [x] 12 reusable components
- [x] Client-side routing
- [x] Design token system
- [x] Comprehensive E2E tests
- [x] CI/CD pipeline with GitHub Actions

### Prototype Limitations
- [ ] Cart not persisted (resets on page refresh)
- [ ] No backend/API integration
- [ ] Pagination UI only (non-functional)
- [ ] Newsletter form without validation
- [ ] External placeholder images (picsum.photos)

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [CLAUDE.md](claude.md) | Project roadmap & implementation tracking |
| [COMPONENT_GUIDE.md](COMPONENT_GUIDE.md) | Component API reference with examples |
| [DESIGN_SPECIFICATION.md](DESIGN_SPECIFICATION.md) | Complete design token documentation |
| [FIGMA_ANALYSIS_SUMMARY.md](FIGMA_ANALYSIS_SUMMARY.md) | Figma design breakdown |
| [E2E_TESTS.md](E2E_TESTS.md) | Testing strategy & test cases |
| [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md) | Deployment guide |
| [DESIGN_DOCS_INDEX.md](DESIGN_DOCS_INDEX.md) | Documentation hub |
| [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) | Pre-deployment checklist |

## 🚀 Deployment

The project is configured for GitHub Pages deployment:

1. Push to `main` branch triggers automatic deployment
2. Build artifacts deployed to `gh-pages` branch
3. Tests run automatically in CI pipeline
4. Production build optimized with code splitting

See [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md) for detailed instructions.

## 🤝 Component Usage Examples

### Button Component
```jsx
import { Button } from './components';

<Button variant="primary">Add to Cart</Button>
<Button variant="secondary" disabled>Sold Out</Button>
<Button variant="outline">Learn More</Button>
```

### ProductCard Component
```jsx
import { ProductCard } from './components';
import { useCart } from './hooks/useCart';

function ProductList() {
  const { addToCart } = useCart();

  return (
    <ProductCard
      product={product}
      onAddToCart={addToCart}
    />
  );
}
```

See [COMPONENT_GUIDE.md](COMPONENT_GUIDE.md) for complete API documentation.

## 🎯 Project Metrics

- **Source Code**: ~1,400 lines of custom JavaScript/CSS
- **Components**: 12 reusable components
- **Pages**: 2 route pages
- **Test Cases**: 235+ E2E tests
- **Design Tokens**: 27 colors, 11 typography scales, 10 spacing values
- **Bundle Size**: ~93KB gzipped (estimated)
- **Dependencies**: Only 3 runtime dependencies (minimal footprint)

## 🔧 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run test:e2e` | Run all E2E tests |
| `npm run test:e2e:ui` | Run tests with interactive UI |
| `npm run test:e2e:debug` | Debug tests step-by-step |
| `npm run test:e2e:headed` | Run tests in headed mode |
| `npm run test:e2e:report` | View test results report |

### Build Configuration

- **Code Splitting**: React vendor and router chunks separated
- **Base Path**: `/figma-claude-prototype/` for GitHub Pages
- **Port**: Development server runs on port 3000
- **Auto-open**: Browser opens automatically on `npm run dev`

## 📝 License

This is a prototype/demonstration project.

## 🙏 Acknowledgments

- Built with Claude AI using the Figma MCP integration
- Design assets from Figma E-commerce UI Kit
- Placeholder images from [picsum.photos](https://picsum.photos)

---

**Project Status**: Production-ready prototype (~70% feature complete)
**Last Updated**: 2026-01-29
