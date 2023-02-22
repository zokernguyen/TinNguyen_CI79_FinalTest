import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
    const toShowTasks = props.tasksToRender;

    return (
        <div>
            {toShowTasks.map((task, index) => (
                <TodoItem
                    key={index}
                    task={task}
                    tasksToSet={props.tasksToSet}
                    taskIndex={index}
                    function={props.function}
                    activeTab={props.activeTab}
                />
            ))}
        </div>
    );
}


export default TodoList;