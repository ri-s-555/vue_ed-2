<template>
  <div class="category-list">
    <h1>Category List</h1>
    <div class="category-list__page">


      <div class="category-list__page__item" v-for="category in CategoryProducts" :key="category">
        <router-link :to="`${RoutePaths.CategoryList}/${category}`">    <p>{{ category }}</p>  <img class="category-list__page__item__img" :src="CATEGORY_IMAGES[category]"    />


        </router-link >
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { CategoryProducts, CATEGORY_IMAGES } from '@/types/category'
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
    width: 200px;
    height: 200px;
    transition: background-color 0.3s;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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

    &__img {
      width: 100px;
      height: 100px;

    }
  }
}
}


</style>
