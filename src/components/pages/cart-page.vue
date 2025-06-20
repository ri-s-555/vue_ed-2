<template>
  <div class="cart container">
    <div class="cart__header">
      <h1 class="cart__title">Корзина</h1>
    </div>
    <div v-if="state.isLoading" class="cart__loading">Загрузка...</div>

    <div v-else-if="isEmpty" class="cart__empty">
      <div class="cart__empty__img">
        <img
          src="/img/cat cart.png"
          alt="Empty_cart Image"
          class="cart__empty__img__picture"
        />
      </div>
      <div class="cart__empty__text">
        <div class="cart__empty__text__message">Пока пусто</div>
        <p class="empty-message__text">
          Если у вас были товары в корзине –
          <router-link :to="{ name: RouteNames.Login }">войдите</router-link>
          в профиль или
          <router-link :to="{ name: RouteNames.CategoryList }">добавьте</router-link>
          новые покупки
        </p>
      </div>
    </div>

    <div v-else class="cart__wrapper">
      <div class="cart__items">
        <div v-for="item in state.products" :key="item.id" class="cart__items__list">
          <img :src="item.image" :alt="item.name" class="cart__items__list__img" />
          <div class="cart__items__list__details">
            <div class="cart__items__list__details__name">{{ item.name }}</div>
            <div class="cart__items__list__details__price">${{ item.price }}</div>
            <mainButton @click="removeCard(item)" title="X" :type="ButtonType.ICON" />
          </div>
        </div>
      </div>
      <div class="cart__total">
        <div class="cart__total__summary">
          Total: <span id="totalPrice">{{ totalPrice }}</span>
        </div>
      </div>
      <div class="cart__button">
        <mainButton
          v-if="isAuth"
          class="cart__total__button"
          @click="createOrder"
          title="Оформить заказ"
        />
        <mainButton
          v-else
          class="cart__total__button"
          @click="redirectToLogin"
          title="Войти"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed, watch, onMounted } from 'vue'
import { type IProduct } from '@/types/Product'
import { ButtonType } from '@/components/ui/ui-types'
import mainButton from '@/components/ui/main-button.vue'
import useCartService from '@/service/cart-service-api'
import { useUserStore } from '@/stores/user-store'
import { useRouter } from 'vue-router'
import { RouteNames } from '@/types/Route-names'

/**
 * Интерфейс для состояния компонента
 */
interface IState {
  isLoading: boolean
  products: IProduct[]
}

/**
 * Реактивное состояние компонента
 */
const state = reactive<IState>({
  isLoading: false,
  products: [],
})

/**
 * Инициализация роутера
 */
const router = useRouter()

/**
 * Инициализация хранилища пользователя
 */
const userStore = useUserStore()

/**
 * Вычисление текущего пользователя
 */
const user = computed(() => userStore.user)

/**
 * Вычисление идентификатора корзины пользователя
 */
const cartId = computed(() => user.value?.cartId)

/**
 * Вычисление сервиса корзины
 */
const cartService = computed(() => useCartService())

/**
 * Вычисление статуса аутентификации пользователя
 */
const isAuth = computed(() => userStore.isAuth)

/**
 * Вычисление общей стоимости продуктов в корзине
 */
const totalPrice = computed(() => {
  return state.products
    .reduce((total: number, item: IProduct) => total + (item.price || 0), 0)
    .toFixed(2)
})

/**
 * Проверка на пустоту корзины
 */
const isEmpty = computed(() => state.products.length === 0)

/**
 * Удаление товара из корзины
 * @param {IProduct} product - Товар для удаления
 */
async function removeCard(product: IProduct) {
  state.isLoading = true
  try {
    const service = await cartService.value
    const cart = await service.removeFromCart(product.id)
    state.products = cart.products
  } catch (error) {
    console.error('Ошибка при удалении товара:', error)
  } finally {
    state.isLoading = false
  }
}

/**
 * Создание заказа
 */
function createOrder() {}

/**
 * Перенаправление на страницу входа
 */
function redirectToLogin() {
  router.push({ name: RouteNames.Login })
}

/**
 * Получение данных корзины
 */
async function getCartData() {
  state.isLoading = true
  try {
    if (cartId.value) {
      const service = await cartService.value
      const cartData = await service.getCart()
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

/**
 * Загрузка данных корзины при монтировании компонента
 */
onMounted(async () => {
  getCartData()
})

/**
 * Наблюдение за изменениями идентификатора корзины
 */
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

.cart {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header {
    width: 100%;

    &__title {
      font-size: 24px;
      color: $text-dark;
      text-align: left;
      margin-bottom: 30px;
    }
  }

  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

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

      &__message {
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 1100px;

    &__items {
      width: 100%;
      display: flex;
      flex-direction: column;
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
          height: auto;
          object-fit: contain;
        }

        &__details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 70%;
          font-size: 24px;
          color: $text-dark;

          &__name {
            font-weight: bold;
          }

          &__price {
            color: #007bff;
            text-align: right;
          }
        }
      }
    }

    &__total {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding: 20px;
      font-size: 24px;
      color: $text-dark;

      &__summary {
        text-align: right;
      }
    }

    &__button {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      gap: 30px;
    }
  }
}
</style>



<!-- <style lang="scss" scoped>
@use '@/scss/colors' as *;
@use '@/scss/mixins' as *;

.cart {
  $self: &;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  &__header {
    margin-bottom: 2rem;
  }

  &__title {
    font-size: 2rem;
    color: $text-dark;
    font-weight: 600;
  }

  &__loading {
    text-align: center;
    padding: 2rem;
    font-size: 1.2rem;
    color: $text-light;
  }

  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
    padding: 2rem 0;

    &-img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }

    &-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: $text-dark;
      margin-bottom: 0.5rem;
    }

    &-text {
      font-size: 1.1rem;
      color: $text-light;
      line-height: 1.6;
    }
  }

  &__link {
    color: $primary;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    padding: 0;
    list-style: none;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-2px);
    }

    &-img {
      flex-shrink: 0;
      border-radius: 0.5rem;
      object-fit: cover;
    }

    &-info {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    &-name {
      font-size: 1.2rem;
      font-weight: 500;
      color: $text-dark;
      margin: 0;
    }

    &-price {
      font-size: 1.1rem;
      font-weight: 600;
      color: $primary;
    }

    &-remove {
      flex-shrink: 0;
    }
  }

  &__footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.5rem;
    width: 100%;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid $border-color;
  }

  &__total {
    font-size: 1.3rem;
    color: $text-dark;

    &-sum {
      font-weight: 600;
      color: $primary;
    }
  }

  &__checkout,
  &__login {
    width: 100%;
    max-width: 300px;
  }

  @include mobile {
    &__item {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;

      &-img {
        width: 100%;
        height: auto;
      }
    }

    &__footer {
      align-items: stretch;
    }
  }
}
</style> -->

