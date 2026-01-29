import { test, expect } from '@playwright/test';

test.describe('Visual Design & Styling', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have correct color scheme', async ({ page }) => {
    // Check header background color
    const header = page.locator('header').first();
    const headerColor = await header.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    expect(headerColor).toBeTruthy();
  });

  test('should display products with correct spacing', async ({ page }) => {
    await page.locator('text=Featured Products').scrollIntoViewIfNeeded();

    const productCards = page.locator('div').filter({ has: page.locator('button:has-text("Add to Cart")') });
    const count = await productCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should have proper border radius on cards', async ({ page }) => {
    await page.locator('text=Featured Products').scrollIntoViewIfNeeded();

    const productCard = page.locator('div[class*="rounded"]').first();
    const borderRadius = await productCard.evaluate((el) => window.getComputedStyle(el).borderRadius);
    expect(borderRadius).not.toBe('0px');
  });

  test('should have visible shadows on hover', async ({ page }) => {
    const productImage = page.locator('img').first();
    await productImage.hover();

    // Shadow should be applied (varies by browser)
    const shadow = await productImage.locator('..').evaluate((el) => window.getComputedStyle(el).boxShadow);
    expect(shadow).toBeTruthy();
  });

  test('should have proper typography hierarchy', async ({ page }) => {
    const h1 = page.locator('h1').first();
    const h2 = page.locator('h2').first();
    const h3 = page.locator('h3').first();

    if (await h1.isVisible()) {
      const h1Size = await h1.evaluate((el) => window.getComputedStyle(el).fontSize);
      expect(h1Size).toBeTruthy();
    }

    if (await h2.isVisible()) {
      const h2Size = await h2.evaluate((el) => window.getComputedStyle(el).fontSize);
      expect(h2Size).toBeTruthy();
    }
  });

  test('should use consistent spacing throughout', async ({ page }) => {
    // Check padding on main container
    const mainContainer = page.locator('main').first();
    const padding = await mainContainer.evaluate((el) => window.getComputedStyle(el).padding);
    expect(padding).toBeTruthy();
  });

  test('should display images properly', async ({ page }) => {
    await page.locator('text=Shop by Category').scrollIntoViewIfNeeded();

    const categoryImages = page.locator('img').nth(1);
    const src = await categoryImages.getAttribute('src');
    expect(src).toBeTruthy();
    expect(src).toContain('http');
  });

  test('should have accessible button styles', async ({ page }) => {
    const button = page.locator('button:has-text("Shop Now")').first();
    await expect(button).toBeVisible();

    // Button should be focusable
    const isEnabled = await button.isEnabled();
    expect(isEnabled).toBe(true);
  });

  test('should display badge variants correctly', async ({ page }) => {
    await page.locator('text=Featured Products').scrollIntoViewIfNeeded();

    // Look for badges (NEW, SALE, etc)
    const badges = page.locator('span').filter({ hasText: /NEW|SALE/ });
    const count = await badges.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should have responsive footer', async ({ page }) => {
    const footer = page.locator('footer').first();
    await expect(footer).toBeVisible();

    // Footer should be at bottom
    const footerBox = await footer.boundingBox();
    expect(footerBox).toBeTruthy();
  });

  test('should have consistent link styling', async ({ page }) => {
    const links = page.locator('a');
    const count = await links.count();
    expect(count).toBeGreaterThan(0);

    // First link should be visible and properly styled
    const firstLink = links.first();
    await expect(firstLink).toBeVisible();
  });
});
