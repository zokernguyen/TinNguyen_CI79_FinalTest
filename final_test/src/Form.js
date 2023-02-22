import React from 'react';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';

const Form = (props) => {

    const [task, setTask] = useState('');

    const handleInputChange = (e) => {
        setTask(e.target.value);
    }

    const handleAddTask = () => {
        props.addTask(task);
        setTask('');
        inputRef.current.focus();
    }

    const inputRef = useRef();

    return (
        <div className='form'>
            <input
                ref={inputRef}
                value={task}
                placeholder='add task...'
                onChange={handleInputChange}
                onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
            />
            <Button
                variant="success"
                onClick={handleAddTask}>Add</Button>
        </div>
    );
}

export default Form;