<template>
  <div class="login-page container">
    <h1>Personal account</h1>
    <form @submit.prevent="handleSubmit">
      <!-- слушает формы, отмена перезагрузки > метод -->
      <div>
        <div class="form-group">
          <input type="text" id="username" v-model="username" placeholder="Username" required />
        </div>
        <div class="form-group">
          <input type="password" id="password" v-model="password" placeholder="Password" required />
        </div>
      </div>

      <mainButton @click="redirectToProfile" title="Login" />
    </form>
  </div>
</template>

<script lang="ts" setup>
import mainButton from '@/components/ui/main-button.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const redirectToProfile = () => {
  router.push({ name: 'Profile' })
}



// export default {
//   name: 'LoginPage'
// }

import { ref } from 'vue'

const username = ref('')
const password = ref('')

const handleSubmit = () => {
  console.log('Username:', username.value)
  console.log('Password:', password.value)
}
</script>

<style lang="scss">
@use '@/scss/colors' as *;
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px;
  background-color: $white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 25px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 17px;
  text-align: center;
  border: 1px solid $border-transparent;
  border-radius: 4px;
}
</style>
