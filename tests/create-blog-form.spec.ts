import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000');
  await page.getByPlaceholder('title...').click();
  await page.getByPlaceholder('title...').fill('JavaScript');
  await page.getByPlaceholder('description...').click();
  await page.getByPlaceholder('description...').fill('Arrays');

  await page.getByRole('button', { name: 'Create blog' }).click();

  await expect(page.getByText('JavaScriptArraysУдалить')).toBeVisible();

  await page
    .locator('div')
    .filter({ hasText: /^JavaScriptArraysУдалить$/ })
    .getByRole('button')
    .click();
  await expect(page.getByText('JavaScriptArraysУдалить')).not.toBeVisible();
});
