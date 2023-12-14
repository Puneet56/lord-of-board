export interface Project {
	title: string;
	description?: string;
	category?: string[];
}

export interface List {
	title: string;
	projects: Project[];
}
