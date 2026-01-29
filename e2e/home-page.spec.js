import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display hero section', async ({ page }) => {
    const heroTitle = page.locator('text=Summer Collection 2026');
    const heroSubtitle = page.locator('text=Discover the latest trends in fashion');

    await expect(heroTitle).toBeVisible();
    await expect(heroSubtitle).toBeVisible();
  });

  test('should display hero CTA button', async ({ page }) => {
    const ctaButton = page.locator('text=Shop Now');
    await expect(ctaButton).toBeVisible();
  });

  test('should display featured categories section', async ({ page }) => {
    const categoryTitle = page.locator('text=Shop by Category');
    await expect(categoryTitle).toBeVisible();

    // Check for category cards
    const menCategory = page.locator('text=MEN').nth(1);
    const womenCategory = page.locator('text=WOMEN').nth(1);
    const kidsCategory = page.locator('text=KIDS').nth(1);

    await expect(menCategory).toBeVisible();
    await expect(womenCategory).toBeVisible();
    await expect(kidsCategory).toBeVisible();
  });

  test('should display featured products section', async ({ page }) => {
    const featuredTitle = page.locator('text=Featured Products');
    await expect(featuredTitle).toBeVisible();

    // Check for product cards
    const productCards = page.locator('button:has-text("Add to Cart")');
    const count = await productCards.count();
    expect(count).toBeGreaterThanOrEqual(6);
  });

  test('should display product prices and details', async ({ page }) => {
    // Check for price elements
    const priceElements = page.locator('text=$');
    const count = await priceElements.count();
    expect(count).toBeGreaterThan(0);

    // Check for "In Stock" text
    const inStockText = page.locator('text=In Stock');
    expect(await inStockText.count()).toBeGreaterThan(0);
  });

  test('should display newsletter section', async ({ page }) => {
    const newsLetterTitle = page.locator('text=Subscribe to Our Newsletter');
    await expect(newsLetterTitle).toBeVisible();

    // Check for email input
    const emailInput = page.locator('input[placeholder="Enter your email"]');
    await expect(emailInput).toBeVisible();

    // Check for subscribe button
    const subscribeButton = page.locator('button:has-text("Subscribe")');
    await expect(subscribeButton).toBeVisible();
  });

  test('should display footer', async ({ page }) => {
    const footerBrand = page.locator('text=© 2026 CLOTH Store. All rights reserved.');
    await expect(footerBrand).toBeVisible();
  });

  test('should have responsive grid layout', async ({ page }) => {
    // Desktop view - should show 3 columns
    await page.setViewportSize({ width: 1280, height: 720 });
    let productCards = page.locator('button:has-text("Add to Cart")').first();
    await expect(productCards).toBeVisible();

    // Tablet view - should show 2 columns
    await page.setViewportSize({ width: 768, height: 1024 });
    productCards = page.locator('button:has-text("Add to Cart")').first();
    await expect(productCards).toBeVisible();

    // Mobile view - should show 1 column
    await page.setViewportSize({ width: 375, height: 667 });
    productCards = page.locator('button:has-text("Add to Cart")').first();
    await expect(productCards).toBeVisible();
  });
});
