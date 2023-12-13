'use client';
import { redirect } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';

type AuthProviderProps = {
	children: React.ReactNode;
};

type User = {
	username: string;
	email: string;
};

type LoginPayload = {
	email: string;
	password: string;
};

type RegisterPayload = {
	username: string;
	email: string;
	password: string;
};

type AuthContextType = {
	user: User | null;
	loginUser: (loginPayload: LoginPayload) => void;
	registerUser: (registerPayload: RegisterPayload) => void;
};

const AuthContext = createContext<AuthContextType>({
	user: null,
	loginUser: (loginPayload: LoginPayload) => {},
	registerUser: (registerPayload: RegisterPayload) => {},
});

export const useAuth = () => useContext<AuthContextType>(AuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const user = localStorage.getItem('user');
		if (!user) {
			setLoading(false);
			return;
		}

		try {
			setUser(JSON.parse(user));
			redirect('/');
		} catch (error: any) {
			setLoading(false);
		}
	}, []);

	const loginUser = (loginPayload: { email: string; password: string }) => {
		let user = {
			username: loginPayload.email.split('@')[0],
			email: loginPayload.email,
		};

		localStorage.setItem('user', JSON.stringify(user));

		setUser(user);
	};

	const registerUser = (registerPayload: {
		username: string;
		email: string;
		password: string;
	}) => {
		let user = {
			username: registerPayload.username,
			email: registerPayload.email,
		};

		localStorage.setItem('user', JSON.stringify(user));

		setUser(user);
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				loginUser,
				registerUser,
			}}
		>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};

export const ClientTest = ({ children }: AuthProviderProps) => {
	return <div>{children}</div>;
};

export default AuthProvider;
