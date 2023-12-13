'use client';

import { Badge } from '@/components/ui/badge';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const DashboardPage = () => {
	const [listData, setListData] = useState(LISTDATA);

	return (
		<div className="flex gap-8 overflow-auto px-16 py-4">
			{listData.map(list => (
				<div
					key={list.title}
					className="flex max-h-[87vh] min-w-[20rem] max-w-xs flex-col gap-4 overflow-auto p-2"
				>
					<h2 className="px-2 text-2xl font-bold">{list.title}</h2>
					{!list.tasks || list.tasks.length === 0 ? (
						<Card className="rounded-2xl border-2 border-dashed bg-secondary py-8">
							<p className="text-center text-gray-600">Empty</p>
						</Card>
					) : null}

					{list.tasks?.map(task => (
						<Card className="rounded-2xl">
							<CardHeader>
								<CardTitle>{task.title}</CardTitle>
								<CardDescription className="flex flex-wrap gap-2">
									{task.category?.map(category => (
										// <Badge key={category}>{category}</Badge>
										<Badge
											key={category}
											className={cn(
												'text-white',
												CATEGORIES.find(c => c.title === category)?.color ||
													'bg-gray-500'
											)}
										>
											{category}
										</Badge>
									))}
								</CardDescription>
							</CardHeader>

							<CardContent>
								{task.description || 'No description provided'}
							</CardContent>
						</Card>
					))}
				</div>
			))}
		</div>
	);
};

export default DashboardPage;

const CATEGORIES = [
	{
		title: 'Engineering',
		color: 'bg-red-500',
	},
	{
		title: 'Design',
		color: 'bg-yellow-500',
	},
	{
		title: 'Development',
		color: 'bg-green-500',
	},
	{
		title: 'Testing',
		color: 'bg-blue-500',
	},
	{
		title: 'Documentation',
		color: 'bg-purple-500',
	},
	{
		title: 'Support',
		color: 'bg-pink-500',
	},
];

const LISTDATA = [
	{
		title: 'Backlog',
		tasks: [
			{
				title: 'Task 1',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati ab natus autem vel quam sint, a aspernatur corporis itaque sunt!',
				category: ['Engineering', 'Design'],
			},
			{
				title: 'Task 2',
				description: 'Description for Task 2.',
				category: ['Development', 'Testing'],
			},
			{
				title: 'Task 3',
				description: 'Description for Task 3.',
				category: ['Design', 'Documentation'],
			},
			{
				title: 'Task 4',
				description: 'Description for Task 4.',
				category: ['Testing', 'Support'],
			},
			{
				title: 'Task 5',
				description: 'Description for Task 5.',
				category: ['Engineering', 'Documentation'],
			},
			{
				title: 'Task 6',
				description: 'Description for Task 6.',
				category: ['Development', 'Support'],
			},
		],
	},
	{
		title: 'Ready',
		tasks: [
			{
				title: 'Task 7',
				description: 'Description for Task 7.',
				category: ['Testing', 'Support'],
			},
			{
				title: 'Task 11',
				description: 'Description for Task 11.',
				category: ['Engineering', 'Documentation'],
			},
			{
				title: 'Task 12',
				description: 'Description for Task 12.',
				category: ['Development', 'Support'],
			},
		],
	},
	{
		title: 'In Progress',
		tasks: [
			{
				title: 'Task 8',
				description: 'Description for Task 8.',
				category: ['Engineering', 'Design'],
			},
			{
				title: 'Task 13',
				description: 'Description for Task 13.',
				category: ['Development', 'Testing'],
			},
			{
				title: 'Task 14',
				description: 'Description for Task 14.',
				category: ['Design', 'Documentation'],
			},
			{
				title: 'Task 15',
				description: 'Description for Task 15.',
				category: ['Testing', 'Support'],
			},
			{
				title: 'Task 16',
				description: 'Description for Task 16.',
				category: ['Engineering', 'Documentation'],
			},
			{
				title: 'Task 17',
				description: 'Description for Task 17.',
				category: ['Development', 'Support'],
			},
		],
	},
	{
		title: 'Done',
		tasks: [
			{
				title: 'Task 9',
				description: 'Description for Task 9.',
				category: ['Development', 'Documentation'],
			},
			{
				title: 'Task 10',
				description: 'Description for Task 10.',
				category: ['Testing', 'Support'],
			},
		],
	},
];
