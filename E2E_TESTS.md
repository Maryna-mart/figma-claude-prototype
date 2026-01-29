# E2E Tests with Playwright

Comprehensive end-to-end testing suite for the Cloth Store prototype using Playwright.

## Test Coverage

### 1. **Navigation Tests** (`e2e/navigation.spec.js`)
- Header logo visibility
- Desktop navigation menu display
- Mobile menu toggle
- Mobile menu interaction
- Shopping cart icon
- Sticky header on scroll

### 2. **Home Page Tests** (`e2e/home-page.spec.js`)
- Hero section content
- Hero CTA button
- Featured categories section
- Featured products display
- Product pricing and details
- Newsletter subscription section
- Footer visibility
- Responsive grid layout (mobile, tablet, desktop)

### 3. **Products Page Tests** (`e2e/products-page.spec.js`)
- Products page title and breadcrumb
- Product grid display
- Sort dropdown functionality
- Sorting by price (low to high)
- Filter sidebar visibility
- Product count display
- Pagination
- Product card details
- Discount badges
- Mobile responsiveness

### 4. **User Interactions** (`e2e/interactions.spec.js`)
- Add to cart functionality
- Out of stock product handling
- Product card hover effects
- Breadcrumb navigation
- Category navigation
- Checkbox filter toggling
- Sort dropdown changes
- Search input typing
- Newsletter email input
- Subscribe button click
- Button hover states

### 5. **Visual Design & Styling** (`e2e/visual-design.spec.js`)
- Color scheme validation
- Product spacing
- Border radius on cards
- Shadow effects on hover
- Typography hierarchy
- Consistent spacing
- Image display
- Button accessibility
- Badge variants
- Footer responsiveness
- Link styling

## Running Tests

### Run all tests
```bash
npm run test:e2e
```

### Run tests with UI
```bash
npm run test:e2e:ui
```

### Run tests in headed mode (see browser)
```bash
npm run test:e2e:headed
```

### Debug tests
```bash
npm run test:e2e:debug
```

### View test report
```bash
npm run test:e2e:report
```

## Test Configuration

The Playwright configuration (`playwright.config.js`) includes:

- **Browsers**: Chromium, Firefox, WebKit
- **Mobile**: Chrome (Pixel 5), Safari (iPhone 12)
- **Base URL**: http://localhost:3000
- **Auto-start server**: Dev server starts automatically
- **Artifacts**: Screenshots on failure, traces for debugging
- **Reporter**: HTML test report

## Prerequisites

Make sure the dev server is running or Playwright will start it automatically:

```bash
npm run dev
```

## How to Interpret Results

### ✅ All Tests Pass
Your prototype is working correctly across all tested scenarios and browsers.

### ⚠️ Some Tests Fail
Check the HTML report:
```bash
npm run test:e2e:report
```

The report will show:
- Which test failed
- Why it failed
- Screenshots of the failure
- Error messages

### 🐛 Debugging Failed Tests

1. **View test execution in browser**:
   ```bash
   npm run test:e2e:headed
   ```

2. **Step through with debugger**:
   ```bash
   npm run test:e2e:debug
   ```

3. **Check screenshots**: Located in `test-results/` folder

4. **Check traces**: Video recordings of test execution

## Responsive Design Testing

Tests automatically verify:
- **Desktop** (1280px × 720px)
- **Tablet** (768px × 1024px)
- **Mobile** (375px × 667px)
- **Mobile browsers** (Pixel 5, iPhone 12)

## What Gets Tested

✅ Functionality
- Navigation between pages
- Add to cart
- Filtering and sorting
- Form inputs
- Button clicks

✅ Responsiveness
- Mobile layout
- Tablet layout
- Desktop layout
- Touch interactions

✅ Visual Design
- Colors and styling
- Spacing and alignment
- Typography
- Shadows and effects
- Image loading

✅ Accessibility
- Button states
- Link visibility
- Form inputs
- Focus management

## Continuous Integration

To run tests in CI/CD pipeline:

```bash
npm run test:e2e
```

Tests will:
1. Start the dev server
2. Run all tests
3. Generate HTML report
4. Exit with code 0 (success) or 1 (failure)

## Extending Tests

To add new tests:

1. Create a new `.spec.js` file in the `e2e` folder
2. Follow the same pattern:
   ```javascript
   import { test, expect } from '@playwright/test';

   test.describe('Feature Name', () => {
     test.beforeEach(async ({ page }) => {
       await page.goto('/');
     });

     test('should do something', async ({ page }) => {
       // Test code here
     });
   });
   ```

3. Run tests:
   ```bash
   npm run test:e2e
   ```

## Test Maintenance

Update tests when:
- UI components change
- New features are added
- Design changes
- Navigation changes
- Responsive breakpoints change

Keep selectors stable by:
- Using `text=` selectors when possible
- Using data attributes in complex cases
- Avoiding brittle CSS selectors

## Troubleshooting

### "Dev server failed to start"
- Make sure port 3000 is free
- Check that `npm run dev` works manually

### "Element not found"
- Check if the selector is correct
- Verify the element is visible on the page
- Use `--headed` or `--debug` mode

### "Tests timeout"
- Increase timeout in `playwright.config.js`
- Check internet connection for image loading
- Verify dev server is responsive

## Report Location

After running tests, view the report:
```bash
npm run test:e2e:report
```

Reports are generated in: `playwright-report/index.html`
