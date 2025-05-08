<template>
  <div class="card-page container" v-if="product">
    <div class="card-page__router">{{ routePath }}</div>
    <div class="card-page__header">{{ product.name || 'Название отсутствует' }}</div>
    <div class="card-page__sticker-card">
      <div class="card-page__sticker-card__img">
        <img
          :src="product.image"
          :alt="product.name"
          class="card-page__sticker-card__img__product"
        />
      </div>
      <div class="card-page__sticker-card__descr">
        <div class="card-page__sticker-card__descr__details">
          <div class="card-page__sticker-card__descr__details__name-full">
            {{ product.fullName || '' }}
          </div>
          <div class="card-page__sticker-card__descr__details__info">
            <div class="card-page__sticker-card__descr__brand" v-if="product.brand">
              {{ product.brand }}
            </div>
            <div class="card-page__sticker-card__descr__model" v-if="product.model">
              {{ product.model }}
            </div>
          </div>
          <div class="card-page__sticker-card__descr__details__description" v-if="product.description">
            {{ product.description }}
          </div>
          <div class="card-page__sticker-card__descr__details__cart">
            <div class="card-page__sticker-card__descr__details__cart__price" v-if="product.price">Price: ${{ product.price }}</div>
              <div class="card-page__layer__descr__details__delivery">Delivery: {{ product.deliveryAvailable ? 'Yes' : 'No' }}</div>
            <mainButton @click="addToCart" title="Buy Now" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <Modal v-if="showModal" title="Added to cart" @close="showModal = false">
      <p>The product has been successfully added to your cart!</p>
    </Modal> -->

  <div v-else class="card-page container">
    <div class="card-page__header">Product not found</div>
    <img src="/img/cat cart.png" alt="Not found" class="not-found-image" />
    <div class="card-page__footer">
      Try searching <router-link :to="`${RoutePaths.CategoryList}`">here</router-link>

    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
// import { MOCK_PRODUCTS } from '@/mock/data/mock-products'
import { type IProduct } from '@/types/Product'
import mainButton from '@/components/ui/main-button.vue'
// import Modal from '@/components/ui/modal-template.vue';
import { RoutePaths } from '@/types/Route-names'
// import { addToCart } from '@/service/product-api'

const route = useRoute()
const product = ref<IProduct | null>(null)

onMounted(() => {
  const id = parseInt(route.params.id as string)
  console.log(id)

  if (isNaN(id)) {
    console.log('Некорректный ID')
    return
  }

  // product.value = MOCK_PRODUCTS.find((p) => p.id === id) || null

  if (!product.value) {
    console.log('Продукт не найден')
  }
})

///
const routePath = computed(() => route.path)
// const routePath = computed(() => { return route.path;});

function addToCart() {
  if (product.value) {
    console.log('Товар добавлен в корзину:', product.value.name)
  }
}
// const showModal = ref(false);

// const router = useRouter()
// const redirectToCategory = () => {
//   router.push({ name: 'Category' });
// };
</script>

<style lang="scss">
@use '@/scss/colors' as *;
.card-page {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: $white;

  &__router {
    width: 1330px;
    background: rgba($color: #9dd37b, $alpha: 1);
    text-align: left;
    font-size: 24px;
    visibility: hidden; // скрытая строка
  }
  &__header {
    width: 1330px;
    height: 54px;
    font-size: 44px;
    font-weight: 600;
    line-height: 53.64px;
    text-align: center;
    color: $black;
    margin-top: 20px;
    margin-bottom: 15px;
  }
  &__sticker-card {
    width: 1330px;
    height: auto;
    border-radius: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: $second-color;
    margin-bottom: 20px;

    &__img {
      // background: rgba($color: #7ba0d3, $alpha: 1);
      width: 430px;
      height: 500px;
      border-radius: 50%;
      // background: $white;
      // background-color: rgba($white, 0.9); // Прозрачность 80%
      margin: 15px;

      display: flex;
      justify-content: center;
      align-items: center;

      &__product {
        width: 300px;
        height: auto;
        border-radius: 40px;
      }
    }
    &__descr {
      display: flex;
      flex-direction: column;
      width: 800px;
      height: 420px;
      // padding: 45px;
      margin: 30px;
      border-radius: 40px;
      // background-color: rgba($white, 0.6);
      box-shadow: 0 0 50px rgba(234, 225, 225, 0.38);

      &__details {
        display: flex;
        flex-direction: column;
        // align-items: center;
        gap: 10px;
        margin: 20px;
        font-size: 22px;
        &__info {
          width: 800px;
          display: flex;
          justify-content: space-evenly;
        }
        &__cart {
          width: 800px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          &__price {
            font-size: 25px;
            font-weight: 600;
          }
        }
      }

      &__button {
        display: flex;
        justify-content: space-around;
        gap: 20px;
        margin-bottom: 10px;
      }
    }
  }
}

// .card-page {
//   background: #fff;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   position: relative;
//   background: $second-color;

//   &__header {
//     width: 465px;
//     height: 54px;
//     font-size: 44px;
//     font-weight: 600;
//     line-height: 53.64px;
//     text-align: center;
//     color: $black;
//     margin-top: 20px;
//     margin-bottom: 15px;
//   }
//   &__router {

//     background: rgba($color: #9dd37b, $alpha: 1.0) ;
//     text-align: left;
//     font-size: 24px;
//   }
//   &__layer {
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     background: rgba($color: #9dd37b, $alpha: 1.0) ;
//     &__img {
//       background: rgba($color: #7ba0d3, $alpha: 1.0) ;
//       width: 300px

//     }
//     &__descr {
//       display: flex;
//       flex-direction: column;
//       width: 650px;
//       padding: 30px;

//       &__details {
//         display: flex;
//         flex-direction: column;
//         background: rgba($color: #d37bc6, $alpha: 1.0) ;
//         padding: 15px, 15px, 20px, 50px;
//       }
//     }
//   }
// }
</style>
