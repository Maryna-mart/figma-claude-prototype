import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display header with logo', async ({ page }) => {
    const logo = page.locator('text=CLOTH').first();
    await expect(logo).toBeVisible();
  });

  test('should display navigation menu on desktop', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });

    const menLink = page.locator('text=MEN').first();
    const womenLink = page.locator('text=WOMEN').first();
    const kidsLink = page.locator('text=KIDS').first();

    await expect(menLink).toBeVisible();
    await expect(womenLink).toBeVisible();
    await expect(kidsLink).toBeVisible();
  });

  test('should show mobile menu toggle on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    const menuButton = page.locator('button').filter({ hasText: '☰' });
    await expect(menuButton).toBeVisible();
  });

  test('should toggle mobile menu when button clicked', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const menuButton = page.locator('button').filter({ hasText: '☰' });
    await menuButton.click();

    // Mobile menu should become visible
    const menLink = page.locator('text=MEN').last();
    await expect(menLink).toBeVisible();
  });

  test('should display shopping cart icon', async ({ page }) => {
    const cartIcon = page.locator('text=🛒');
    await expect(cartIcon).toBeVisible();
  });

  test('should display sticky header that stays on scroll', async ({ page }) => {
    const header = page.locator('header').first();
    const headerBox = await header.boundingBox();
    const initialTop = headerBox.y;

    // Scroll down
    await page.evaluate(() => window.scrollBy(0, 500));

    const headerBoxAfter = await header.boundingBox();
    expect(headerBoxAfter.y).toBeLessThanOrEqual(initialTop + 100);
  });
});
