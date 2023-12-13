import Header from '@/components/header';
import React from 'react';

type LayoutProps = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: LayoutProps) => {
	return (
		<div className="h-screen bg-secondary">
			<Header />
			{children}
		</div>
	);
};

export default MainLayout;
