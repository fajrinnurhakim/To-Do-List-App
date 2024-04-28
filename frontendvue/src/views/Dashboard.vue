<template>
    <Navbar />
    <div class="container px-5 py-5 mx-auto my-16 space-y-5">
        <div class="flex space-x-2">
            <label class="w-full form-control">
                <label
                    class="flex items-center gap-2 input input-bordered input-primary"
                >
                    <input
                        type="date"
                        class="grow"
                        name="filterDate"
                        id="filterDate"
                        v-model="filterDate"
                        @change="applyDateFilter"
                    />
                </label>
            </label>
            <button @click="openModalForCreate" class="btn btn-success">
                Create Todo
            </button>
        </div>

        <div class="space-y-5">
            <div
                class="flex flex-row justify-between shadow-md rounded-s-lg"
                v-for="(todo, index) in paginatedTodos"
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
                    <button
                        @click="openModalForUpdate(todo)"
                        class="btn btn-primary"
                    >
                        Update
                    </button>
                    <button @click="deleteTodo(todo.id)" class="btn btn-error">
                        Delete
                    </button>
                    <div
                        :class="getTodoStatusClass(todo.status)"
                        class="box-content w-3 h-full"
                    ></div>
                </div>
            </div>
        </div>
        <div class="flex justify-center w-full">
            <div class="join">
                <button
                    @click="goToPreviousPage"
                    class="join-item btn btn-outline"
                >
                    Previous page
                </button>
                <template v-for="pageNumber in getTotalPages()">
                    <input
                        class="join-item btn btn-square btn-outline"
                        type="radio"
                        name="options"
                        :aria-label="pageNumber"
                        :checked="pageNumber === currentPage"
                        @click="currentPage = pageNumber"
                    />
                </template>
                <button @click="goToNextPage" class="join-item btn btn-outline">
                    Next
                </button>
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
            <button
                v-if="newTodo.id"
                @click="updateTodo()"
                class="btn btn-success"
            >
                Update Todo
            </button>
            <button v-else @click="createTodo()" class="btn btn-success">
                Create Todo
            </button>
            <button @click="closeModal" class="w-full btn btn-square">
                Close
            </button>
        </div>
        <div class="toast toast-center toast-middle">
            <div class="alert alert-info" v-if="showToastSuccess">
                <span>{{ toastMessageSuccess }}</span>
            </div>
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
            filterDate: "",
            currentPage: 1,
            itemsPerPage: 4,
            showToastSuccess: false,
            toastMessageSuccess: "",
        };
    },
    mounted() {
        this.getTodos();
    },
    computed: {
        paginatedTodos() {
            const { startIndex, endIndex } = this.getPaginationRange();
            return this.todos.slice(startIndex, endIndex);
        },
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
                this.resetFormAndCloseModal();
                this.showToastSuccess = true;
                this.toastMessageSuccess = "Create Todo successful";
                setTimeout(() => {
                    this.showToastSuccess = false;
                }, 1000);
                window.location.href = "/dashboard";
                window.location.reload();
            } catch (error) {
                console.error("Error creating todo:", error);
            }
        },
        async updateTodo() {
            const token = Cookies.get("token");
            try {
                const response = await axios.put(
                    `http://localhost:3000/todos/${this.newTodo.id}`,
                    this.newTodo,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const index = this.todos.findIndex(
                    (todo) => todo.id === this.newTodo.id
                );
                if (index !== -1) {
                    this.todos[index] = response.data;
                }
                this.resetFormAndCloseModal();
                this.showToastSuccess = true;
                this.toastMessageSuccess = "Update Todo successful";
                setTimeout(() => {
                    this.showToastSuccess = false;
                }, 1000);
                window.location.href = "/dashboard";
                window.location.reload();
            } catch (error) {
                console.error("Error updating todo:", error);
            }
        },
        async deleteTodo(todoId) {
            const token = Cookies.get("token");
            try {
                await axios.delete(`http://localhost:3000/todos/${todoId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                this.todos = this.todos.filter((todo) => todo.id !== todoId);
            } catch (error) {
                console.error("Error deleting todo:", error);
            }
        },
        applyDateFilter() {
            if (this.filterDate) {
                this.todos = this.todos.filter(
                    (todo) => todo.tanggal === this.filterDate
                );
            } else {
                this.getTodos();
            }
        },
        resetFormAndCloseModal() {
            this.newTodo = {
                title: "",
                tanggal: "",
                start_time: "",
                end_time: "",
                status: "",
            };
            this.isModalOpen = false;
        },
        openModalForCreate() {
            this.isModalOpen = true;
            this.newTodo = {
                title: "",
                tanggal: "",
                start_time: "",
                end_time: "",
                status: "",
            };
        },
        openModalForUpdate(todo) {
            this.newTodo = {
                id: todo.id,
                title: todo.title,
                tanggal: todo.tanggal,
                start_time: todo.start_time,
                end_time: todo.end_time,
                status: todo.status,
            };
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },
        getTodoStatusClass(status) {
            return status ? "bg-green-700" : "bg-red-700";
        },
        getPaginationRange() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return { startIndex, endIndex };
        },
        getTotalPages() {
            return Math.ceil(this.todos.length / this.itemsPerPage);
        },
        goToPreviousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        goToNextPage() {
            if (this.currentPage < this.getTotalPages()) {
                this.currentPage++;
            }
        },
    },
};
</script>
