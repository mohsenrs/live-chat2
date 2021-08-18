<template>
  <div class="signup-form">
    <form ref="form" @submit.prevent="handleSubmit">
      <input
        type="text"
        required
        autocomplete="current-password"
        placeholder="display name"
        v-model="displayName"
      />
      <input
        type="text"
        required
        autocomplete="current-password"
        placeholder="email"
        v-model="email"
      />
      <input
        type="password"
        required
        placeholder="password"
        autocomplete="current-password"
        v-model="password"
      />
      <div class="error">{{ error }}</div>
      <button>Signup</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import useSignup from '../composables/useSignup';

export default {
  setup(props, context) {
    const { error, signup } = useSignup();

    const form = ref(null);
    const displayName = ref('');
    const email = ref('');
    const password = ref('');

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      form.value.reset();
      if (!error.value) {
        context.emit('signup')
      }
    };

    return { displayName, email, password, handleSubmit, error, form };
  },
};
</script>

<style></style>
