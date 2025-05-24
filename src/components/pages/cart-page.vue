<template>
  <div class="cart-page-new container">
    <div class="cart-page-new__header">
      <h1 class="cart-page-new__title">Корзина</h1>
    </div>
    <div v-if="state.isLoading" class="cart-page-new__loading">
      Загрузка...
    </div>
    <div v-else-if="isEmpty" class="cart-page-new__empty">
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
          <router-link :to="{ name: 'Login' }" id="loginLink">войдите</router-link> в профиль
        </p>
      </div>
    </div>
    <div v-else class="cart-page-new__wrapper">
      <div class="cart-page-new__items">
        <div v-for="item in state.products" :key="item.id" class="cart-page-new__items__list">
          <img :src="item.image" :alt="item.name" class="cart-page-new__items__list__img" />
          <div class="cart-page-new__items__list__detalies">
            <div class="cart-page-new__items__list__detalies__name">{{ item.name }}</div>
            <div class="cart-page-new__items__list__detalies__price">${{ item.price }}</div>
            <mainButton @click="removeCard(item)" title="X" :type="ButtonType.ICON" />
          </div>
        </div>
      </div>
      <div class="cart-page-new__total">
        <div class="cart-page-new__total__summary">
          Total: <span id="totalPrice">{{ totalPrice }}</span>
        </div>
        <mainButton v-if="isAuth" class="cart-page-new__total__button" @click="createOrder" title="Оформить заказ" />
        <mainButton v-else class="cart-page-new__total__button" @click="redirectToLogin" title="Войти" />
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { reactive, computed, watch, onMounted } from 'vue' // +computed
import { type IProduct } from '@/types/Product'
import { ButtonType } from '@/components/ui/ui-types'
import mainButton from '@/components/ui/main-button.vue'
import useCartService from '@/service/cart-service-api'
import useUserStore from '@/stores/user-store'
import { useRouter } from 'vue-router'
import { RouteNames } from '@/types/Route-names'
interface IState {
  isLoading: boolean
  products: IProduct[]
}

const state = reactive<IState>({
  isLoading: false,
  products: [],
})
const router = useRouter()
const userStore = useUserStore()
const user = computed(() => userStore.user)
const cartId = computed(() => user.value?.cartId)
const isEmpty = computed(() => state.products.length === 0)
const cartService = computed(() => useCartService(cartId.value || 0))
const isAuth = computed(() => userStore.isAuth)

const totalPrice = computed(() => {
  return state.products
    .reduce((total: number, item: IProduct) => total + (item.price || 0), 0)
    .toFixed(2)
})

async function removeCard(product: IProduct) {
  state.isLoading = true
  try {
    const cart = await cartService.value.removeFromCart(product)

    state.products = cart
  } catch (error) {
    console.error('Ошибка при удалении товара:', error)
  } finally {
    state.isLoading = false
  }
}

function createOrder() {}

function redirectToLogin() {
  router.push({ name: RouteNames.Login })
}

async function getCartData() {
  state.isLoading = true
  try {
    if (cartId.value) {
      const cartData = await cartService.value.getCart()
      state.products = cartData.products
    } else {
      console.error('Корзина не найдена')
    }
  } catch (error) {
    console.error('Ошибка при загрузке корзины:', error)
  } finally {
    state.isLoading = false

  }
}

onMounted(async () => {
  getCartData()
})

watch(
  () => cartId.value,
  () => {
    getCartData()
  },
  {
    immediate: true,
  },
)
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
  &__wrapper {
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }
  &__items {
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    &__list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 20px;
      box-shadow: 0 0 50px rgba(234, 225, 225, 0.38);

      &__img {
        width: 200px;
      }
      &__detalies {
        display: flex;
        justify-content: space-around;

        width: 800px;
        font-size: 24px;
        color: $text-dark;

        &__name {
          font-weight: bold;
          align-items: center;
        }
        &__price {
          color: #007bff;
          align-items: right;
        }
      }
    }
  }
  &__total {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    padding: 20px;
    width: 500px;
    height: auto;
    min-height: 50px;
    border-radius: 20px;
    box-shadow: 0 0 50px rgba(149, 136, 136, 0.38);

    font-size: 24px;
    color: $text-dark;
    &__button {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &__button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 30px;
  }
}
</style>
