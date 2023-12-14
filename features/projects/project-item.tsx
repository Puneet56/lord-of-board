'use client';

import { Badge } from '@/components/ui/badge';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { CATEGORIES } from '@/data/data';
import { cn } from '@/lib/utils';
import { Project } from '@/types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Link from 'next/link';
import React from 'react';

export const ProjectItem = ({
	project,
	showTasks = false,
}: {
	project: Project;
	showTasks?: boolean;
}) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({
		id: project.title,
	});

	const style: React.CSSProperties = {
		transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
		transition,
	};

	return (
		<Card
			ref={setNodeRef}
			className={cn(
				'w-full rounded-2xl',
				isDragging && 'border-2 border-dashed opacity-50'
			)}
			{...listeners}
			{...attributes}
			style={style}
		>
			<Link href={`/projects/${project.title}`}>
				<CardHeader>
					<CardTitle>{project.title}</CardTitle>
				</CardHeader>

				<CardContent>
					<div className="flex flex-wrap gap-2">
						{project.category?.map(category => (
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
					{project.description || 'No description provided'}

					{showTasks && (
						<CardFooter className="mt-6 flex flex-wrap gap-2 p-0">
							{project.tasks?.length === 0 ? <Badge>No tasks</Badge> : null}

							{project.tasks?.length === 1 ? <Badge>1 task</Badge> : null}

							{project.tasks && project.tasks?.length > 1 ? (
								<Badge>{project.tasks.length} tasks</Badge>
							) : null}
						</CardFooter>
					)}
				</CardContent>
			</Link>
		</Card>
	);
};
