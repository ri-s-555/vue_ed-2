<template>
  <div>
    <sellersProduct @clickCard="clickCard" />
  </div>
</template>

<script setup lang="ts">
import sellersProduct from '@/components/sellers-product.vue'
import { type IProduct } from '@/types/product'
import { CategoryProducts } from '@/types/category'
import { useRouter, useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { MOCK_PRODUCTS } from '@/mock/data/mock-products'
const route = useRoute()
const router = useRouter()

interface IState {
  currentCategory: CategoryProducts
  products: IProduct[]
}

const state: IState = reactive<IState>({
  currentCategory: route.params.category as CategoryProducts,
  products: [] as IProduct[],
})

function clickCard(product: IProduct) {
  router.push(`/card/${product.id}`)
}

onMounted(() => {
  if (state.currentCategory) {
    state.products = MOCK_PRODUCTS.filter((product) => product.category?.includes(state.currentCategory))
  }
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
