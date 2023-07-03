import { ITask } from "../../../types/tasks"
import Task from "./Task";

interface TodoListProps {
    tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = (tasks) => {
    // console.log('aaa', tasks);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.tasks.map((task: ITask) => (
                            <Task task={task} />
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default TodoList