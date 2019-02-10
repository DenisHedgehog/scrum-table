import React from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskWrapper = styled.div`
    width: 15vw;
    background-color: #ddd;
    border: 1px #aaa solid;
    padding: 8px;
    
    & + & {
        margin-top: 8px;
    }
`;

const randomId = () => (Math.random() * 100000);

class Task extends React.Component {
    render() {
        return (

            <Draggable
                                    key={this.props.task.id}
                                    draggableId={this.props.task.id}
                                    index={this.props.index}>
                                    {(provided) => (
                                        <TaskWrapper
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}>
                                            {this.props.task.name}
                                        </TaskWrapper>
                                    )}
                                </Draggable>
            
        );
    }
} 

{/* <Draggable draggableId={randomId()} index={this.props.index}>
                {(provided) => (
                    <TaskWrapper
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        {this.props.task}
                    </TaskWrapper>
                )}
            </Draggable> */}

export default Task;