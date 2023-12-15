'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

const LogoutButton = () => {
	const router = useRouter();

	const handleLogout = () => {
		localStorage.clear();
		router.push('/login');
	};

	return (
		<Button onClick={handleLogout} variant="destructive" className="rounded-xl">
			Logout
		</Button>
	);
};

export default LogoutButton;
