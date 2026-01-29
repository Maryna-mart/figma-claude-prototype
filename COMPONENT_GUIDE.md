# Component Development Guide

Based on the Figma design analysis, here are the components needed for the Cloth Store e-commerce site.

## Component Hierarchy

```
App
├── Header (navigation, search, cart)
├── Pages
│   ├── HomePage (hero, products, sections)
│   ├── ProductsPage (filters, grid, pagination)
│   └── Other pages
└── Footer (links, info, newsletter)
```

## Atomic Components

### 1. Button
- Variants: primary, secondary, text
- States: default, hover, active, disabled
- Props: variant, size, disabled, onClick, children

### 2. Input Field
- Border: 1px solid #D9D9D9
- Focus border: 1px solid #000E8A
- Padding: 12px 16px
- Border-radius: 8px

### 3. Card
- Background: #FFFFFF
- Shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
- Border-radius: 8px
- Hover transform: translateY(-2px)

### 4. Checkbox/Radio
- Check color: #000E8A
- Size: 18x18px
- Border: 1px solid #D9D9D9

## Composite Components

### 5. Header
- Height: 64px
- Background: #FFFFFF
- Border-bottom: 1px solid #D9D9D9
- Position: sticky top-0
- Z-index: 100

### 6. ProductCard
- Responsive: 1/3 desktop, 1/2 tablet, full mobile
- Image aspect ratio: 1:1 (square)
- Price color: #000000, weight: 700

### 7. ProductGrid
- Desktop: 3-4 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 24px

### 8. FilterSidebar
- Width: 240px (desktop), full-width (mobile)
- Background: #FFFFFF
- Padding: 24px

### 9. Footer
- Background: #1E1E1E
- Text color: #FFFFFF
- Padding: 48px 24px 24px

## Page Components

### 10. HomePage
- Hero Section (heading, texture background, CTA)
- Featured Products (product grid)
- Category Sections (MEN, WOMEN, KIDS)

### 11. ProductsPage
- Breadcrumb navigation
- Filter sidebar (Size, Availability)
- Product grid with pagination

## Color Palette Reference

```javascript
colors: {
  primary: '#000000',      // Black
  secondary: '#5E5E5E',    // Charcoal
  background: '#FFFFFF',   // White
  border: '#D9D9D9',       // Light Gray
  accent: '#000E8A',       // Blue
  disabled: '#8A8A8A',     // Medium Gray
}
```

## Spacing Scale

```javascript
spacing: {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '48px',
  '4xl': '64px',
}
```

## Responsive Breakpoints

- xs: 320px
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## Implementation Tips

1. Use Tailwind CSS with custom design tokens in tailwind.config.js
2. Import design tokens from src/designTokens.js
3. Use CSS variables from src/designSystem.css
4. Follow atomic design pattern (atoms → molecules → organisms)
5. Test responsiveness at all breakpoints
6. Ensure WCAG AA accessibility compliance
7. Use semantic HTML elements
8. Implement keyboard navigation

## Files to Reference

- Design Specification: DESIGN_SPECIFICATION.md
- Design Tokens: src/designTokens.js
- CSS Variables: src/designSystem.css
- Tailwind Config: tailwind.config.js
