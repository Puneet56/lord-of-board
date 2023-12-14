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

const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

const LoginPage = () => {
	const router = useRouter();

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const handleLogin = (data: z.infer<typeof loginSchema>) => {
		router.push('/');
	};

	return (
		<Card className="mx-auto w-full max-w-md">
			<CardHeader className="text-center text-3xl font-bold">
				Welcome Back
			</CardHeader>

			<p className="mb-6 text-center text-gray-600">Please login to continue</p>

			<CardContent>
				<Form {...form}>
					<form
						className="flex flex-col gap-y-6"
						onSubmit={form.handleSubmit(handleLogin)}
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
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
						<Button type="submit">Login</Button>
					</form>
				</Form>
				<p className="mt-6 text-center text-sm text-gray-600">
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
