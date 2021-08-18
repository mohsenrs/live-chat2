<template>
  <div class="login-form">
    <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="email" v-model="email" />
      <input
        type="password"
        required
        placeholder="password"
        v-model="password"
      />
      <div class="error">{{ error }}</div>
      <button>Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import useLogin from '../composables/useLogin';

export default {
  setup(props, context) {
    const email = ref('');
    const password = ref('');

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        console.log('user logged in');
        context.emit('login')
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style></style>
