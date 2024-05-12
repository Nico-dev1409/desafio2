import React , { useState , useEffect } from 'react'
import "./tasksStyles.css"
const TaskList = () =>{
    const [tasks, setTasks] = useState([]);
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(true);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(tasks => setTasks(tasks))
        .catch(error => setError("Error al cargar la api"))
        .finally(() => setLoading(false))
    }, [])
    return(
        <>
        <section className='container'>
        <h1 className='title'>Lista de Tareas</h1>
        {loading ? <span>"Cargando lista de tareas..."</span> :
        error ? <strong>{error}</strong> :  
         <ul className='tasks-container'>
         {tasks.map((task) => ( 
             <li className='card border-success mb-3' key={task.id}>Título: {task.title}
             <span className={task.completed ? "statusTask green" : "statusTask red"}>{task.completed ? "Tarea Completa" : "Tarea Incompleta"}</span>
             </li>
         ))}
         </ul>
        }
        </section>   
        </>
    )
};

export default TaskList;