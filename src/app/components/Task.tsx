"use client"
import React, { FormEventHandler, useState } from 'react'
import { ITask } from '../../../types/tasks'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { deleteTodo, editTodo } from '../../../api'

interface TaskProps {
    task: ITask,
}

const Task: React.FC<TaskProps> = ({ task }) => {

    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        console.log('first', taskToEdit);
        await editTodo({
            id: task.id,
            text: taskToEdit,
        });
        // setTaskToEdit("");
        setOpenModalEdit(false);
        router.refresh();
    }

    const handleDeleteTask = async (id: string) => {
        await deleteTodo(id);
        setOpenModalDelete(false);
        router.refresh();
    }

    return (
        <tr key={task.id}>
            <th className='w-full'>{task.text}</th> {/* Sửa đúng thành task.text */}
            <td className='flex gap-5'>
                <FiEdit onClick={() => { setOpenModalEdit(true) }} cursor='pointer' size={20} className='text-green-500' />
                <Modal
                    modalOpen={openModalEdit}
                    setModalOpen={setOpenModalEdit}
                >
                    <form onSubmit={handleSubmitEditTodo}>
                        <h3 className='font-bold text-lg'>Edit task</h3>
                        <div className='modal-action'>
                            <input type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                value={taskToEdit}
                                onChange={(e) => setTaskToEdit(e.target.value)}
                            />
                            <button type='submit' className='btn'>Submit</button>
                        </div>
                    </form>
                </Modal>
                <FiTrash2 onClick={() => { setOpenModalDelete(true) }} cursor='pointer' size={20} className='text-red-500' />
                <Modal
                    modalOpen={openModalDelete}
                    setModalOpen={setOpenModalDelete}
                >
                    <h3 className='font-bold text-lg'>Are you sure, you want to delete this task?</h3>
                    <div className='modal-action'>
                        <button onClick={() => handleDeleteTask(task.id)}>
                            Yes
                        </button>
                    </div>
                </Modal>
            </td>
        </tr>
    )
}

export default Task