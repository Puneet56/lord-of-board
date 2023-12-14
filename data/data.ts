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
				description: 'Description for Project 1.',
				category: ['Engineering', 'Design'],
				tasks: [
					{
						taskTitle: 'Task 1',
						taskDescription: 'Task 1 description.',
						assignedTo: 'Mary Jane',
					},
					{
						taskTitle: 'Task 2',
						taskDescription: 'Task 2 description.',
					},
					{
						taskTitle: 'Task 3',
						taskDescription: 'Task 3 description.',
						assignedTo: 'Alex Smith',
					},
					{
						taskTitle: 'Task 4',
						taskDescription: 'Task 4 description.',
						assignedTo: 'Mark Johnson',
					},
					{
						taskTitle: 'Task 5',
						taskDescription: 'Task 5 description.',
					},
				],
			},
			{
				title: 'Project 2',
				description: 'Description for Project 2.',
				category: ['Development', 'Testing'],
				tasks: [],
			},
			{
				title: 'Project 3',
				description: 'Description for Project 3.',
				category: ['Design', 'Documentation'],
				tasks: [
					{
						taskTitle: 'Task 1',
						taskDescription: 'Task 1 description.',
						assignedTo: 'Zack Smith',
					},
					{
						taskTitle: 'Task 2',
						taskDescription: 'Task 2 description.',
						assignedTo: 'Zack Smith',
					},
					{
						taskTitle: 'Task 3',
						taskDescription: 'Task 3 description.',
					},
					{
						taskTitle: 'Task 4',
						taskDescription: 'Task 4 description.',
						assignedTo: 'Zack Smith',
					},
					{
						taskTitle: 'Task 5',
						taskDescription: 'Task 5 description.',
					},
				],
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
				tasks: [
					{
						taskTitle: 'Task 1',
						taskDescription: 'Task 1 description.',
					},
					{
						taskTitle: 'Task 2',
						taskDescription: 'Task 2 description.',
					},
					{
						taskTitle: 'Task 3',
						taskDescription: 'Task 3 description.',
					},
					{
						taskTitle: 'Task 4',
						taskDescription: 'Task 4 description.',
					},
					{
						taskTitle: 'Task 5',
						taskDescription: 'Task 5 description.',
					},
				],
			},
			{
				title: 'Project 11',
				description: 'Description for Project 11.',
				category: ['Engineering', 'Documentation'],
				tasks: [
					{
						taskTitle: 'Task 1',
						taskDescription: 'Task 1 description.',
					},
					{
						taskTitle: 'Task 2',
						taskDescription: 'Task 2 description.',
						assignedTo: 'Zack Smith',
					},
					{
						taskTitle: 'Task 3',
						taskDescription: 'Task 3 description.',
					},
					{
						taskTitle: 'Task 4',
						taskDescription: 'Task 4 description.',
						assignedTo: 'Zack Smith',
					},
					{
						taskTitle: 'Task 5',
						taskDescription: 'Task 5 description.',
					},
				],
			},
			{
				title: 'Project 12',
				description: 'Description for Project 12.',
				category: ['Development', 'Support'],
				tasks: [
					{
						taskTitle: 'Task 1',
						taskDescription: 'Task 1 description.',
						assignedTo: 'Mary Jane',
					},
					{
						taskTitle: 'Task 2',
						taskDescription: 'Task 2 description.',
						assignedTo: 'John Doe',
					},
					{
						taskTitle: 'Task 3',
						taskDescription: 'Task 3 description.',
						assignedTo: 'Zack Smith',
					},
					{
						taskTitle: 'Task 4',
						taskDescription: 'Task 4 description.',
						assignedTo: 'Mark Johnson',
					},
					{
						taskTitle: 'Task 5',
						taskDescription: 'Task 5 description.',
					},
				],
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
				tasks: [
					{
						taskTitle: 'Task 1',
						taskDescription: 'Task 1 description.',
					},
					{
						taskTitle: 'Task 2',
						taskDescription: 'Task 2 description.',
					},
					{
						taskTitle: 'Task 3',
						taskDescription: 'Task 3 description.',
					},
					{
						taskTitle: 'Task 4',
						taskDescription: 'Task 4 description.',
					},
					{
						taskTitle: 'Task 5',
						taskDescription: 'Task 5 description.',
					},
				],
			},
			{
				title: 'Project 13',
				description: 'Description for Project 13.',
				category: ['Development', 'Testing'],
				tasks: [
					{
						taskTitle: 'Task 1',
						taskDescription: 'Task 1 description.',
					},
					{
						taskTitle: 'Task 2',
						taskDescription: 'Task 2 description.',
					},
					{
						taskTitle: 'Task 3',
						taskDescription: 'Task 3 description.',
					},
					{
						taskTitle: 'Task 4',
						taskDescription: 'Task 4 description.',
					},
					{
						taskTitle: 'Task 5',
						taskDescription: 'Task 5 description.',
					},
				],
			},
		],
	},
	{
		title: 'Done',
		projects: [],
	},
];
