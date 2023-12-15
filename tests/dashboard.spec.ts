import { expect, test } from '@playwright/test';

test('Dashboard screen and category test', async ({ page }) => {
	await page.goto('http://localhost:3000/login');
	await page.fill('input[name=email]', 'test@test.com');
	await page.fill('input[name=password]', 'password');

	await page.getByRole('button', { name: 'Login' }).click();

	await expect(page).toHaveURL('http://localhost:3000');

	await expect(page).toHaveTitle(/Load of the boards/);

	expect(page.getByText('Sprint plans')).toBeTruthy();
	expect(page.getByText('Backlog')).toBeTruthy();
	expect(page.getByText('Ready')).toBeTruthy();
	expect(page.getByText('In Progress')).toBeTruthy();
	expect(page.getByText('Done')).toBeTruthy();
	expect(page.getByText('Logout')).toBeTruthy();

	expect(page.getByText('Project 1')).toBeTruthy();

	await page.click('text=Project 1');

	await expect(page).toHaveURL('http://localhost:3000/projects/Project%201');
});
