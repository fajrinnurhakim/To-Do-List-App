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
                <p class="text-xl text-center">Login To Your Account</p>
                <label class="form-control"
                    ><div>
                        <label class="label" for="email"
                            ><span class="label-text">Email</span></label
                        >
                    </div>
                    <label
                        class="flex items-center gap-2 input input-bordered input-primary"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="w-4 h-4 opacity-70"
                        >
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                            />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                            />
                        </svg>
                        <input
                            type="text"
                            class="grow"
                            placeholder="Email"
                            name="email"
                            id="email"
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="w-4 h-4 opacity-70"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <input
                            type="password"
                            class="grow"
                            placeholder="Password"
                            name="password"
                            id="password"
                        />
                    </label>
                </label>
                <div class="flex items-center">
                    <label class="cursor-pointer label text-start">
                        <input
                            type="checkbox"
                            checked="checked"
                            class="checkbox-xs"
                            id="checkbox"
                            name="checkbox"
                        />
                    </label>
                    <label class="label-text" for="checkbox">Remember Me</label>
                </div>

                <button class="w-full btn btn-primary">LOGIN</button>

                <p class="text-center">
                    <span>Don`t have an account?</span>
                    <router-link to="/register">Register</router-link>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>
