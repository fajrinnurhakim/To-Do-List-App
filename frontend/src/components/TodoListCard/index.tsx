/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { getTodos, deleteTodo } from "../../utils/fetch";

const TodoListCard = () => {
    const [todos, setTodos] = useState<any[]>([]);
    const [selectedDate, setSelectedDate] = useState<string>("");

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const todosData: any[] = await getTodos();
                setTodos(todosData);
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

    return (
        <div className="m-5 my-5 space-y-5">
            <div className="container m-auto">
                <div className="block mb-2">
                    <Label htmlFor="tanggal" value="Filter by Date" />
                </div>
                <TextInput
                    id="tanggal"
                    type="date"
                    required
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
                            <Button className="h-12" color="green">
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
                                }-500`}
                            ></div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default TodoListCard;
