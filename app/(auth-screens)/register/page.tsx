'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import * as z from 'zod';

const registerSchema = z.object({
	username: z.string().min(4).max(16),
	email: z.string().email(),
	password: z.string().min(8),
});

const RegisterPage = () => {
	const router = useRouter();

	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
	});

	const handleRegister = (data: z.infer<typeof registerSchema>) => {
		localStorage.setItem('lb-token', 'token');
		router.push('/');
	};

	return (
		<Card className="mx-auto w-full max-w-md">
			<CardHeader className="text-center text-3xl font-bold">
				Get Started
			</CardHeader>

			<p className="mb-6 text-center text-gray-600">
				Create an account to continue
			</p>

			<CardContent className="flex flex-col gap-y-4">
				<Form {...form}>
					<form
						className="flex flex-col gap-y-6"
						onSubmit={form.handleSubmit(handleRegister)}
					>
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder="scrumMaster" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder="master@scrum.com" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input type="password" placeholder="••••••••" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Register</Button>
					</form>
				</Form>
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
