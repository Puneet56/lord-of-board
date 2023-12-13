'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

const LoginPage = () => {
	return (
		<Card className="mx-auto w-full max-w-md">
			<CardHeader className="text-center text-3xl font-bold">
				Welcome Back
			</CardHeader>

			<p className="mb-6 text-center text-gray-600">Please login to continue</p>

			<CardContent className="flex flex-col gap-y-4">
				<div className="flex flex-col gap-y-2">
					<Label className="font-medium" htmlFor="username">
						Email
					</Label>
					<Input
						id="email"
						placeholder="master@scrum.com"
						required
						type="text"
					/>
				</div>
				<div className="flex flex-col gap-y-2">
					<Label className="font-medium" htmlFor="password">
						Password
					</Label>
					<Input
						id="password"
						placeholder="••••••••"
						required
						type="password"
					/>
				</div>
				<Button className="mt-4">
					<Link href={'/'}>Log In</Link>
				</Button>
				<p className="text-center text-sm text-gray-600">
					Don't have an account?{' '}
					<Link className="text-blue-600 hover:underline" href="/register">
						Sign up
					</Link>
				</p>
			</CardContent>
		</Card>
	);
};

export default LoginPage;
