// Import Playwright test module
const { test, expect } = require('@playwright/test');

test.describe('Playwright Assertions Example', () => {
  
  test('Validate Assertions on Playwright Website', async ({ page }) => {
    // Navigate to Playwright official page
    await page.goto('https://playwright.dev/');

    // Assertion: Verify page title
    await expect(page).toHaveTitle(/Playwright/);

    // Assertion: Check if "Get Started" button is visible
    const getStartedButton = page.locator('text=Get Started');
    await expect(getStartedButton).toBeVisible();

    // Click "Get Started" and verify URL change
    await getStartedButton.click();
    await expect(page).toHaveURL(/docs\/intro/);

    // Validate text content in an element
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Installation');

    // ✅ Fix: Select the first matching GitHub link (header link)
    const githubLink = page.locator('a[href="https://github.com/microsoft/playwright"]').first();
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/microsoft/playwright');

    // Ensure a non-existing element does not exist
    const nonExistentElement = page.locator('.non-existent-class');
    await expect(nonExistentElement).not.toBeVisible();
  });

});
