<template>
  <div class="container">
    <Navbar />
    <hr>
    <newChatForm />
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import getUser from '../composables/getUser'
import newChatForm from '../components/newChatForm.vue'
import Navbar from '../components/Navbar.vue'

export default {
  components: { Navbar, newChatForm },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
  },
}
</script>

<style></style>
