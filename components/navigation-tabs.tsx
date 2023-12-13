'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAVLINKS = [
	{
		title: 'Dashboard',
		href: '/',
	},
	{
		title: 'Projects',
		href: '/projects',
	},
];

const NaviationTabs = () => {
	const pathName = usePathname();

	return (
		<ul role="list" className="flex h-12 items-center gap-4">
			{NAVLINKS.map(link => (
				<li
					key={link.href}
					className={cn(
						'px-2 text-lg text-secondary-foreground',
						pathName === link.href &&
							'border-b-2 border-primary px-2 font-semibold text-primary'
					)}
				>
					<Link href={link.href}>{link.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default NaviationTabs;
