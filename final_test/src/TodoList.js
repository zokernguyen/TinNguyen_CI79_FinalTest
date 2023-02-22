import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
    const toShowTaks = props.tasks;

    return (
        <div>
            {toShowTaks.map((task, index) => (
                <TodoItem
                    key={index}
                    task={task}
                    tasks={props.tasks}
                    taskIndex={index}
                    function={props.function}
                    activeTab={props.activeTab}
                />
            ))}
        </div>
    );
}


export default TodoList;