'use client';

import { Badge } from '@/components/ui/badge';
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
import { CATEGORIES } from '@/data/data';
import { cn } from '@/lib/utils';
import { Task } from '@/types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

export const TaskItem = ({ task }: { task: Task }) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({
		id: task.title,
	});

	const style: React.CSSProperties = {
		transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
		transition,
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Card
					onClick={() => console.log('clicked')}
					ref={setNodeRef}
					className={cn(
						'w-full rounded-2xl',
						isDragging && 'border-2 border-dashed opacity-50'
					)}
					{...listeners}
					{...attributes}
					style={style}
				>
					<CardHeader>
						<CardTitle>{task.title}</CardTitle>
					</CardHeader>

					<CardContent>
						<div className="flex flex-wrap gap-2">
							{task.category?.map(category => (
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
						</div>
						{task.description || 'No description provided'}
					</CardContent>
				</Card>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>{task.title}</DialogTitle>
					<DialogDescription>
						{task.description || 'No description provided'}
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-wrap gap-2">
					{task.category?.map(category => (
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
				</div>
				<div className="flex flex-col gap-2">
					<p>{task.assignedUser || 'No user assigned'}</p>

					<p>{task.dueDate || 'No due date'}</p>
				</div>
				<Textarea placeholder="Add comments" />
			</DialogContent>
		</Dialog>
	);
};
