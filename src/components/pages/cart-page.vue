<template>
  <div class="cart-page-new container">
    <div class="cart-page-new__header">
      <h1 class="cart-page-new__title">Корзина</h1>
    </div>
    <div v-if="cartItems.length === 0" class="cart-page-new__empty">
      <div class="cart-page-new__empty__img">
        <img
          src="/img/cat cart.png"
          alt="Empty_cart Image"
          class="cart-page-new__empty__img__picture"
        />
      </div>
      <div class="cart-page-new__empty__text">
        <div class="cart-page-new__empty__text__message">Пока пусто</div>
        <p class="empty-message__text">
        Если у вас были товары в корзине –
        <router-link :to="{ name: 'Login' }" id="loginLink">войдите</router-link> в профиль</p>
      </div>
    </div>

    <!-- <div class="recently-view-cart"></div> -->

    <ul v-else class="cart-page-new__items">
      <li v-for="item in limitedCartItems" :key="item.id" class="cart-page-new__items__item">
        <div class="cart-page-new-ite__items__image">
          <img src="@/../public/img/Top_Picks_1.png" :alt="item.name" />
        </div>
        <div class="cart-page-new-items__item__details">
          <div class="cart-page-new-items__item__details__name">{{ item.name }}</div>
          <div class="cart-page-new-items__item__details__price">{{ item.price }}</div>
        </div>
        <mainButton title="Remove" @click="removeProduct(item.id)" />
      </li>
    </ul>

    <!-- <div class="cart-page-new-summary">
      <div class="cart-page-new-summary__total">Итого: <span id="totalPrice">0 руб.</span></div>
      <div class="cart-page-new-summary__actions">
        <button class="btn-secondary">Продолжить покупки</button>
        <button class="btn-primary">Оформить заказ</button>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import { TOP_PICKS, WATCHES, EARBUDS, WIRELESS, WIRED, CARTS_IN_PAGE } from '@/mock/data/mock-products';
import { type IProduct } from '@/types/Product';
import mainButton from '@/components/ui/main-button.vue'

const cartItems = ref<IProduct[]>([...TOP_PICKS, ...WATCHES, ...EARBUDS, ...WIRELESS, ...WIRED, ...CARTS_IN_PAGE]);

const limitedCartItems = computed(() => {
  return cartItems.value.slice(0, 5);
});

const removeProduct = (productId: number) => {
  cartItems.value = cartItems.value.filter(item => item.id !== productId);
};



</script>

<style lang="scss">
@use '@/scss/colors' as *;
.cart-page-new {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header {
    &__title {
      font-size: 24px;
      color: $text-dark;
      text-align: left;
      margin-bottom: 30px;
    }
  }
  &__empty {
    &__img {
      display: grid;
      place-items: center;
      &__picture {
        width: 450px;
      }
    }
    &__text {
      text-align: center;
      font-size: 24px;
    }
  }
  // &__item {
  //   &__image{
  //     width: 300px;
  //   }
  //   &__details {
  //     // &__name{}
  //     // &__price{}

  //   }
  // }
}
</style>
