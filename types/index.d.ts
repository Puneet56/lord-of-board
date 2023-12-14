export interface Task {
	title: string;
	description?: string;
	category?: string[];
}

export interface List {
	title: string;
	tasks: Task[];
}
