<script setup lang="ts">
import mainHeader from './components/main-header.vue'
import mainFooter from './components/main-footer.vue'
import { useRoute } from 'vue-router'
// import { computed } from 'vue'

const route = useRoute()
console.log(route)

const isWithOutHeader = route.meta.withOutHeader

</script>

<template>
  <mainHeader v-if="!isWithOutHeader" />
  <router-view />
  <mainFooter />
</template>

<style lang="scss">

</style>
