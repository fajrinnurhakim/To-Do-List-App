<template>
    <section id="home" class="flex h-screen bg-base-100">
        <div
            class="items-center justify-center hidden w-3/6 h-screen bg-primary lg:inline-flex"
        >
            <div
                class="flex flex-col items-center w-4/6 p-5 space-y-10 text-center"
            >
                <p class="text-3xl font-bold text-white">Todolist App</p>
                <img
                    src="https://static-00.iconduck.com/assets.00/todo-icon-1024x1024-7nszgsj6.png"
                    alt="logo"
                    class="w-24 h-24 p-5 bg-white rounded-2xl"
                />
                <p class="text-2xl text-white">
                    Check. Plan. Achieve. With our Todolist App, Make Every Day
                    Count!
                </p>
                <p class="text-justify text-white text-md">
                    Our Todolist App streamlines your tasks, helping you plan
                    efficiently, stay organized, and accomplish your goals. With
                    easy task management and progress tracking, seize every
                    opportunity to excel in your endeavors. Download now and
                    maximize your productivity!
                </p>
            </div>
        </div>
        <div class="flex items-center justify-center w-full h-screen lg:w-3/6">
            <div class="w-4/6 space-y-2 flex-column">
                <div class="flex justify-center w-full lg:hidden">
                    <img
                        src="https://static-00.iconduck.com/assets.00/todo-icon-1024x1024-7nszgsj6.png"
                        alt="logo"
                        class="w-24 h-24 p-5 bg-white rounded-2xl"
                    />
                </div>
                <p class="text-xl text-center">Login To Your Account</p>
                <label class="form-control">
                    <div>
                        <label class="label" for="email">
                            <span class="label-text">Email</span>
                        </label>
                    </div>
                    <label
                        class="flex items-center gap-2 input input-bordered input-primary"
                    >
                        <i class="w-4 h-4 fa-solid fa-envelope opacity-70"></i>
                        <input
                            type="text"
                            class="grow"
                            placeholder="Email"
                            name="email"
                            id="email"
                            v-model="email"
                            required
                        />
                    </label>
                </label>

                <label class="form-control">
                    <div>
                        <label class="label" for="password">
                            <span class="label-text">Password</span>
                        </label>
                    </div>
                    <label
                        class="flex items-center gap-2 input input-bordered input-primary"
                    >
                        <i class="w-4 h-4 fa-solid fa-key opacity-70"></i>
                        <input
                            :type="showPassword ? 'text' : 'password'"
                            class="grow"
                            placeholder="Password"
                            name="password"
                            id="password"
                            v-model="password"
                            required
                        />
                        <i
                            class="w-4 h-4 fa-solid"
                            :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"
                            @click="togglePasswordVisibility"
                        ></i>
                    </label>
                </label>

                <div class="flex items-center">
                    <label class="cursor-pointer label text-start">
                        <input
                            type="checkbox"
                            checked="checked"
                            class="checkbox-xs me-2"
                            id="checkbox"
                            name="checkbox"
                            v-model="rememberMe"
                        />
                        <label class="label-text" for="checkbox">
                            Remember Me</label
                        >
                    </label>
                </div>

                <button
                    class="w-full btn btn-primary"
                    @click="handleLogin"
                    :disabled="!email || !password"
                >
                    LOGIN
                </button>

                <p class="text-center">
                    <span>Don't have an account?</span>
                    <router-link to="/register">Register</router-link>
                </p>
            </div>
        </div>
        <div class="toast toast-center toast-middle">
            <div class="alert alert-info" v-if="showToastSuccess">
                <span>{{ toastMessageSuccess }}</span>
            </div>
        </div>
        <div class="toast toast-center toast-middle">
            <div class="alert alert-error" v-if="showToastError">
                <span>{{ toastMessageError }}</span>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
    data() {
        return {
            email: "",
            password: "",
            rememberMe: true,
            showToastSuccess: false,
            showToastError: false,
            toastMessageSuccess: "",
            toastMessageError: "",
            showPassword: false,
        };
    },
    methods: {
        async handleLogin() {
            try {
                const { data } = await axios.post(
                    "http://localhost:3000/auth/login",
                    {
                        email: this.email,
                        password: this.password,
                    }
                );
                if (data.token) {
                    const user = {
                        id: data.user.id,
                        name: data.user.name,
                        image: data.user.image,
                        email: data.user.email,
                    };
                    Cookies.set("user", JSON.stringify(user), { expires: 1 });
                    Cookies.set("token", data.token, {
                        expires: this.rememberMe ? 3600 * 24 * 7 : 3600,
                        secure: true,
                        sameSite: "lax",
                    });
                    this.showToastSuccess = true;
                    this.toastMessageSuccess = "Login successful";
                    setTimeout(() => {
                        this.showToastSuccess = false;
                    }, 1000);
                    window.location.href = "/dashboard";
                } else {
                    this.showToastError = true;
                    this.toastMessageError = "Login Error";
                    setTimeout(() => {
                        this.showToastError = false;
                    }, 1000);
                }
            } catch (error) {
                this.showToastError = true;
                this.toastMessageError =
                    ("An error occurred during login.", error);
                setTimeout(() => {
                    this.showToastError = false;
                }, 1000);
            }
        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
    },
};
</script>
