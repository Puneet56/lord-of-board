'use client';

import { Card } from '@/components/ui/card';
import { List } from '@/types';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { TaskItem } from './task-item';

export const TaskList = ({ list }: { list: List }) => {
	const { setNodeRef } = useDroppable({ id: list.title });

	return (
		<div className="flex max-h-[87vh] min-w-[20rem] max-w-xs flex-col gap-4 overflow-y-auto overflow-x-hidden p-2">
			<h2 className="px-2 text-2xl font-bold">{list.title}</h2>
			<SortableContext
				id={list.title}
				items={list.tasks?.map(task => task.title) || []}
			>
				<div ref={setNodeRef} className="flex w-full flex-col gap-4">
					{!list.tasks || list.tasks.length === 0 ? (
						<Card className="rounded-2xl border-2 border-dashed bg-secondary py-8">
							<p className="text-center text-gray-600">Empty</p>
						</Card>
					) : null}

					{list.tasks?.map(task => <TaskItem key={task.title} task={task} />)}
				</div>
			</SortableContext>
		</div>
	);
};
