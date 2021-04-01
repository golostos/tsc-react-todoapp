export type Task = {
    text: string
    completed: boolean
}

type TodoListProps = {
    tasks: Array<Task>
}

const TodoList = ({tasks}: TodoListProps): JSX.Element => {
    return (
        <ul>
            {tasks.map((task, index) => 
                <li key={index} 
                    style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                        {task.text}
                </li>)}
        </ul>
    )
}

export default TodoList;