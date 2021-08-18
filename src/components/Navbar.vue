<template>
  <nav>
    <div>
      <p>Hey there ...</p>
      <p class="email">Currently logged in as ...</p>
    </div>
    <button @click="logoutButton">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout';
export default {
  setup() {
    const { error, logout } = useLogout();

    const logoutButton = async () => {
      await logout();
      if (!error.value) {
        console.log('user logged out');
      }
    };

    return { logoutButton };
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
