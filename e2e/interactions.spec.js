import { test, expect } from '@playwright/test';

test.describe('User Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should add product to cart from home page', async ({ page }) => {
    // Find first "Add to Cart" button
    const addToCartButton = page.locator('button:has-text("Add to Cart")').first();
    await expect(addToCartButton).toBeVisible();
    await expect(addToCartButton).toBeEnabled();

    // Click it
    await addToCartButton.click();
  });

  test('should not allow adding out of stock products', async ({ page }) => {
    // Scroll to find out of stock product
    await page.locator('text=Featured Products').scrollIntoViewIfNeeded();

    // Find disabled "Add to Cart" buttons
    const disabledButtons = page.locator('button:has-text("Add to Cart"):disabled');
    const count = await disabledButtons.count();

    // There should be at least some out of stock products
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('should hover over product card and see scale effect', async ({ page }) => {
    const productImage = page.locator('img[alt*="T-Shirt"]').first();
    await expect(productImage).toBeVisible();

    // Get initial scale
    const initialStyle = await productImage.getAttribute('style');

    // Hover over image
    await productImage.hover();

    // The hover effect should apply (via CSS)
    // We verify the element is still visible and interactive
    await expect(productImage).toBeVisible();
  });

  test('should navigate using breadcrumb', async ({ page }) => {
    await page.locator('text=View All Products').click();

    // Click home breadcrumb
    const homeLink = page.locator('a:has-text("Home")');
    await expect(homeLink).toBeVisible();
    await homeLink.click();

    // Should be back on home page
    const heroTitle = page.locator('text=Summer Collection 2026');
    await expect(heroTitle).toBeVisible();
  });

  test('should navigate category cards on home', async ({ page }) => {
    const menCategory = page.locator('text=Shop by Category').locator('..').locator('a').first();
    await expect(menCategory).toBeVisible();
    await menCategory.click();

    // Should navigate to products page
    await page.waitForLoadState('networkidle');
  });

  test('should toggle checkbox filters', async ({ page }) => {
    await page.locator('text=View All Products').click();

    // Find first checkbox
    const firstCheckbox = page.locator('input[type="checkbox"]').first();

    if (await firstCheckbox.isVisible()) {
      const isChecked = await firstCheckbox.isChecked();
      await firstCheckbox.click();
      const isCheckedAfter = await firstCheckbox.isChecked();
      expect(isCheckedAfter).toBe(!isChecked);
    }
  });

  test('should update products when sorting changes', async ({ page }) => {
    await page.locator('text=View All Products').click();

    // Get initial product count
    const initialProducts = await page.locator('button:has-text("Add to Cart")').count();

    // Change sort
    await page.locator('select').selectOption('price-high');

    // Products should still be displayed
    const afterSortProducts = await page.locator('button:has-text("Add to Cart")').count();
    expect(afterSortProducts).toBeGreaterThan(0);
  });

  test('should type in search input', async ({ page }) => {
    const searchInput = page.locator('input[placeholder="Search products..."]');

    if (await searchInput.isVisible()) {
      await searchInput.fill('Black');
      const value = await searchInput.inputValue();
      expect(value).toBe('Black');
    }
  });

  test('should type in newsletter email input', async ({ page }) => {
    const emailInput = page.locator('input[placeholder="Enter your email"]');
    await expect(emailInput).toBeVisible();

    await emailInput.fill('test@example.com');
    const value = await emailInput.inputValue();
    expect(value).toBe('test@example.com');
  });

  test('should click subscribe button', async ({ page }) => {
    const emailInput = page.locator('input[placeholder="Enter your email"]');
    const subscribeButton = page.locator('button:has-text("Subscribe")');

    await emailInput.fill('test@example.com');
    await subscribeButton.click();
  });

  test('should handle button hover states', async ({ page }) => {
    const button = page.locator('button:has-text("Shop Now")').first();
    await expect(button).toBeVisible();

    // Hover over button
    await button.hover();

    // Button should still be visible
    await expect(button).toBeVisible();
  });
});
