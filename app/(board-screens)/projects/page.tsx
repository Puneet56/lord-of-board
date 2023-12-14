import { LISTDATA } from '@/data/data';
import { ProjectItem } from '@/features/projects/project-item';

const ProjectsPage = () => {
	return (
		<div className="px-16 py-4">
			<h1 className="mb-8 ml-2 text-2xl font-semibold">Projects</h1>
			<div className="grid grid-cols-4 gap-8">
				{LISTDATA.map(list =>
					list.projects.map(project => (
						<ProjectItem key={project.title} project={project} showTasks />
					))
				)}
			</div>
		</div>
	);
};

export default ProjectsPage;
