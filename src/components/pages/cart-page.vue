<template>
  <div class="cart-page-new container">
    <div class="cart-page-new__header">
      <h1 class="cart-page-new__title">Корзина</h1>
    </div>
    <div v-if="state.product.length === 0" class="cart-page-new__empty">
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
    <div v-else class="cart-page-new__items">
      <!-- <mainButton @click="clearCart" title="Очистить корзину"/> -->

      <div v-for="item in state.product" :key="item.id" class="cart-page-new__items__list">
        <img :src="item.image" :alt="item.name" class="cart-page-new__items__list__img" />
        <div class="cart-page-new__items__list__detalies">
          <div class="cart-page-new__items__list__detalies__name">{{ item.name }}</div>
          <div class="cart-page-new__items__list__detalies__price">${{ item.price }}</div>
          <mainButton @click="removeCard(item.id)" title="X" :type="ButtonType.ICON"/>
        </div>
      </div>
      <div class="cart-page-new__total">
      <div class="cart-page-new__total__summary">Total: <span id="totalPrice">{{ totalPrice }}</span></div>
    </div>
    <div class="cart-page-new__button">
      <mainButton @click="redirectToCategory" title="Продолжить покупки" />
      <mainButton @click="placingAnOrder" title="Оформить заказ" />
    </div>
    </div>
  </div>

  <modalTemplate v-if="state.isShowModal" @close="closeModal" title="Оформление заказа">
    <div class="order-form">
      <div class="order-items">
        <div v-for="item in state.product" :key="item.id" class="order-item">
          <!-- <img :src="item.image" :alt="item.name" class="order-item__image" /> -->
          <span class="order-item__name">{{ item.name }}</span>
          <!-- <span class="order-item__price">${{ item.price }}</span> -->
        </div>
      </div>
      <!-- <div class="order-total">Итого: ${{ totalPrice }}</div> -->
    </div>
    <!-- <template #footer>
      <div class="modal-actions">
        <mainButton @click="confirmOrder" title="Подтвердить" />
        <mainButton @click="closeModal" title="Отмена" :type="ButtonType.OUTLINE" />
      </div>
    </template> -->
  </modalTemplate>
</template>

<script lang="ts" setup>
import { onMounted, reactive, computed } from 'vue' // +computed
import { type IProduct } from '@/types/Product'
import modalTemplate from '@/components/ui/modal-template.vue'
import {ButtonType} from '@/components/ui/ui-types'
import mainButton from '@/components/ui/main-button.vue'
import { useRouter } from 'vue-router'
import { getCart, removeFromCart } from '@/service/product-api'

interface IState {
  isShowModal: boolean;
  product: IProduct[],
}

const state = reactive<IState>({
  isShowModal: false,
  product: [],
})

const totalPrice = computed(() => {
  return state.product.reduce((total: number, item: IProduct) => total + (item.price || 0), 0).toFixed(2)
})

async function removeCard(id: number) {
  try {
    const cart = await removeFromCart(id)
    console.log(cart)
    state.product = cart
  } catch (error) {
    console.error('Ошибка при удалении товара:', error)
  }
}

const router = useRouter()
const redirectToCategory = () => {
  router.push({ name: 'CategoryList' })
}

function placingAnOrder() {
  try {
    state.isShowModal = true
  } catch (error) {
    console.error('ошибка. случилось это:', error)
  }
}

function closeModal() {
  state.isShowModal = false
console.log('closeModal',state.isShowModal)
}

onMounted(async () => {
  try {
    const cartData = await getCart()
    state.product = cartData
    console.log(cartData)
  } catch (error) {
    console.error('Ошибка при загрузке корзины:', error)
  }
})
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

  &__items {
    margin-top: 20px;
    width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &__list {
      width: 1100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
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
    display: grid;
    place-items: center;
    width: 1100px;
    height: 50px;
    border-radius: 20px;
    box-shadow: 0 0 50px rgba(149, 136, 136, 0.38);
    margin-bottom: 30px;

    font-size: 24px;
      color: $text-dark;
      text-align: right; // yt ghbvtyztnccz
  }
  &__button {
    width: 1100px;
    display: flex;
    justify-content: flex-end;
    gap: 30px;
  }
}
</style>
