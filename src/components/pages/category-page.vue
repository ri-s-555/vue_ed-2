<template>
  <div>
    <category-wrapper :currentCategory="state.currentCategory" :menuItems="state.menuItems" @clickCard="clickCard" />
  </div>
</template>

<script setup lang="ts">
import categoryWrapper from '@/components/category-wrapper.vue'
import { CategoryTitles } from '@/types/category'
import { type IProduct } from '@/types/Product'
import { CategoryProducts } from '@/types/category'
import { useRouter, useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { getProducts } from '@/service/product-api'
const route = useRoute()
const router = useRouter()

interface IState {
  currentCategory: CategoryProducts
  products: IProduct[]
  menuItems: CategoryTitles[]
}

const state: IState = reactive<IState>({
  currentCategory: route.params.category as CategoryProducts,
  products: [] as IProduct[],
  menuItems: [],
})

function clickCard(product: IProduct) {
  router.push(`/card/${product.id}`)
}

function getMenuItems() {
  if ([CategoryProducts.TOP_PICKS, CategoryProducts.WATCHES].includes(state.currentCategory)) {
    state.menuItems =[CategoryTitles.TOP_PICKS, CategoryTitles.WATCHES]
  } else {
    state.menuItems = [CategoryTitles.EARBUDS, CategoryTitles.WIRELESS, CategoryTitles.WIRED]
  }
}
onMounted(async () => {
  if (state.currentCategory) {
    const products = await getProducts()
    state.products = products.filter((product) => product.category?.includes(state.currentCategory))
  }
  getMenuItems()
  console.log(route.params.category)
})
</script>

<style lang="scss" scoped>
.category-page__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
