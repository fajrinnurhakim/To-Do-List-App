import { useState, FormEvent } from "react";
import { Card, Label, TextInput, Button, Select } from "flowbite-react";
import { createTodo } from "../../utils/fetch";
import { useNavigate } from "react-router-dom";

const TodoForm = () => {
    const [title, setTitle] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [status, setStatus] = useState("default");
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            await createTodo(
                title,
                new Date(tanggal),
                startTime,
                endTime,
                status === "true"
            );

            setTitle("");
            setTanggal("");
            setStartTime("");
            setEndTime("");
            setStatus("default");

            navigate("/home");
        } catch (error) {
            console.error("Error creating todo:", error);
        }
    };

    return (
        <>
            <div className="m-5">
                <Card className="w-full h-auto p-5">
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <div className="block mb-2">
                                <Label htmlFor="title" value="Title" />
                            </div>
                            <TextInput
                                id="title"
                                type="text"
                                placeholder="Todo Title"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="block mb-2">
                                <Label htmlFor="tanggal" value="Tanggal" />
                            </div>
                            <TextInput
                                id="tanggal"
                                type="date"
                                required
                                value={tanggal}
                                onChange={(e) => setTanggal(e.target.value)}
                            />
                        </div>
                        <div className="flex space-x-2">
                            <div className="w-1/2">
                                <div className="block mb-2">
                                    <Label
                                        htmlFor="start_time"
                                        value="Start Time"
                                    />
                                </div>
                                <TextInput
                                    id="start_time"
                                    type="time"
                                    required
                                    value={startTime}
                                    onChange={(e) =>
                                        setStartTime(e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-1/2">
                                <div className="block mb-2">
                                    <Label
                                        htmlFor="end_time"
                                        value="End Time"
                                    />
                                </div>
                                <TextInput
                                    id="end_time"
                                    type="time"
                                    required
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="block mb-2">
                                <Label htmlFor="status" value="Select Status" />
                            </div>
                            <Select
                                id="status"
                                required
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="default" disabled>
                                    Status
                                </option>
                                <option value="true">Selesai</option>
                                <option value="false">Belum Selesai</option>
                            </Select>
                        </div>
                        <Button type="submit" color="purple">
                            Create Todo
                        </Button>
                    </form>
                </Card>
            </div>
        </>
    );
};

export default TodoForm;
