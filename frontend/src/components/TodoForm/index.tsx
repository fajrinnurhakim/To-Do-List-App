import {
    Card,
    Label,
    TextInput,
    Button,
    Datepicker,
    Select,
} from "flowbite-react";

const TodoForm = () => {
    return (
        <>
            <div className="m-5">
                <Card className="w-full h-auto p-5">
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="block mb-2">
                                <Label htmlFor="title" value="Title" />
                            </div>
                            <TextInput
                                id="title"
                                type="text"
                                placeholder="Todo Title"
                                required
                            />
                        </div>
                        <div>
                            <div className="block mb-2">
                                <Label htmlFor="tanggal" value="Tanggal" />
                            </div>
                            <Datepicker id="tanggal" required />
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
                                />
                            </div>
                            <div className="w-1/2">
                                <div className="block mb-2">
                                    <Label
                                        htmlFor="end_time"
                                        value="End Time"
                                    />
                                </div>
                                <TextInput id="end_time" type="time" required />
                            </div>
                        </div>

                        <div>
                            <div className="block mb-2">
                                <Label htmlFor="status" value="Select Status" />
                            </div>
                            <Select id="status" required>
                                <option selected disabled>
                                    status
                                </option>
                                <option>Selesai</option>
                                <option>Belum Selesai</option>
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
