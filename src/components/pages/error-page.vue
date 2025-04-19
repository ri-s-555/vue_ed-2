<template>
  <div class="error-page container">
    <img src="/img/cat 404.png" alt="Error Image" class="error-image" />
    <h1 class="error-message">It looks like you need to log in to view this page.</h1>
    <mainButton title="Login" @click="redirectToLogin" />
  </div>
</template>

<script lang="ts" setup>
import mainButton from '@/components/ui/main-button.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const redirectToLogin = () => {
  router.push({ name: 'Login' })
}
</script>

<style lang="scss">
@use '@/scss/colors' as *;

.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.error-image {
  width: 400px;
  height: auto;
}

.error-message {
  font-size: 24px;
  color: $text-dark;
  margin-bottom: 30px;
}
</style>

