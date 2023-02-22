import { useState, useEffect } from 'react';
import Form from './Form';
import Navbar from './Navbar';
import TodoList from './TodoList';
import './style.css';

const DeleteButton = (props) => {

  const handleDeleteAll = () => {
    props.setTasks(props.tasks.filter((task) => !task.isCompleted))
  }

  return (
    <div>
      {
        props.activeTab === 'Completed' && (
          <button onClick={handleDeleteAll}>Delete All</button>
        )
      }

    </div>

  )

}

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { taskName: task, isCompleted: false }]);
  };

  const [activeTab, setActiveTab] = useState('All');

  const handleSelectTab = (tab) => {
    setActiveTab(tab);
  }

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  function filterTasks() {
    switch (activeTab) {
      case 'Active':
        setFilteredTasks(tasks.filter((task) => !task.isCompleted));
        break;
      case 'Completed':
        setFilteredTasks(tasks.filter((task) => task.isCompleted));
        break;
      default:
        setFilteredTasks(tasks);
    }
  }

  useEffect(() => {
    filterTasks();
  }, [tasks, activeTab]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">

      <h1>#todo</h1>

      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab} />

      <Form addTask={addTask} />

      <TodoList
        tasks={filteredTasks}
        function={setTasks}
        activeTab={activeTab}
      />

      <DeleteButton
        tasks={tasks}
        setTasks={setTasks}
        activeTab={activeTab} />

    </div>
  );
}

export default App;