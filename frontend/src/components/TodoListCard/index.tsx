import { Button } from "flowbite-react";

const TodoListCard = () => {
    return (
        <div className="m-5 my-5 space-y-5 ">
            <div className="container flex flex-row justify-between m-auto shadow-md rounded-s-lg">
                <div className="w-auto p-5">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Title
                    </h5>
                    <p className="text-sm font-normal gray-700 dark:text-gray-400">
                        Tanggal
                    </p>
                    <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                        <span>Start </span>
                        <span>- </span>
                        <span>End </span>
                    </p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                    <Button className="h-12" color="green">
                        Update
                    </Button>
                    <Button className="h-12" color="red">
                        Delete
                    </Button>
                    <div className="box-content w-3 h-full bg-red-500"></div>
                </div>
            </div>
            <div className="container flex flex-row justify-between m-auto shadow-md rounded-s-lg">
                <div className="w-auto p-5">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Title
                    </h5>
                    <p className="text-sm font-normal gray-700 dark:text-gray-400">
                        Tanggal
                    </p>
                    <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                        <span>Start </span>
                        <span>- </span>
                        <span>End </span>
                    </p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                    <Button className="h-12" color="green">
                        Update
                    </Button>
                    <Button className="h-12" color="red">
                        Delete
                    </Button>
                    <div className="box-content w-3 h-full bg-green-500"></div>
                </div>
            </div>
        </div>
    );
};

export default TodoListCard;
