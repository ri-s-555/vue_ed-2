<template>
  <div class="container trending-earphones">
    <div class="trending-earphones__header">Trending Earphones</div>
    <TabMenu :tabs="menuItems" menuClass="trending-earphones__menu" @tab-switched="switchTab" />
    <div class="trending-earphones__product-wrapper">
      <ProductCart v-for="(product, index) in currentProducts" :key="index" :product="product" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import TabMenu from './tab-menu.vue'
import ProductCart from './product-cart.vue'
import { type IProduct } from '@/types/Product'
import { EARBUDS, WIRELESS, WIRED } from '@/mock/data/mock-products'

const menuItems = ['Earbuds', 'Wireless', 'Wired']
const currentProducts = ref<IProduct[]>([])

const productsArrays = [EARBUDS, WIRELESS, WIRED]

function switchTab(index: number) {
  currentProducts.value = productsArrays[index]
}

onMounted(() => {
  currentProducts.value = productsArrays[0]
})
</script>

<style lang="scss">
@use '@/scss/colors' as *;

.trending-earphones {
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  &__header {
    width: 465px;
    height: 54px;
    font-size: 44px;
    font-weight: 600;
    line-height: 53.64px;
    text-align: left;
    color: rgba(43, 38, 38, 1);
    margin-top: 70px;
    margin-bottom: 55px;
  }

  &__product-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 85px;
    margin-top: 50px;
  }

  &::before {
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    left: 10px;
    top: 60%;
    transform: translateY(-50%);
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='24' fill='%2338D18F'/%3E%3Cpath d='M23.1125 24.0001L27.5375 19.5751C27.7703 19.3409 27.901 19.0241 27.901 18.6939C27.901 18.3636 27.7703 18.0468 27.5375 17.8126C27.4213 17.6955 27.283 17.6025 27.1307 17.539C26.9784 17.4755 26.815 17.4429 26.65 17.4429C26.485 17.4429 26.3216 17.4755 26.1693 17.539C26.017 17.6025 25.8787 17.6955 25.7625 17.8126L20.4625 23.1126C20.3453 23.2288 20.2524 23.3671 20.1889 23.5194C20.1254 23.6717 20.0928 23.8351 20.0928 24.0001C20.0928 24.1651 20.1254 24.3285 20.1889 24.4808C20.2524 24.6332 20.3453 24.7714 20.4625 24.8876L25.7625 30.2501C25.8793 30.366 26.0178 30.4576 26.1701 30.5198C26.3224 30.582 26.4855 30.6136 26.65 30.6126C26.8145 30.6136 26.9776 30.582 27.1299 30.5198C27.2822 30.4576 27.4207 30.366 27.5375 30.2501C27.7703 30.0159 27.901 29.6991 27.901 29.3689C27.901 29.0386 27.7703 28.7218 27.5375 28.4876L23.1125 24.0001Z' fill='white'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    transition: all 0.3s ease;
  }

  &:hover::before {
    transform: translate(-5px, -50%);

    background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='24' fill='%2338D18F'/%3E%3Cpath d='M23.1125 24.0001L27.5375 19.5751C27.7703 19.3409 27.901 19.0241 27.901 18.6939C27.901 18.3636 27.7703 18.0468 27.5375 17.8126C27.4213 17.6955 27.283 17.6025 27.1307 17.539C26.9784 17.4755 26.815 17.4429 26.65 17.4429C26.485 17.4429 26.3216 17.4755 26.1693 17.539C26.017 17.6025 25.8787 17.6955 25.7625 17.8126L20.4625 23.1126C20.3453 23.2288 20.2524 23.3671 20.1889 23.5194C20.1254 23.6717 20.0928 23.8351 20.0928 24.0001C20.0928 24.1651 20.1254 24.3285 20.1889 24.4808C20.2524 24.6332 20.3453 24.7714 20.4625 24.8876L25.7625 30.2501C25.8793 30.366 26.0178 30.4576 26.1701 30.5198C26.3224 30.582 26.4855 30.6136 26.65 30.6126C26.8145 30.6136 26.9776 30.582 27.1299 30.5198C27.2822 30.4576 27.4207 30.366 27.5375 30.2501C27.7703 30.0159 27.901 29.6991 27.901 29.3689C27.901 29.0386 27.7703 28.7218 27.5375 28.4876L23.1125 24.0001Z' fill='white'/%3E%3C/svg%3E");
  }
  &::after {
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    right: 10px;
    top: 60%;
    transform: translateY(-50%);
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='24' transform='matrix(-1 0 0 1 48 0)' fill='%2338D18F'/%3E%3Cpath d='M24.8875 24L20.4625 19.5751C20.2297 19.3409 20.099 19.0241 20.099 18.6939C20.099 18.3636 20.2297 18.0468 20.4625 17.8126C20.5787 17.6955 20.7169 17.6025 20.8693 17.539C21.0216 17.4755 21.185 17.4429 21.35 17.4429C21.515 17.4429 21.6784 17.4755 21.8307 17.539C21.983 17.6025 22.1213 17.6955 22.2375 17.8126L27.5375 23.1126C27.6546 23.2288 27.7476 23.3671 27.8111 23.5194C27.8746 23.6717 27.9072 23.8351 27.9072 24.0001C27.9072 24.1651 27.8746 24.3285 27.8111 24.4808C27.7476 24.6332 27.6546 24.7714 27.5375 24.8876L22.2375 30.2501C22.1207 30.366 21.9822 30.4576 21.8299 30.5198C21.6776 30.582 21.5145 30.6136 21.35 30.6126C21.1855 30.6136 21.0224 30.582 20.8701 30.5198C20.7178 30.4576 20.5793 30.366 20.4625 30.2501C20.2297 30.0159 20.099 29.6991 20.099 29.3689C20.099 29.0386 20.2297 28.7218 20.4625 28.4876L24.8875 24Z' fill='white'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    transition: all 0.3s ease;
  }

  &:hover::after {
    transform: translate(5px, -50%);
    background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='24' transform='matrix(-1 0 0 1 48 0)' fill='%2338D18F'/%3E%3Cpath d='M24.8875 24L20.4625 19.5751C20.2297 19.3409 20.099 19.0241 20.099 18.6939C20.099 18.3636 20.2297 18.0468 20.4625 17.8126C20.5787 17.6955 20.7169 17.6025 20.8693 17.539C21.0216 17.4755 21.185 17.4429 21.35 17.4429C21.515 17.4429 21.6784 17.4755 21.8307 17.539C21.983 17.6025 22.1213 17.6955 22.2375 17.8126L27.5375 23.1126C27.6546 23.2288 27.7476 23.3671 27.8111 23.5194C27.8746 23.6717 27.9072 23.8351 27.9072 24.0001C27.9072 24.1651 27.8746 24.3285 27.8111 24.4808C27.7476 24.6332 27.6546 24.7714 27.5375 24.8876L22.2375 30.2501C22.1207 30.366 21.9822 30.4576 21.8299 30.5198C21.6776 30.582 21.5145 30.6136 21.35 30.6126C21.1855 30.6136 21.0224 30.582 20.8701 30.5198C20.7178 30.4576 20.5793 30.366 20.4625 30.2501C20.2297 30.0159 20.099 29.6991 20.099 29.3689C20.099 29.0386 20.2297 28.7218 20.4625 28.4876L24.8875 24Z' fill='white'/%3E%3C/svg%3E");
  }

  &__product {
    &__next {
      padding-top: 180px;
    }
  }
}
</style>
