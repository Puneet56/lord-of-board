'use client';

import { LISTDATA } from '@/data/data';
import { List, Task } from '@/types';
import {
	DndContext,
	DragEndEvent,
	DragOverlay,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { useState } from 'react';
import { TaskItem } from './_components/task-item';
import { TaskList } from './_components/task-list';

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

		// if overList is empty list
		if (overListIndex === -1) {
			overListIndex = listData.findIndex(list => list.title === over?.id);
		}

		if (activeListIndex === -1 || overListIndex === -1) {
			return;
		}

		// drop to another list
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

		// drop to same list
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

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 8,
			},
		})
	);

	return (
		<DndContext
			id="board"
			onDragEnd={handleTaskDragEnd}
			onDragStart={handleTaskDragStart}
			sensors={sensors}
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
