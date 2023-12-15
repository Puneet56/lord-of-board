import { expect, test } from '@playwright/test';

test('All projects screen', async ({ page }) => {
	await page.goto('http://localhost:3000/login');
	await page.fill('input[name=email]', 'test@test.com');
	await page.fill('input[name=password]', 'password');

	await page.getByRole('button', { name: 'Login' }).click();

	await expect(page).toHaveURL('http://localhost:3000');

	await page.getByRole('link', { name: 'Projects' }).click();

	await expect(page).toHaveURL('http://localhost:3000/projects');

	await expect(page).toHaveTitle(/Load of the boards/);

	expect(page.getByRole('heading', { name: 'Projects' })).toBeTruthy();
});

test('Project details screen', async ({ page }) => {
	await page.goto('http://localhost:3000/login');
	await page.fill('input[name=email]', 'test@test.com');
	await page.fill('input[name=password]', 'password');

	await page.getByRole('button', { name: 'Login' }).click();

	await expect(page).toHaveURL('http://localhost:3000');

	expect(page.getByText('Project 1')).toBeTruthy();

	await page.click('text=Project 1');

	await expect(page).toHaveURL('http://localhost:3000/projects/Project%201');

	expect(page.getByText('Project 1')).toBeTruthy();

	expect(page.getByText('Tasks')).toBeTruthy();

	expect(page.getByText('Task 1')).toBeTruthy();

	await page.click('text=Task 1');

	expect(page.getByText('Task 1')).toBeTruthy();
	expect(page.getByText('Task 1 description')).toBeTruthy();
	expect(page.getByText('Assigned to: Mary Jane')).toBeTruthy();
});
