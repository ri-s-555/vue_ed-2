<script setup lang="ts">
import mainHeader from './components/main-header.vue'
import mainFooter from './components/main-footer.vue'
import { useRoute } from 'vue-router'
import { onBeforeMount } from 'vue'
import useUserService from './service/user-service-api'
import useUserStore from './stores/user-store'

const route = useRoute()
const { setUser } = useUserStore()
const { getUser } = useUserService()

const isWithOutHeader = route.meta.withOutHeader

onBeforeMount(async () => {
  console.log('app')
  await setUser(await getUser(1))
})
</script>

<template>
  <mainHeader v-if="!isWithOutHeader" />
  <router-view />
  <mainFooter />
</template>

<style lang="scss"></style>
