import { useState } from "react";

interface TodoItem {
    id: string;
    checked: boolean;
    text: string;
}

const TodoApp = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        console.log('add todo')
        if(newTodo !== ''){
            const newTodoId = crypto.randomUUID();
            const newTodoItem = {
                id: newTodoId,
                checked: false,
                text: newTodo,
            };
            setTodos([...todos, newTodoItem]);
            console.log(newTodoItem);
            setNewTodo('');
        }
        console.log(todos);
    }

    const removeTodo = (id: string) => {
        console.log('remove todo')

    }

    const completeTodo = (id:string) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id){
                return {...todo, checked:!todo.checked}
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (<div>
        <h1>To-do App</h1>
        <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)}></input>
        <button onClick={addTodo}>Add todo</button>
        

        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input type="checkbox" checked={todo.checked} onChange={()=>completeTodo(todo.id)}></input>
                    <span style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>
                 {todo.text}
               </span>
                    <button onClick={() => removeTodo(todo.id)}>Remove todo</button>
                </li>
            ))}
        </ul>
    </div>);
}

export default TodoApp;