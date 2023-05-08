import React, { useState } from 'react';

let initTasks = [
    { id: 1, title: 'Open your eyes', done: true },
    { id: 2, title: 'Check smartphone', done: false },
    { id: 3, title: 'Brush your teath', done: false }
];



const App = () => {
    const [newTask, setNewTasks] = useState('');
    const [tasks, setTasks] = useState(initTasks);
    const changeTaskStatus = elem => {

        setTasks(tasks.map(item => item.id === elem.id ? { ...item, done: !item.done } : item));

    };

    const enterNewTask = (e) => setNewTasks(e.target.value);
    const addNewTask = () => {
        setTasks([
            ...tasks,
            { id: tasks.length + 1, title: newTask, done: false }
        ]);
        setNewTasks("");
    };

    return (
        <>
            <div>
                <input type='text' value={newTask} onChange={enterNewTask} />
                <button onClick={addNewTask}>Add new task</button>
            </div>
            <ul className='tasks-list'>
                {
                    tasks.map(elem => <li key={elem.id} className={elem.done ? 'task-done' : ''}
                        onClick={() => changeTaskStatus(elem)}>{elem.title}</li>)
                }
            </ul>

        </>
    );
};

export default App;
