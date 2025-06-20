<template>
  <div>
    <category-wrapper :currentCategory="state.currentCategory"
    :title="getTitleForCategory(state.currentCategory)"
    :menuItems="state.menuItems" @clickCard="clickCard" />
  </div>
</template>

<script setup lang="ts">
import categoryWrapper from '@/components/category-wrapper.vue'
import { CategoryTitles, CategoryProducts  } from '@/types/category'
import { type IProduct } from '@/types/Product'
import { CategoryProductsTitles } from '@/types/category'
import { useRouter, useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { useProductService } from '@/service/product-service-api'


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

function getTitleForCategory(category: CategoryProducts): string {
  return CategoryProductsTitles[category]
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
    try {
      // const products = await useProductService();
      // state.products = products.filter((product) =>
      // product.category?.includes(state.currentCategory));

      const productService = useProductService()
      const products = await productService.getProducts()
      state.products = products.filter((product: IProduct) =>
      product.category?.includes(state.currentCategory))


      getMenuItems();
      console.log(route.params.category);
    } catch (error) {
      console.error('Ошибка при загрузке продуктов:', error);
    }
  }
});
</script>






<style lang="scss" scoped>
.category-page__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
