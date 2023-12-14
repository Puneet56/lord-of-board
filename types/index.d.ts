export interface Task {
	taskTitle: string;
	taskDescription?: string;
	assignedTo?: string;
}

export interface Project {
	title: string;
	description?: string;
	category?: string[];
	tasks?: Task[];
}

export interface List {
	title: string;
	projects: Project[];
}
