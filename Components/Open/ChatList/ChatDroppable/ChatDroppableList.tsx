import { Droppable } from '@hello-pangea/dnd';
import React from 'react';
import ChatDraggable from '../ChatDraggable/ChatDraggable';
import { IndexIdIsNumber } from '../ChatList.type';

type ChatDroppableListProps = {
	chatListColumnTasks: IndexIdIsNumber[];
};

const ChatDroppableList = ({ chatListColumnTasks }: ChatDroppableListProps) => {
	return (
		<Droppable droppableId="list-column">
			{(droppableProvided) => (
				<div
					className="h-full w-full text-amber-900  overflow-y-scroll gap-5"
					ref={droppableProvided.innerRef}
					{...droppableProvided.droppableProps}
				>
					{chatListColumnTasks.map((chat, index: number) => {
						return <ChatDraggable chat={chat} index={index} key={chat.id} />;
					})}
					{droppableProvided.placeholder}
				</div>
			)}
		</Droppable>
	);
};

export default ChatDroppableList;
