'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CATEGORIES } from '@/data/data';
import { cn } from '@/lib/utils';
import { Project } from '@/types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Link from 'next/link';
import React from 'react';

export const ProjectItem = ({ project }: { project: Project }) => {
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
				</CardContent>
			</Link>
		</Card>
	);
};
