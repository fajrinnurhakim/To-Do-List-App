/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Button, Label, Select, TextInput, Modal } from "flowbite-react";
import { getTodos, deleteTodo, updateTodo } from "../../utils/fetch";

interface Todo {
    id: string;
    title: string;
    tanggal: string;
    start_time: string;
    end_time: string;
    status: string;
}

const TodoListCard = () => {
    const [todos, setTodos] = useState<any[]>([]);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [updateTodoData, setUpdateTodoData] = useState<Todo | null>(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const todosData: any[] = await getTodos();
                const today = new Date().toISOString().split("T")[0];

                setTodos(todosData);
                setSelectedDate(today);
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };

        fetchTodos();
    }, []);

    const deleteTodoId = async (id: string) => {
        try {
            await deleteTodo(id);
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error(`Error deleting todo with ID ${id}:`, error);
        }
    };

    const handleUpdateClick = (todo: Todo) => {
        setUpdateTodoData(todo);
        setOpenModal(true);
    };

    const handleCancelClick = () => {
        setUpdateTodoData(null);
    };

    const handleUpdateSubmit = async () => {
        try {
            if (updateTodoData) {
                await updateTodo(
                    updateTodoData.id,
                    updateTodoData.title,
                    updateTodoData.tanggal,
                    updateTodoData.start_time,
                    updateTodoData.end_time,
                    updateTodoData.status
                );

                const updatedTodos: Todo[] = await getTodos();
                setTodos(updatedTodos);
                setUpdateTodoData(null);
            }
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };

    return (
        <div className="m-5 my-5 space-y-5">
            <div className="container m-auto">
                <div className="block mb-2">
                    <Label htmlFor="tanggal" value="Filter by Date" />
                </div>
                <TextInput
                    id="tanggal"
                    type="date"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setSelectedDate(event.target.value)
                    }
                />
            </div>
            {todos
                .filter(
                    (todo) =>
                        selectedDate === "" || todo.tanggal === selectedDate
                )
                .map((todo) => (
                    <div
                        key={todo.id}
                        className="container flex flex-row justify-between m-auto shadow-md rounded-s-lg"
                    >
                        <div className="w-auto p-5">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {todo.title}
                            </h5>
                            <p className="text-sm font-normal gray-700 dark:text-gray-400">
                                {todo.tanggal}
                            </p>
                            <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                                <span>{todo.start_time}</span>
                                <span> - </span>
                                <span>{todo.end_time}</span>
                            </p>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <Button
                                className="h-12"
                                color="green"
                                onClick={() => handleUpdateClick(todo)}
                            >
                                Update
                            </Button>
                            <Button
                                className="h-12"
                                color="red"
                                onClick={() => deleteTodoId(todo.id)}
                            >
                                Delete
                            </Button>
                            <div
                                className={`box-content w-3 h-full bg-${
                                    todo.status ? "green" : "red"
                                }-700`}
                            ></div>
                        </div>
                    </div>
                ))}

            {updateTodoData && (
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Body>
                        <div className="space-y-2">
                            <Label htmlFor="updatedTitle" value="Title" />
                            <TextInput
                                id="updatedTitle"
                                type="text"
                                value={updateTodoData.title}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setUpdateTodoData({
                                        ...updateTodoData,
                                        title: e.target.value,
                                    })
                                }
                            />

                            <Label htmlFor="updatedTanggal" value="Tanggal" />
                            <TextInput
                                id="updatedTanggal"
                                type="date"
                                value={updateTodoData.tanggal}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setUpdateTodoData({
                                        ...updateTodoData,
                                        tanggal: e.target.value,
                                    })
                                }
                            />

                            <Label
                                htmlFor="updatedStartTime"
                                value="Start Time"
                            />
                            <TextInput
                                id="updatedStartTime"
                                type="text"
                                value={updateTodoData.start_time}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setUpdateTodoData({
                                        ...updateTodoData,
                                        start_time: e.target.value,
                                    })
                                }
                            />

                            <Label htmlFor="updatedEndTime" value="End Time" />
                            <TextInput
                                id="updatedEndTime"
                                type="text"
                                value={updateTodoData.end_time}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setUpdateTodoData({
                                        ...updateTodoData,
                                        end_time: e.target.value,
                                    })
                                }
                            />

                            <Label htmlFor="updatedStatus" value="Status" />
                            <Select
                                id="status"
                                value={updateTodoData.status}
                                onChange={(
                                    e: React.ChangeEvent<HTMLSelectElement>
                                ) =>
                                    setUpdateTodoData({
                                        ...updateTodoData,
                                        status: e.target.value,
                                    })
                                }
                            >
                                <option value="default" disabled>
                                    Status
                                </option>
                                <option value="true">Selesai</option>
                                <option value="false">Belum Selesai</option>
                            </Select>
                            <div className="flex space-x-2">
                                <Button
                                    onClick={handleCancelClick}
                                    color="red"
                                    className="w-1/2"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onClick={handleUpdateSubmit}
                                    color="purple"
                                    className="w-1/2"
                                >
                                    Update Todo
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};

export default TodoListCard;
