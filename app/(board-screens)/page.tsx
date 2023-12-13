'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
	DndContext,
	DragEndEvent,
	DragOverlay,
	useDroppable,
} from '@dnd-kit/core';
import { SortableContext, arrayMove, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useState } from 'react';

interface Task {
	title: string;
	description?: string;
	category?: string[];
}

interface List {
	title: string;
	tasks: Task[];
}

const DashboardPage = () => {
	const [listData, setListData] = useState<List[]>(LISTDATA);
	const [draggingTask, setDraggingTask] = useState<Task | null>(null);

	const handleTaskDragEnd = ({ active, over }: DragEndEvent) => {
		if (active.id === over?.id) return;

		const activeListIndex = listData.findIndex(
			list => list.title === active.data.current?.sortable?.containerId
		);

		let overListIndex = listData.findIndex(
			list => list.title === over?.data?.current?.sortable?.containerId
		);

		// if over is empty list
		if (overListIndex === -1) {
			overListIndex = listData.findIndex(list => list.title === over?.id);
		}

		console.log(activeListIndex, overListIndex);

		if (activeListIndex === -1 || overListIndex === -1) {
			return;
		}

		if (activeListIndex !== overListIndex) {
			setListData(prev => {
				const newList = [...prev];

				const activeTaskIndex = newList[activeListIndex].tasks.findIndex(
					task => task.title === active.id
				);

				if (activeTaskIndex === -1) return newList;

				const task = newList[activeListIndex].tasks[activeTaskIndex];

				newList[activeListIndex].tasks.splice(activeTaskIndex, 1);
				newList[overListIndex].tasks.push(task);

				return newList;
			});

			return;
		}

		//same list
		setListData(prev => {
			const activeTaskIndex = prev[activeListIndex].tasks.findIndex(
				task => task.title === active.id
			);

			const overTaskIndex = prev[activeListIndex].tasks.findIndex(
				task => task.title === over?.id
			);

			prev[activeListIndex].tasks = arrayMove(
				prev[activeListIndex].tasks!,
				activeTaskIndex,
				overTaskIndex
			);

			return prev;
		});
	};

	const handleTaskDragStart = ({ active }: DragEndEvent) => {
		const containerId = active.data.current?.sortable?.containerId;

		if (!containerId) return;

		setDraggingTask(
			listData
				.find(list => list.title === containerId)
				?.tasks?.find(task => task.title === active.id) || null
		);
	};

	return (
		<DndContext
			id="board"
			onDragEnd={handleTaskDragEnd}
			onDragStart={handleTaskDragStart}
		>
			<div className="flex transform gap-8 overflow-auto px-16 py-4 transition-all">
				{listData.map(list => (
					<TaskList key={list.title} list={list} />
				))}
			</div>
			<DragOverlay>
				{draggingTask ? <TaskItem task={draggingTask} /> : null}
			</DragOverlay>
		</DndContext>
	);
};

export default DashboardPage;

const TaskList = ({ list }: { list: List }) => {
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

const TaskItem = ({ task }: { task: Task }) => {
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
		<Card
			ref={setNodeRef}
			className={cn(
				'rounded-2xl',
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
	);
};

const CATEGORIES = [
	{
		title: 'Engineering',
		color: 'bg-red-500 hover:bg-red-600',
	},
	{
		title: 'Design',
		color: 'bg-yellow-500 hover:bg-yellow-600',
	},
	{
		title: 'Development',
		color: 'bg-green-500 hover:bg-green-600',
	},
	{
		title: 'Testing',
		color: 'bg-blue-500 hover:bg-blue-600',
	},
	{
		title: 'Documentation',
		color: 'bg-purple-500 hover:bg-purple-600',
	},
	{
		title: 'Support',
		color: 'bg-pink-500 hover:bg-pink-600',
	},
];

const LISTDATA = [
	{
		title: 'Backlog',
		tasks: [
			{
				title: 'Task 1',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati  natus autem vel quam sint, a aspernatur corporis itaque sunt!',
				category: ['Engineering', 'Design'],
			},
			{
				title: 'Task 2',
				description: 'Description for Task 2.',
				category: ['Development', 'Testing'],
			},
			{
				title: 'Task 3',
				description: 'Description for Task 3.',
				category: ['Design', 'Documentation'],
			},
		],
	},
	{
		title: 'Ready',
		tasks: [
			{
				title: 'Task 7',
				description: 'Description for Task 7.',
				category: ['Testing', 'Support'],
			},
			{
				title: 'Task 11',
				description: 'Description for Task 11.',
				category: ['Engineering', 'Documentation'],
			},
			{
				title: 'Task 12',
				description: 'Description for Task 12.',
				category: ['Development', 'Support'],
			},
		],
	},
	{
		title: 'In Progress',
		tasks: [
			{
				title: 'Task 8',
				description: 'Description for Task 8.',
				category: ['Engineering', 'Design'],
			},
			{
				title: 'Task 13',
				description: 'Description for Task 13.',
				category: ['Development', 'Testing'],
			},
		],
	},
	{
		title: 'Done',
		tasks: [],
	},
];
