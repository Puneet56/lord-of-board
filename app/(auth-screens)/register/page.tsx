import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

const RegisterPage = () => {
	return (
		<Card className="mx-auto w-full max-w-md">
			<CardHeader className="text-center text-3xl font-bold">
				Get Started
			</CardHeader>

			<p className="mb-6 text-center text-gray-600">
				Create an account to continue
			</p>

			<CardContent className="flex flex-col gap-y-4">
				<div className="flex flex-col gap-y-2">
					<Label className="font-medium" htmlFor="username">
						Username
					</Label>
					<Input id="username" placeholder="scrumMaster" required type="text" />
				</div>
				<div className="flex flex-col gap-y-2">
					<Label className="font-medium" htmlFor="email">
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
				<Button className="mt-4">Register</Button>
				<p className="text-center text-sm text-gray-600">
					Already have an account?{' '}
					<Link className="text-blue-600 hover:underline" href="/login">
						Login
					</Link>
				</p>
			</CardContent>
		</Card>
	);
};

export default RegisterPage;
