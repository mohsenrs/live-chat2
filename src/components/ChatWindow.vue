<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
        <span class="created-at">{{ doc.createdAt }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed, ref } from '@vue/reactivity'
import { onUpdated } from '@vue/runtime-core'

export default {
  setup() {
    const { error, documents } = getCollection('messages')

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate())
          return { ...doc, createdAt: time }
        })
      }
    })

    const messages = ref(null)

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight
    })

    return { error, documents, formattedDocuments, messages }
  },
}
</script>

<style>
.chat-window {
  background-color: #fafafa;
  padding: 30px 20px;
}

.single {
  font-size: 20px;
  margin: 18px 0;
}

.created-at {
  float: right;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}

.name {
  color: #9991ff;
  display: block;
  font-weight: bolder;
  margin-right: 6px;
  margin-bottom: 10px;
}

.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
