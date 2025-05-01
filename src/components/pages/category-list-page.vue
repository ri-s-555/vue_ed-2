<template>
  <div class="category-list">
    <h1>Category List</h1>
    <div class="category-list__page">


      <div class="category-list__page__item" v-for="category in CategoryProducts" :key="category">
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
h1 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.category-list {
  &__page {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  &__item {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    width: 170px;
    height: 40px;
    transition: background-color 0.3s;
    text-align: center;

    &:hover {
      background-color: #e0e0e0;
    }

    a {
      text-decoration: none;
      color: #333;
      font-weight: bold;

      &:hover {
        color: #007bff;
      }
    }
  }
}
}


</style>
