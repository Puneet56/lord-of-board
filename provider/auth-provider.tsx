'use client';

import { redirect, usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: any }) => {
	const [loading, setLoading] = useState(true);
	const pathname = usePathname();

	useEffect(() => {
		if (pathname.includes('/login') || pathname.includes('/register')) {
			setLoading(false);
			return;
		} else {
			if (localStorage.getItem('lb-token')) {
				setLoading(false);
			} else {
				setLoading(false);
				redirect('/login');
			}
		}
	}, [pathname]);

	if (loading)
		return (
			<div className="flex h-screen items-center justify-center">
				<h1 className="animate-pulse text-3xl font-bold">Lord of the boards</h1>
			</div>
		);

	return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
