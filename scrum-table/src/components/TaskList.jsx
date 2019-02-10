import React from 'react';
import styled from 'styled-components';
import Task from './Task.jsx';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const TaskListWrapper = styled.div`
    & + & {
        margin-left: 16px;
    }
`;

class TaskList extends React.Component {
    render() {
        return (
            <Droppable droppableId="droppable">
                    {(provided) => (
                        <TaskListWrapper ref={provided.innerRef}>
                            {this.props.tasks.map((item, index) => (
                                <Task task={item} index={index} />
                            ))}
                            {provided.placeholder}
                        </TaskListWrapper>
                    )}
                </Droppable>
        );
    }
} 

{/* <Droppable droppableId={this.props.droppableId}>
                {(provided) => (
                    <TaskListWrapper
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                        {this.props.tasks.map((task, index) => <Task index={index} task={task} />)}
                        {provided.placeholder}
                    </TaskListWrapper>
                )}
            </Droppable> */}

export default TaskList;