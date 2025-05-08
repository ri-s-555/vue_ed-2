<script setup lang="ts">
import mainHeader from './components/main-header.vue'
import mainFooter from './components/main-footer.vue'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { getUser } from './service/user-api'
import { useUserStore } from './stores/user-store'
const route = useRoute()
const { setUser } = useUserStore()

const isWithOutHeader = route.meta.withOutHeader
onMounted(async () => {
  console.log('getUser')
  const user = await getUser(1)
  console.log('setUser')
  setUser(user)
})
</script>

<template>
  <mainHeader v-if="!isWithOutHeader" />
  <router-view />
  <mainFooter />
</template>

<style lang="scss"></style>
