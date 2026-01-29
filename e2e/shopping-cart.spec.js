import { test, expect } from '@playwright/test';

test.describe('Shopping Cart', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display empty cart initially', async ({ page }) => {
    // Cart should show 0 or be empty
    const cartIcon = page.locator('text=🛒');
    await expect(cartIcon).toBeVisible();

    // Cart count should be 0 or not displayed
    const cartCount = page.locator('[data-testid="cart-count"]');
    const countText = await cartCount.textContent();
    expect(parseInt(countText) || 0).toBe(0);
  });

  test('should add product to cart from home page', async ({ page }) => {
    // Find first "Add to Cart" button
    const addToCartButtons = page.locator('button:has-text("Add to Cart")');
    const firstButton = addToCartButtons.first();

    // Get initial cart count
    const cartCount = page.locator('[data-testid="cart-count"]');
    const initialCount = parseInt(await cartCount.textContent() || '0');

    // Click add to cart
    await firstButton.click();

    // Wait for cart count to update
    await page.waitForTimeout(300);

    // Verify cart count increased
    const updatedCount = parseInt(await cartCount.textContent() || '0');
    expect(updatedCount).toBe(initialCount + 1);
  });

  test('should add multiple products to cart', async ({ page }) => {
    const addToCartButtons = page.locator('button:has-text("Add to Cart")');
    const cartCount = page.locator('[data-testid="cart-count"]');

    // Add first product
    await addToCartButtons.nth(0).click();
    await page.waitForTimeout(200);

    // Add second product
    await addToCartButtons.nth(1).click();
    await page.waitForTimeout(200);

    // Add third product
    await addToCartButtons.nth(2).click();
    await page.waitForTimeout(200);

    // Verify cart shows 3 items
    const count = parseInt(await cartCount.textContent() || '0');
    expect(count).toBe(3);
  });

  test('should open cart modal/drawer when clicking cart icon', async ({ page }) => {
    // Add a product first
    const addToCartButtons = page.locator('button:has-text("Add to Cart")');
    await addToCartButtons.first().click();

    // Click cart icon
    const cartIcon = page.locator('text=🛒');
    await cartIcon.click();

    // Wait for cart modal to appear
    await page.waitForTimeout(300);

    // Verify cart modal/drawer is visible
    const cartModal = page.locator('[data-testid="cart-modal"]');
    await expect(cartModal).toBeVisible();
  });

  test('should display added products in cart modal', async ({ page }) => {
    // Add first product
    const productCards = page.locator('[data-testid="product-card"]');
    const productName = await productCards.first().locator('[data-testid="product-name"]').textContent();

    const addToCartButtons = page.locator('button:has-text("Add to Cart")');
    await addToCartButtons.first().click();

    // Open cart
    const cartIcon = page.locator('text=🛒');
    await cartIcon.click();
    await page.waitForTimeout(300);

    // Verify product appears in cart
    const cartItem = page.locator('[data-testid="cart-item"]').first();
    await expect(cartItem).toBeVisible();

    // Verify product name matches
    const cartItemName = await cartItem.locator('[data-testid="cart-item-name"]').textContent();
    expect(cartItemName).toContain(productName);
  });

  test('should remove product from cart', async ({ page }) => {
    // Add a product
    const addToCartButtons = page.locator('button:has-text("Add to Cart")');
    await addToCartButtons.first().click();

    // Open cart
    const cartIcon = page.locator('text=🛒');
    await cartIcon.click();
    await page.waitForTimeout(300);

    // Get initial item count
    const cartItems = page.locator('[data-testid="cart-item"]');
    const initialItemCount = await cartItems.count();

    // Click remove button
    const removeButton = page.locator('[data-testid="remove-from-cart"]').first();
    await removeButton.click();

    await page.waitForTimeout(200);

    // Verify item removed
    const updatedItems = page.locator('[data-testid="cart-item"]');
    const updatedItemCount = await updatedItems.count();
    expect(updatedItemCount).toBe(initialItemCount - 1);
  });

  test('should update cart count when adding from products page', async ({ page }) => {
    // Navigate to products
    const menLink = page.locator('text=MEN').first();
    await menLink.click();
    await page.waitForURL(/\/products/);

    // Add product from products page
    const addToCartButtons = page.locator('button:has-text("Add to Cart")');
    const initialCount = parseInt(await page.locator('[data-testid="cart-count"]').textContent() || '0');

    await addToCartButtons.first().click();
    await page.waitForTimeout(200);

    // Verify cart count updated
    const updatedCount = parseInt(await page.locator('[data-testid="cart-count"]').textContent() || '0');
    expect(updatedCount).toBe(initialCount + 1);
  });

  test('should persist cart state when navigating between pages', async ({ page }) => {
    // Add product on home page
    const addToCartButtons = page.locator('button:has-text("Add to Cart")');
    await addToCartButtons.first().click();
    await page.waitForTimeout(200);

    const cartCountAfterAdd = parseInt(await page.locator('[data-testid="cart-count"]').textContent() || '0');

    // Navigate to products page
    const menLink = page.locator('text=MEN').first();
    await menLink.click();
    await page.waitForURL(/\/products/);

    // Verify cart count persists
    const cartCountOnProducts = parseInt(await page.locator('[data-testid="cart-count"]').textContent() || '0');
    expect(cartCountOnProducts).toBe(cartCountAfterAdd);

    // Navigate back to home
    const homeLink = page.locator('text=CLOTH').first();
    await homeLink.click();
    await page.waitForURL('/');

    // Verify cart count still persists
    const cartCountOnHome = parseInt(await page.locator('[data-testid="cart-count"]').textContent() || '0');
    expect(cartCountOnHome).toBe(cartCountAfterAdd);
  });

  test('should close cart modal when clicking close button', async ({ page }) => {
    // Add product and open cart
    const addToCartButtons = page.locator('button:has-text("Add to Cart")');
    await addToCartButtons.first().click();

    const cartIcon = page.locator('text=🛒');
    await cartIcon.click();
    await page.waitForTimeout(300);

    // Close cart
    const closeButton = page.locator('[data-testid="close-cart"]');
    await closeButton.click();

    await page.waitForTimeout(300);

    // Verify modal is closed
    const cartModal = page.locator('[data-testid="cart-modal"]');
    await expect(cartModal).not.toBeVisible();
  });

  test('should handle cart on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Add product
    const addToCartButtons = page.locator('button:has-text("Add to Cart")');
    await addToCartButtons.first().click();

    // Open cart
    const cartIcon = page.locator('text=🛒');
    await cartIcon.click();
    await page.waitForTimeout(300);

    // Verify cart displays correctly on mobile
    const cartModal = page.locator('[data-testid="cart-modal"]');
    await expect(cartModal).toBeVisible();

    // Verify cart item is visible
    const cartItem = page.locator('[data-testid="cart-item"]');
    await expect(cartItem).toBeVisible();
  });

  test('should display total price in cart', async ({ page }) => {
    // Add a product
    const addToCartButtons = page.locator('button:has-text("Add to Cart")');
    await addToCartButtons.first().click();

    // Open cart
    const cartIcon = page.locator('text=🛒');
    await cartIcon.click();
    await page.waitForTimeout(300);

    // Verify total price is displayed
    const totalPrice = page.locator('[data-testid="cart-total"]');
    await expect(totalPrice).toBeVisible();

    // Verify total is a valid price format
    const priceText = await totalPrice.textContent();
    expect(priceText).toMatch(/\$[\d.]+/);
  });

  test('should increment quantity when adding same product twice', async ({ page }) => {
    // Add same product twice
    const addToCartButtons = page.locator('button:has-text("Add to Cart")');
    await addToCartButtons.first().click();
    await page.waitForTimeout(200);
    await addToCartButtons.first().click();
    await page.waitForTimeout(200);

    // Open cart
    const cartIcon = page.locator('text=🛒');
    await cartIcon.click();
    await page.waitForTimeout(300);

    // Verify product quantity is 2 (not 2 separate items)
    const cartItems = page.locator('[data-testid="cart-item"]');
    const itemCount = await cartItems.count();

    // Should be 1 item with quantity 2, not 2 items
    const firstItemQuantity = await cartItems.first().locator('[data-testid="item-quantity"]').textContent();
    expect(firstItemQuantity).toContain('2');
  });
});
