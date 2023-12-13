type LayoutProps = {
	children: React.ReactNode;
};

const AuthLayout = ({ children }: LayoutProps) => {
	return (
		<div className="grid h-screen w-full grid-cols-1 md:grid-cols-2">
			<div className="flex items-center justify-center p-10">{children}</div>
			<div className="hidden flex-col items-center justify-center bg-secondary text-center md:flex">
				<h1 className="mb-4 text-3xl font-bold">Lord of the boards</h1>
				<p className="mx-auto max-w-md text-gray-600">
					Where scrum lords shine
				</p>
			</div>
		</div>
	);
};

export default AuthLayout;
