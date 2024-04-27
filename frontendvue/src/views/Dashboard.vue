<template>
    <Navbar />
    <div class="container px-5 py-5 mx-auto space-y-5">
        <div class="flex space-x-2">
            <label class="w-full form-control">
                <label
                    class="flex items-center gap-2 input input-bordered input-primary"
                >
                    <input type="date" class="grow" name="date" id="date" />
                </label>
            </label>
            <button @click="openModal" class="btn btn-success">
                Create Todo
            </button>
        </div>

        <div class="space-y-5">
            <div
                class="flex flex-row justify-between shadow-md rounded-s-lg"
                v-for="(todo, index) in todos"
                :key="index"
            >
                <div class="w-auto p-5">
                    <h5 class="text-xl font-bold tracking-tight">
                        {{ todo.title }}
                    </h5>
                    <p class="text-sm font-normal gray-700 dark:text-gray-400">
                        {{ todo.tanggal }}
                    </p>
                    <p class="text-sm font-normal">
                        <span>{{ todo.start_time }}</span>
                        <span> - </span>
                        <span>{{ todo.end_time }}</span>
                    </p>
                </div>
                <div class="flex flex-row items-center space-x-2">
                    <Button class="btn btn-primary"> Update </Button>
                    <Button class="btn btn-error"> Delete </Button>
                    <div
                        :class="getTodoStatusClass(todo.status)"
                        class="box-content w-3 h-full"
                    ></div>
                </div>
            </div>
        </div>
    </div>
    <div
        v-if="isModalOpen"
        class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
    >
        <div class="p-4 space-y-2 rounded-lg bg-base-300 w-80 md:w-96 card">
            <label class="w-full form-control">
                <div class="label" for="title">
                    <span class="label-text">Title</span>
                </div>
                <input
                    v-model="newTodo.title"
                    name="title"
                    id="title"
                    type="text"
                    placeholder="Type here"
                    class="w-full input input-bordered"
                />
            </label>
            <label class="w-full form-control">
                <div class="label" for="tanggal">
                    <span class="label-text">Date</span>
                </div>
                <input
                    v-model="newTodo.tanggal"
                    name="tanggal"
                    id="tanggal"
                    type="date"
                    class="w-full input input-bordered"
                />
            </label>
            <div class="flex">
                <label class="w-1/2 form-control">
                    <div class="label" for="start-time">
                        <span class="label-text">Start Time</span>
                    </div>
                    <input
                        v-model="newTodo.start_time"
                        name="start-time"
                        id="start-time"
                        type="time"
                        class="w-full input input-bordered"
                    />
                </label>
                <label class="w-1/2 form-control">
                    <div class="label" for="end-time">
                        <span class="label-text">End Time</span>
                    </div>
                    <input
                        v-model="newTodo.end_time"
                        name="end-time"
                        id="end-time"
                        type="time"
                        class="w-full input input-bordered"
                    />
                </label>
            </div>

            <label class="w-full form-control">
                <div class="label">
                    <span class="label-text">Status</span>
                </div>
                <select v-model="newTodo.status" class="select select-bordered">
                    <option disabled selected>Pick one</option>
                    <option value="true">Finished</option>
                    <option value="false">Unfinished</option>
                </select>
            </label>
            <button @click="createTodo" class="btn btn-success">
                Create Todo
            </button>
            <button @click="closeModal" class="w-full btn btn-square">
                Close
            </button>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
import Cookies from "js-cookie";
export default {
    name: "Todos",
    components: {
        Navbar,
    },
    data() {
        return {
            todos: [],
            newTodo: {
                title: "",
                tanggal: "",
                start_time: "",
                end_time: "",
                status: "",
            },
            isModalOpen: false,
        };
    },
    mounted() {
        this.getTodos();
    },
    methods: {
        async getTodos() {
            const token = Cookies.get("token");
            try {
                const response = await axios.get(
                    "http://localhost:3000/todos",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                this.todos = response.data;
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        },
        async createTodo() {
            const token = Cookies.get("token");
            try {
                const response = await axios.post(
                    "http://localhost:3000/todos",
                    this.newTodo,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                this.todos.push(response.data);
                this.newTodo = {
                    title: "",
                    tanggal: "",
                    start_time: "",
                    end_time: "",
                    status: "",
                };
            } catch (error) {
                console.error("Error creating todo:", error);
            }
        },
        getTodoStatusClass(status) {
            return status ? "bg-green-700" : "bg-red-700";
        },
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },
    },
};
</script>
