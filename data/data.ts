export const CATEGORIES = [
	{
		title: 'Engineering',
		color: 'bg-red-500 hover:bg-red-600',
	},
	{
		title: 'Design',
		color: 'bg-yellow-500 hover:bg-yellow-600',
	},
	{
		title: 'Development',
		color: 'bg-green-500 hover:bg-green-600',
	},
	{
		title: 'Testing',
		color: 'bg-blue-500 hover:bg-blue-600',
	},
	{
		title: 'Documentation',
		color: 'bg-purple-500 hover:bg-purple-600',
	},
	{
		title: 'Support',
		color: 'bg-pink-500 hover:bg-pink-600',
	},
];

export const LISTDATA = [
	{
		title: 'Backlog',
		tasks: [
			{
				title: 'Task 1',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati  natus autem vel quam sint, a aspernatur corporis itaque sunt!',
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
		],
	},
	{
		title: 'Done',
		tasks: [],
	},
];
