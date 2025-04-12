<script setup lang="ts">
import mainHeader from './components/main-header.vue'
// import featuredProducts from './components/featured-products.vue'
// import sellersProd from './components/sellers-prod.vue'
// import trendingEarphones from './components/trending-earphones.vue'
// import newLaunches from './components/new-launches.vue'
import mainFooter from './components/main-footer.vue'
import cartPage from './components/cart-page.vue'
</script>

<template>
  <div class="style_ad">HelloWorld</div>
  <mainHeader />
  <!-- <featuredProducts />
  <sellersProd />
  <trendingEarphones />
  <newLaunches /> -->
  <cartPage />
  <mainFooter />
</template>

<style lang="scss">
.style_ad {
  color: aquamarine;
}
</style>
