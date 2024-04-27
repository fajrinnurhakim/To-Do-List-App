<template>
    <Navbar />
    <div class="container p-5 mx-auto my-5 space-y-5">
        <div class="flex space-x-2">
            <label class="w-full form-control">
                <label
                    class="flex items-center gap-2 input input-bordered input-primary"
                >
                    <input type="date" class="grow" name="date" id="date" />
                </label>
            </label>
            <button class="btn btn-success">Create Todo</button>
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
        getTodoStatusClass(status) {
            return status ? "bg-green-700" : "bg-red-700";
        },
    },
};
</script>
