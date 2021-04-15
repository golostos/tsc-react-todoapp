import { MapArrayToJSX, Task } from "../types";

type TodoListProps = {
    tasks: Task[]
}

const TodoList = ({tasks}: TodoListProps): JSX.Element => {
    const mapFunc: MapArrayToJSX<Task> = (task, index) => {
        return <li key={index}
        style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
            {task.text}
        </li>
    }
    return (
        <ul>
            {tasks.map(mapFunc)}
        </ul>
    )
}

export default TodoList;