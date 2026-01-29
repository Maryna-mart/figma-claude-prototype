import { test, expect } from '@playwright/test';

test.describe('Client-side Routing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display home page by default', async ({ page }) => {
    // Verify we're on home page
    const heroSection = page.locator('text=Welcome to CLOTH').first();
    await expect(heroSection).toBeVisible();
  });

  test('should navigate to products page when clicking MEN category', async ({ page }) => {
    // Click on MEN link
    const menLink = page.locator('text=MEN').first();
    await menLink.click();

    // Wait for navigation and verify Products page loads
    await page.waitForURL(/\/products/);
    const productsTitle = page.locator('text=Our Collection');
    await expect(productsTitle).toBeVisible();
  });

  test('should navigate to products page when clicking WOMEN category', async ({ page }) => {
    // Click on WOMEN link
    const womenLink = page.locator('text=WOMEN').first();
    await womenLink.click();

    // Wait for navigation and verify Products page loads
    await page.waitForURL(/\/products/);
    const productsTitle = page.locator('text=Our Collection');
    await expect(productsTitle).toBeVisible();
  });

  test('should navigate to products page when clicking KIDS category', async ({ page }) => {
    // Click on KIDS link
    const kidsLink = page.locator('text=KIDS').first();
    await kidsLink.click();

    // Wait for navigation and verify Products page loads
    await page.waitForURL(/\/products/);
    const productsTitle = page.locator('text=Our Collection');
    await expect(productsTitle).toBeVisible();
  });

  test('should navigate back to home page from products page', async ({ page }) => {
    // Go to products page first
    const menLink = page.locator('text=MEN').first();
    await menLink.click();
    await page.waitForURL(/\/products/);

    // Click logo or home link to go back
    const homeLink = page.locator('text=CLOTH').first();
    await homeLink.click();

    // Verify we're back on home page
    await page.waitForURL('/');
    const heroSection = page.locator('text=Welcome to CLOTH').first();
    await expect(heroSection).toBeVisible();
  });

  test('should maintain URL on page refresh', async ({ page }) => {
    // Navigate to products
    const menLink = page.locator('text=MEN').first();
    await menLink.click();
    await page.waitForURL(/\/products/);

    // Refresh page
    await page.reload();

    // Verify still on products page
    const productsTitle = page.locator('text=Our Collection');
    await expect(productsTitle).toBeVisible();
  });

  test('should navigate using browser back button', async ({ page }) => {
    // Navigate to products
    const menLink = page.locator('text=MEN').first();
    await menLink.click();
    await page.waitForURL(/\/products/);

    // Use browser back button
    await page.goBack();

    // Verify back on home page
    const heroSection = page.locator('text=Welcome to CLOTH').first();
    await expect(heroSection).toBeVisible();
  });

  test('should navigate using browser forward button', async ({ page }) => {
    // Navigate to products
    const menLink = page.locator('text=MEN').first();
    await menLink.click();
    await page.waitForURL(/\/products/);

    // Go back
    await page.goBack();

    // Go forward
    await page.goForward();

    // Verify back on products page
    const productsTitle = page.locator('text=Our Collection');
    await expect(productsTitle).toBeVisible();
  });

  test('should handle mobile navigation from products page', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Navigate to products
    const menLink = page.locator('text=MEN').first();
    await menLink.click();
    await page.waitForURL(/\/products/);

    // Verify products page displays correctly on mobile
    const productsTitle = page.locator('text=Our Collection');
    await expect(productsTitle).toBeVisible();
  });
});
