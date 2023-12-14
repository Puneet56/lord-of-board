import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Task } from '@/types';
import { MoreHorizontalIcon } from 'lucide-react';

const TaskItem = ({ task }: { task: Task }) => {
	const { taskTitle, taskDescription } = task;

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Card className="rounded-2xl">
					<CardHeader>
						<CardTitle className="flex items-center justify-between">
							{taskTitle}
							<Button variant={'ghost'} size="sm" className="ml-2">
								<MoreHorizontalIcon />
							</Button>
						</CardTitle>
					</CardHeader>

					<CardContent>
						{taskDescription || 'No description provided'}
					</CardContent>
				</Card>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>{task.taskTitle}</DialogTitle>
					<DialogDescription>
						{task.taskDescription || 'No description provided'}
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col gap-2">
					<p>
						{task.assignedTo
							? `Assigned to: ${task.assignedTo}`
							: 'No user assigned'}
					</p>
				</div>
				<Textarea placeholder="Add comments" />
			</DialogContent>
		</Dialog>
	);
};

export default TaskItem;
