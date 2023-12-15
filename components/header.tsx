import { Input } from '@/components/ui/input';
import LogoutButton from './logout-button';
import NaviationTabs from './navigation-tabs';

const Header = () => {
	return (
		<div className="bg-white">
			<div className="h-16 w-full border-b px-8 shadow-sm">
				<div className="flex h-full items-center justify-between">
					<div className="flex items-center gap-4">
						<div className="h-12 w-12 rounded-xl bg-primary"></div>
						<h1 className="text-2xl font-bold">Sprint plans</h1>
						<div className="ml-12">
							<NaviationTabs />
						</div>
					</div>

					<div className="flex items-center gap-4">
						<Input placeholder="Search tasks" className="rounded-full" />
						<LogoutButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
