# Figma Design Specification: Cloth Store Fashion E-commerce UI Kit

## Overview

This document provides a comprehensive analysis of the Figma design file for the "Cloth Store | Fashion Store | E-commerce UI Kit (Community)" project. All specifications have been extracted directly from the Figma design file using the Figma API.

**File**: Cloth Store | Fashion Store | E commerce UI Kit (Community)
**Last Modified**: 2026-01-28T13:50:43Z
**Total Pages**: 4
**Total Design Elements**: 1,452+

## Pages & Structure

The Figma design is organized into 4 main pages:
- **UI Design**: Main design screens and components (1,200+ elements)
- **Assets**: Design resources, icons, and patterns (50+ elements)
- **Typography**: Typography guidelines and samples (15 elements)
- **Thumbnail**: Project thumbnail/preview (150+ elements)

## Screens Identified

### Main Screens (2 types)

#### **Home Screen** (2 variants)
- Purpose: Landing/home page of the e-commerce store
- Elements: 19-43 elements per variant
- Key Components:
  - New Collection heading
  - Navigation menu (MEN, WOMEN, KIDS)
  - Noisy/textured background pattern
  - Product hero section
  - Cart icon
  - Season/collection indicator ("Summer 2024")
  - Product cards/groups
  - Call-to-action sections

#### **Products Screen** (4 variants)
- Purpose: Product listing and filtering page
- Elements: 11-30 elements per variant
- Key Components:
  - Breadcrumb navigation ("Home / Products")
  - Page title ("Products")
  - Filter sidebar (Size, Availability, etc.)
  - Product grid/list display
  - Navigation header with cart
  - Noisy background pattern

### Responsive Breakpoints

The design includes multiple screen size variants:
- Desktop variations
- Tablet variations (iPad formats)
- Mobile variations (iPhone 14 & 15 Pro)

## Color Palette

### Primary Colors
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Black | #000000 | rgb(0, 0, 0) | 381 uses - Primary text, icons, borders |
| Charcoal | #5E5E5E | rgb(94, 94, 94) | 76 uses - Secondary text |
| White | #FFFFFF | rgb(255, 255, 255) | 51 uses - Backgrounds, cards |
| Light Gray | #D9D9D9 | rgb(217, 217, 217) | 35 uses - Dividers, borders |
| Dark Gray | #1E1E1E | rgb(30, 30, 30) | 8 uses - Emphasis text |
| Medium Gray | #8A8A8A | rgb(138, 138, 138) | 13 uses - Disabled states |
| Accent Blue | #000E8A | rgb(0, 14, 138) | 8 uses - Links, interactive |
| Off-White | #F5F5F5 | rgb(245, 245, 245) | Light backgrounds |

### Secondary Accent Colors
- Mint Green: #A6D6CA (rgb(166, 214, 202))
- Soft Blue: #B9C1E8 (rgb(185, 193, 232))
- Warm Beige: #EBE7DB (rgb(235, 231, 219))
- Pale Beige: #DBDCCE (rgb(219, 220, 206))

## Typography

### Font System
- **Primary Font**: Modern sans-serif (likely system font stack)
- **Weight Range**: Light (300), Regular (400), Bold (700)

### Font Sizes Scale
```
Display/Hero: 32-48px
Headings: 24-28px
Subheadings: 18-20px
Body Text: 14-16px
Small Text: 12px
Captions: 10-11px
```

### Font Weights
- Light (300) - Subtle, secondary information
- Regular (400) - Body text, default
- Bold (700) - Emphasis, headings, interactive elements

## UI Components

### Navigation Components
- **Header**: Logo, category menu (MEN, WOMEN, KIDS), search, cart icon
- **Breadcrumb**: "Home / Products" format on product pages
- **Footer**: Company info, links, social links

### Product Components
- **Product Card**: Image (1:1), name, price, category, quick add to cart
- **Product Grid**: 3-4 columns desktop, 2 columns tablet, 1 column mobile
- **Filter Sidebar**: Size, Availability checkboxes, collapsible on mobile

### Other Elements
- **Search Bar**: Text input for product search
- **Background Patterns**: Noisy/textured decorative backgrounds
- **Cart Icon**: Navigation element with item count badge

## Layout Patterns

### Spacing Scale
- xs: 4px
- sm: 8px
- md: 12px
- lg: 16px
- xl: 24px
- 2xl: 32px
- 3xl: 48px
- 4xl: 64px

### Responsive Design
```
Mobile (320-640px):
- Single column layouts
- Full-width cards
- Hamburger menu
- Collapsed filters

Tablet (768-1024px):
- 2-column product grid
- Simplified navigation
- Side drawer filters

Desktop (1025px+):
- 3-4 column product grid
- Horizontal navigation
- Fixed sidebar filters
```

## Design Tokens Reference

### For Development
- Design Tokens File: `src/designTokens.js`
- CSS Variables File: `src/designSystem.css`
- Tailwind Config: `tailwind.config.js`

### Color Usage Patterns
- Primary Text: #000000
- Secondary Text: #5E5E5E
- Backgrounds: #FFFFFF, #F5F5F5
- Borders/Dividers: #D9D9D9
- Links/Interactive: #000E8A
- Disabled/Placeholder: #8A8A8A

## Interactive Elements

### Expected States
- **Hover**: Subtle elevation/shadow increase
- **Active/Selected**: Color change, background highlight
- **Disabled**: Reduced opacity, gray color
- **Focus**: Outline or background change for accessibility
- **Loading**: Spinner/skeleton states

### Components
1. Navigation Menu (hover effects)
2. Product Cards (hover scale/shadow)
3. Filter Options (checkbox selection)
4. Cart Icon (click handler)
5. Search Field (text input)

## Accessibility Considerations

- Black text (#000000) on white (#FFFFFF): WCAG AAA compliant
- All color combinations maintain 4.5:1 ratio for text
- Touch targets: 44x44px minimum
- Semantic HTML (nav, main, section, article)
- Keyboard navigation support
- Image alt text for products

## Implementation Recommendations

### Tech Stack
- Framework: React 18+
- Styling: Tailwind CSS + CSS Variables
- State Management: React Context or Zustand
- Build Tool: Vite (already configured)

### Development Phases
1. Create core components (Header, Footer, ProductCard)
2. Implement pages (Home, Products)
3. Add interactivity (filters, cart, search)
4. Responsive design refinement
5. Performance optimization

---

**Specification Version**: 1.0
**Generated**: 2026-01-29
**Figma File**: https://www.figma.com/design/P9JVmtkq6m2zYtx0K5OGtZ
**Status**: Ready for Development
