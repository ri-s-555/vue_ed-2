<template>
  <div class="card">
    <div @click="clickCard" :class="['card__pick']" :style="{ backgroundColor: props.product.color }">
      <div class="card__pick__img">
        <img :src="props.product.image" :alt="product.name" class="card__pick__img__product" />
        <div v-if="product.save" :class="['card__pick__img__save', props.product.colorSave]">
          Save ${{ props.product.save }}
        </div>
      </div>
      <div class="card__pick__descr">
        <div class="card__pick__descr__name">
          {{ props.product.name }}
        </div>
        <div class="card__pick__descr__reviews">
          <div class="card__pick__descr__reviews__svg">
            <svg
              v-for="index in Math.round(props.product.rating || 0)"
              :key="index"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z"
                fill="#C00C00"
              ></path>
            </svg>
          </div>
          <div class="card__pick__descr__reviews__text">{{ props.product.review }} reviews</div>
        </div>
        <div class="card__pick__descr__price">${{ props.product.price }}</div>
      </div>
    </div>

    <mainButton @click="handleAddToCart" title="Buy Now"/>

    <modalTemplate v-if="state.isShowModal" @close="closeModal">
        Add to cart
    <template v-if="false" #footer>123</template>
    </modalTemplate>
  </div>
</template>

<script lang="ts" setup>
import { type IProduct } from '@/types/Product'
import modalTemplate from '@/components/ui/modal-template.vue'
import mainButton from '@/components/ui/main-button.vue'
import { reactive, onMounted } from 'vue'
import useCartService from '@/service/cart-service-api'
// import {useUserStore} from "@/stores/user-store"

interface IState {
  isShowModal: boolean
}

interface IEmits {
    (e: 'clickCard', product: IProduct): void
}

const emit = defineEmits<IEmits>()

const props = defineProps<{
  product: IProduct
}>()

const state = reactive<IState>({
  isShowModal: false
})

// const { user } = useUserStore()
// const { addToCart } = useCartService(user?.cartId)
let addToCart: (productId: number) => Promise<void>;

function clickCard() {
  emit('clickCard', props.product)
}

async function handleAddToCart() {
  try {
    await addToCart(props.product.id)
    state.isShowModal = true
  } catch (error) {
    console.error('Ошибка при добавлении в корзину:', error)
  }
}

onMounted(async () => {
  const { addToCart: addToCartService } = await useCartService();
  addToCart = addToCartService;
});


function closeModal(){
  state.isShowModal = false
}
</script>

<style lang="scss">
@use '@/scss/colors' as *;
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;


      &__pick {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 361px;
        height: 438px;
        border-radius: 25px;


        &__img {
          position: relative;

          &__product {
            width: 196px;
            height: 196px;
            margin-top: 30px;
          }

          &__save {
            font-size: 18px;
            font-weight: 600;
            line-height: 21.94px;
            text-align: center;
            color: rgba(255, 255, 255, 1);

            width: 100px;
            height: 100px;
            padding-top: 25px;
            border-radius: 50px;
            position: absolute;
            top: 20px;
            left: 160px;
          }
        }

        &__descr {
          display: flex;
          flex-direction: column;
          width: 319px;
          height: 164px;
          border-radius: 25px;
          background: rgba(255, 255, 255, 1);
          padding: 31px 76px 30px 52px;

          &__name {
            font-size: 21px;
            font-weight: 500;
            line-height: 35px;
            text-align: left;
            color: rgba(43, 38, 38, 1);
          }

          &__reviews {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-top: 5px;

            &__svg {
              display: flex;
            }

            &__text {
              font-size: 11px;
              font-weight: 500;
              line-height: 35px;
              text-align: left;
              color: rgb(46, 20, 164);
            }
          }

          &__price {
            font-size: 21px;
            font-weight: 600;
            line-height: 25.6px;
            text-align: left;
            color: rgba(43, 38, 38, 1);
          }
        }
      }
    }
    .button_add {
       width: 361px;
       height: 70px;
       border-radius: 10px;
       background: $primary-color;
       font-size: 21px;
       font-weight: 600;
       line-height: 25.6px;
       text-align: center;
       color: rgba(255, 255, 255, 1);
       margin-top: 29px;
       border-color: rgba(0, 0, 0, 0);
    }
</style>
