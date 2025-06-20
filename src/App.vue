<script setup lang="ts">
import mainHeader from './components/main-header.vue'
import mainFooter from './components/main-footer.vue'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useUserStore } from './stores/user-store'
import { useUserService } from './service/user-service-api'

const route = useRoute()
const userStore = useUserStore();
const { setUser } = userStore;
const { getUser: getUserFromService } = useUserService()

const isWithOutHeader = route.meta.withOutHeader

onMounted(async () => {
  try {
    const user = await getUserFromService(1)
    setUser(user)
  } catch (error) {
    console.error('Failed to fetch user:', error)
  }
})



// onMounted(async () => {
//   // setUser (await getUser(1))
//   const user = await getUserFromService(1)
//   setUser(user)
// })
</script>

<template>
  <mainHeader v-if="!isWithOutHeader" />
  <router-view />
  <mainFooter />
</template>

<style lang="scss"></style>
