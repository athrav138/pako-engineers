import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Pako Engineers/);
});

test('can navigate to products', async ({ page }) => {
  await page.goto('/');
  await page.click('text=View Products');
  await expect(page).toHaveURL(/.*products/);
});
