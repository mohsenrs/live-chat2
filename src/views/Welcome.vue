<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="toChat" />
      <p>
        You need to signup?
        <span @click="showLogin = !showLogin">click here</span>
      </p>
    </div>
    <div v-else>
      <h2>Signup</h2>
      <SignupForm @signup="toChat" />
      <p>
        You need to login?
        <span @click="showLogin = !showLogin">click here</span>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { useRouter } from 'vue-router'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const toChat = () => {
      router.push({ name: 'Chatroom' })
    }

    return { showLogin, toChat }
  },
}
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width: 50%;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 15px 5px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>
