import { useEffect, useState } from "react";
import { TaskDTO } from "../types";

export function useFetchTasks(url: string) {
    const [tasks, setTasks] = useState<TaskDTO[]>([])
    const [error, setError] = useState<Error | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(url).then(response => {
            if (response.ok) return response.json()
            else throw new Error('404')
        }).then((tasksFromServer: TaskDTO[]) => {
            setTasks(tasksFromServer)
            setLoading(false)
        }).catch((err: Error) => {
            console.error(error)
            setError(err)
        })
    }, [])

    const result: [TaskDTO[], typeof setTasks] = [tasks, setTasks]
    return { loading, error, result }
}