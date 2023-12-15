import { expect, test } from '@playwright/test';

test('All projects screen', async ({ page }) => {
	await page.goto('http://localhost:3000/projects');
	await expect(page).toHaveTitle(/Load of the boards/);

	expect(page.getByRole('heading', { name: 'Projects' })).toBeTruthy();
});

test('Project details screen', async ({ page }) => {
	await page.goto('http://localhost:3000/projects/Project%201');
	await expect(page).toHaveTitle(/Load of the boards/);

	expect(page.getByText('Project 1')).toBeTruthy();

	expect(page.getByText('Tasks')).toBeTruthy();

	expect(page.getByText('Task 1')).toBeTruthy();

	await page.click('text=Task 1');

	expect(page.getByText('Task 1')).toBeTruthy();
	expect(page.getByText('Task 1 description')).toBeTruthy();
	expect(page.getByText('Assigned to: Mary Jane')).toBeTruthy();
});
