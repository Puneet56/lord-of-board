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
		projects: [
			{
				title: 'Project 1',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati  natus autem vel quam sint, a aspernatur corporis itaque sunt!',
				category: ['Engineering', 'Design'],
			},
			{
				title: 'Project 2',
				description: 'Description for Project 2.',
				category: ['Development', 'Testing'],
			},
			{
				title: 'Project 3',
				description: 'Description for Project 3.',
				category: ['Design', 'Documentation'],
			},
		],
	},
	{
		title: 'Ready',
		projects: [
			{
				title: 'Project 7',
				description: 'Description for Project 7.',
				category: ['Testing', 'Support'],
			},
			{
				title: 'Project 11',
				description: 'Description for Project 11.',
				category: ['Engineering', 'Documentation'],
			},
			{
				title: 'Project 12',
				description: 'Description for Project 12.',
				category: ['Development', 'Support'],
			},
		],
	},
	{
		title: 'In Progress',
		projects: [
			{
				title: 'Project 8',
				description: 'Description for Project 8.',
				category: ['Engineering', 'Design'],
			},
			{
				title: 'Project 13',
				description: 'Description for Project 13.',
				category: ['Development', 'Testing'],
			},
		],
	},
	{
		title: 'Done',
		projects: [],
	},
];
