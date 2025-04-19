<template>
  <div>
    <h1>Category List</h1>
    <div class="category-list">
      <div class="category-list__item" v-for="category in CategoryProducts" :key="category">
        <router-link :to="`${RoutePaths.CategoryList}/${category}`">{{ category }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CategoryProducts } from '@/types/category'
import { RoutePaths } from '@/types/Route-names'
</script>
<style lang="scss" scoped>
</style>