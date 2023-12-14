import { expect, test } from '@playwright/test';

test('Login and validation', async ({ page }) => {
	await page.goto('http://localhost:3000/login');
	await expect(page).toHaveTitle(/Load of the boards/);

	expect(page.getByText('Login')).toBeTruthy();

	await page.getByRole('button', { name: 'Login' }).click();

	expect(page.getByText('Invalid email')).toBeTruthy();
	expect(
		page.getByText('String must contain at least 8 character(s)')
	).toBeTruthy();

	await page.fill('input[name=email]', 'test@test.com');
	await page.fill('input[name=password]', 'password');

	await page.getByRole('button', { name: 'Login' }).click();

	await expect(page).toHaveURL('http://localhost:3000');
});

test('Register and validation', async ({ page }) => {
	await page.goto('http://localhost:3000/register');
	await expect(page).toHaveTitle(/Load of the boards/);

	expect(page.getByText('Register')).toBeTruthy();

	await page.getByRole('button', { name: 'Register' }).click();

	expect(
		page.getByText('String must contain at least 4 character(s)')
	).toBeTruthy();

	expect(page.getByText('Invalid email')).toBeTruthy();

	expect(
		page.getByText('String must contain at least 8 character(s)')
	).toBeTruthy();

	await page.fill('input[name=email]', 'test@test.com');
	await page.fill('input[name=username]', 'testName');
	await page.fill('input[name=password]', 'password');

	await page.getByRole('button', { name: 'Register' }).click();

	await expect(page).toHaveURL('http://localhost:3000');
});
