<template>
  <nav v-if="user">
    <div>
      <p>Hey there <b>{{ user.displayName }}</b></p>
      <p class="email">Currently logged in as <i>{{ user.email }}</i> </p>
    </div>
    <button @click="logoutButton">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout';
import getUser from '../composables/getUser';
export default {
  setup() {
    const { error, logout } = useLogout();
    const { user } = getUser()

    const logoutButton = async () => {
      await logout();
      if (!error.value) {
        console.log('user logged out');
      }
    };

    return { logoutButton, user };
  },
};
</script>

<style>
nav {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav p {
  margin: 2px auto;
  font-size: 18px;
}

nav p.email {
  font-size: 16px;
}
</style>
