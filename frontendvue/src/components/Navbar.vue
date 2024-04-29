<template>
  <div class="fixed top-0 w-full shadow-md end-0 start-0">
    <div class="container mx-auto navbar bg-base-100">
      <div class="navbar-start">
        <a class="text-xl btn btn-ghost"
          ><img
            src="https://static-00.iconduck.com/assets.00/todo-icon-1024x1024-7nszgsj6.png"
            alt="logo"
            class="w-8 h-8"
          />Todolist App</a
        >
      </div>
      <div class="navbar-end">
        <label
          for="my-drawer-4"
          aria-label="open sidebar"
          class="btn btn-circle btn-ghost"
          ><img :src="user.image" alt="profile" class="w-full h-full" />
        </label>
      </div>
    </div>
    <div class="drawer-end bg-red-50">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-side">
        <ul class="z-10 w-full min-h-full p-4 menu bg-base-100">
          <div class="flex items-center justify-center">
            <a href="/" class="flex text-xl btn btn-ghost">
              <span
                ><img :src="user.image" alt="profile" class="w-8 h-8"
              /></span>
              {{ user.name }}
            </a>
          </div>
          <li>
            <a href="/" @click="logout">
              <i class="fa-solid fa-right-from-bracket"></i>
              Logout
            </a>
          </li>
          <li>
            <label
              for="my-drawer-4"
              aria-label="close sidebar"
              class="drawer-overlay btn-ghost"
              ><i class="w-4 fa-solid fa-circle-xmark"></i>Close</label
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="toast toast-center toast-middle">
      <div class="alert alert-info" v-if="showToastSuccess">
        <span>{{ toastMessageSuccess }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  data() {
    return {
      user: JSON.parse(Cookies.get('user')),
      showToastSuccess: false,
      toastMessageSuccess: '',
    };
  },
  methods: {
    logout() {
      this.showToastSuccess = true;
      this.toastMessageSuccess = 'Logout successful';
      setTimeout(() => {
        this.showToastSuccess = false;
      }, 1000);
      Cookies.remove('token');
      Cookies.remove('user');
    },
  },
};
</script>
