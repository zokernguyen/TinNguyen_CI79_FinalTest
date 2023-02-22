import React from 'react';
import { FiTrash } from 'react-icons/fi';

const TodoItem = (props) => {

    const { task, function: handleSetCompletedTask, tasks, taskIndex, activeTab } = props;

    const completedState = task.isCompleted;

    const handleClick = () => {
        const updatedTasks = tasks.map((t, index) => {
            if (index === taskIndex) {
                return {
                    taskName: t.taskName,
                    isCompleted: !t.isCompleted
                };
            }
            return t;
        });
        handleSetCompletedTask(updatedTasks);
    };

    const handleDeleteClick = () => {
        const updatedTasks = props.tasks.filter((t, index) => {
            return index !== props.taskIndex;
        });
        handleSetCompletedTask(updatedTasks);
    }

    const style = {
        textDecoration: completedState ? 'line-through' : 'none',
        color: completedState ? 'gray' : 'black',
        fontStyle: completedState ? 'italic' : 'normal'
    };

    console.log(activeTab);


    return (
        <div>
            <input
                checked={completedState}
                type='checkbox'
                onClick={handleClick}
                readOnly
            />
            <span
                style={style}
            >{task.taskName}</span>
            <span>
                {activeTab === 'Completed' && (
                    <FiTrash
                        style={{ marginLeft: '10px', cursor: 'pointer' }}
                        onClick={handleDeleteClick} />
                )}</span>
            <hr></hr>
        </div>
    );
};

export default TodoItem;
