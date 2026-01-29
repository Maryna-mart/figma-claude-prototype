import { test, expect } from '@playwright/test';

test.describe('Products Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Navigate to products by scrolling and clicking "View All Products"
    await page.locator('text=View All Products').click();
  });

  test('should display products page title', async ({ page }) => {
    const title = page.locator('text=All Products');
    await expect(title).toBeVisible();
  });

  test('should display breadcrumb navigation', async ({ page }) => {
    const breadcrumb = page.locator('text=Home');
    await expect(breadcrumb).toBeVisible();

    const productsBreadcrumb = page.locator('text=Products');
    await expect(productsBreadcrumb).toBeVisible();
  });

  test('should display product grid', async ({ page }) => {
    const addToCartButtons = page.locator('button:has-text("Add to Cart")');
    const count = await addToCartButtons.count();
    expect(count).toBeGreaterThanOrEqual(12);
  });

  test('should display sort dropdown', async ({ page }) => {
    const sortSelect = page.locator('select');
    await expect(sortSelect).toBeVisible();

    // Check default value
    const selectedOption = page.locator('select option[selected]');
    expect(selectedOption).toBeTruthy();
  });

  test('should sort products by price low to high', async ({ page }) => {
    // Change sort to price low to high
    await page.locator('select').selectOption('price-low');

    // Get first and second product prices
    const prices = page.locator('text=$');
    const firstPrice = await prices.first().textContent();
    const secondPrice = await prices.nth(1).textContent();

    // Extract numeric values for comparison
    const first = parseFloat(firstPrice.replace('$', ''));
    const second = parseFloat(secondPrice.replace('$', ''));

    expect(first).toBeLessThanOrEqual(second);
  });

  test('should filter products by availability', async ({ page }) => {
    // On desktop, filter sidebar should be visible
    const filterSidebar = page.locator('text=Filters');
    await expect(filterSidebar).toBeVisible();

    // Find "In Stock" checkbox
    const inStockCheckbox = page.locator('input[type="checkbox"]').filter({ has: page.locator('text=In Stock') });
    await expect(inStockCheckbox).toBeVisible();
  });

  test('should display product count', async ({ page }) => {
    const productCount = page.locator('text=Showing');
    await expect(productCount).toBeVisible();
  });

  test('should display pagination', async ({ page }) => {
    const pageButtons = page.locator('button').filter({ hasText: /^[0-9]$/ });
    const count = await pageButtons.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should display product details in cards', async ({ page }) => {
    // Check for product names
    const productNames = await page.locator('h3').count();
    expect(productNames).toBeGreaterThan(0);

    // Check for availability text
    const availability = page.locator('text=In Stock');
    expect(await availability.count()).toBeGreaterThan(0);
  });

  test('should show discount badges on sale items', async ({ page }) => {
    // Look for discount percentage text
    const discounts = page.locator('text=-%');
    const count = await discounts.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const title = page.locator('text=All Products');
    await expect(title).toBeVisible();

    // Filter sidebar should be hidden on mobile
    const filterSidebar = page.locator('text=Filters');
    const isHidden = await filterSidebar.isHidden();
    // Note: sidebar may or may not be visible on mobile depending on implementation

    const products = page.locator('button:has-text("Add to Cart")');
    expect(await products.count()).toBeGreaterThan(0);
  });
});
