<template>
  <div class="login-form">
    <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="email" v-model="email" />
      <input type="password" required placeholder="password" v-model="password" />
      <button>Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const handleSubmit = () => {
      console.log(email.value, password.value);
    };

    return { email, password, handleSubmit }
  },
};
</script>

<style></style>
