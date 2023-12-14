import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LISTDATA } from '@/data/data';
import TaskItem from '@/features/tasks/task-item';
import { FolderKanban } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
	return LISTDATA.flatMap(list => list.projects).map(project => ({
		params: {
			projectId: encodeURIComponent(project.title),
		},
	}));
}

const ProjectDetailsPage = ({ params }: { params: { projectId: string } }) => {
	// fetching project details
	const project = LISTDATA.flatMap(list => list.projects).find(
		project => project.title === decodeURIComponent(params.projectId)
	);

	if (!project) {
		return (
			<div className="flex flex-col items-center justify-center gap-2 p-16">
				<p className="text-2xl font-semibold">Something wrong here</p>
				<Button size="lg" asChild>
					<Link href="/projects">All Projects</Link>
				</Button>
			</div>
		);
	}

	return (
		<div className="px-16 py-4">
			<div className="flex items-center space-x-4">
				<FolderKanban className="h-12 w-12" />
				<div>
					<h1 className="text-2xl font-bold">{project.title}</h1>
					<p className="text-gray-500">{project.description}</p>
				</div>
			</div>

			<div className="mt-8 grid grid-cols-4 gap-8">
				{project.tasks.length === 0 ? (
					<Card className="rounded-2xl border-2 border-dashed bg-secondary py-8">
						<p className="text-center text-gray-600">No tasks</p>
					</Card>
				) : null}

				{project.tasks?.map(task => (
					<TaskItem key={task.taskTitle} task={task} />
				))}
			</div>
		</div>
	);
};

export default ProjectDetailsPage;
