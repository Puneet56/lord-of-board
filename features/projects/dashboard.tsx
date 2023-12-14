'use client';

import { List, Project } from '@/types';
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
import { ProjectItem } from '../projects/project-item';
import { ProjectList } from '../projects/project-list';

const DashboardPage = ({ data }: { data: List[] }) => {
	const [listData, setListData] = useState<List[]>(data);
	const [draggingProject, setDraggingProject] = useState<Project | null>(null);

	const handleProjectDragEnd = ({ active, over }: DragEndEvent) => {
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

				const activeProjectIndex = newList[activeListIndex].projects.findIndex(
					project => project.title === active.id
				);

				if (activeProjectIndex === -1) return newList;

				const project = newList[activeListIndex].projects[activeProjectIndex];

				newList[activeListIndex].projects.splice(activeProjectIndex, 1);
				newList[overListIndex].projects.push(project);

				return newList;
			});

			return;
		}

		// drop to same list
		setListData(prev => {
			const activeProjectIndex = prev[activeListIndex].projects.findIndex(
				project => project.title === active.id
			);

			const overProjectIndex = prev[activeListIndex].projects.findIndex(
				project => project.title === over?.id
			);

			prev[activeListIndex].projects = arrayMove(
				prev[activeListIndex].projects!,
				activeProjectIndex,
				overProjectIndex
			);

			return prev;
		});
	};

	const handleProjectDragStart = ({ active }: DragEndEvent) => {
		const containerId = active.data.current?.sortable?.containerId;

		if (!containerId) return;

		setDraggingProject(
			listData
				.find(list => list.title === containerId)
				?.projects?.find(project => project.title === active.id) || null
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
			onDragEnd={handleProjectDragEnd}
			onDragStart={handleProjectDragStart}
			sensors={sensors}
		>
			<div className="flex transform gap-8 overflow-auto px-16 py-4 transition-all">
				{listData.map(list => (
					<ProjectList key={list.title} list={list} />
				))}
			</div>
			<DragOverlay>
				{draggingProject ? <ProjectItem project={draggingProject} /> : null}
			</DragOverlay>
		</DndContext>
	);
};

export default DashboardPage;
