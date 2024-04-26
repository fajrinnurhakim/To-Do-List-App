<template>
    <div class="w-full shadow-md">
        <div class="container mx-auto navbar bg-base-100">
            <div class="navbar-start">
                <a class="text-xl btn btn-ghost">Todolist App</a>
            </div>
            <div class="navbar-end">
                <label
                    for="my-drawer-4"
                    aria-label="open sidebar"
                    class="btn btn-circle btn-ghost"
                    ><img
                        src="https://static-00.iconduck.com/assets.00/todo-icon-1024x1024-7nszgsj6.png"
                        alt="images"
                        class="w-8 h-8"
                    />
                </label>
            </div>
        </div>
        <div class="drawer-end bg-red-50">
            <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
            <div class="drawer-side">
                <ul class="w-full min-h-full p-4 menu bg-base-100">
                    <div class="flex items-center justify-between">
                        <a
                            href="/"
                            class="flex text-xl btn btn-ghost lg:hidden"
                        >
                            <span
                                v-for="(profile, index) in profiles"
                                :key="index"
                            >
                                <img
                                    :src="profile.image"
                                    alt="image"
                                    class="w-5 h-6"
                                />
                            </span>
                            Fajrin Nurhakim
                        </a>
                    </div>
                    <li>
                        <router-link to="/">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            Logout
                        </router-link>
                    </li>
                    <li>
                        <label
                            for="my-drawer-4"
                            aria-label="close sidebar"
                            class="drawer-overlay btn-ghost"
                            ><i class="w-4 fa-solid fa-circle-xmark"></i
                            >Close</label
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
