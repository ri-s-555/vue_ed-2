<template>
  <div class="card-page container" v-if="product">
    <div class="card-page__header">{{ product.name || 'Название отсутствует' }}</div>
    <div class="card-page__router">
      <div>{{ routePath }}</div>
    </div>
    <div class="card-page__layer">
      <div class="card-page__layer__img">
        <img :src="product.image" :alt="product.name" class="card-page__layer__img__product" />
      </div>
      <div class="card-page__layer__descr">
        <div class="card-page__layer__descr__details">
          <div class="card-page__layer__descr__name">{{ product.name }}</div>
          <div class="card-page__layer__descr__brand" v-if="product.brand">{{ product.brand }}</div>
          <div class="card-page__layer__descr__model" v-if="product.model">{{ product.model }}</div>
          <div class="card-page__layer__descr__description" v-if="product.description">{{ product.description }}</div>
          <div class="card-page__layer__descr__price" v-if="product.price">${{ product.price }}</div>
          <div class="card-page__layer__descr__delivery">
            Доставка: {{ product.deliveryAvailable ? 'Доступна' : 'Недоступна' }}
          </div>
        </div>
        <mainButton @click="addToCart" title="Buy Now" />
      </div>
    </div>
  </div>



  <div v-else class="card-page container">
    <div class="card-page__header">Товар не найден</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { MOCK_PRODUCTS } from '@/mock/data/mock-products';
import { type IProduct } from '@/types/product';
import mainButton from '@/components/ui/main-button.vue';

const route = useRoute();
const product = ref<IProduct | null>(null);

onMounted(() => {
  const id = parseInt(route.params.id as string);
  console.log(id)


  if (isNaN(id)) {
    console.log('Некорректный ID');
    return;
  }

  product.value = MOCK_PRODUCTS.find(p => p.id === id) || null;

  if (!product.value) {
    console.log('Продукт не найден');
  }
});






///
const routePath = computed(() => route.path);
// const routePath = computed(() => { return route.path;});

function addToCart() {
  if (product.value) {
    console.log('Товар добавлен в корзину:', product.value.name);
  }
}

</script>

<style lang="scss">
@use '@/scss/colors' as *;
.card-page {
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: $second-color;

  &__header {
    width: 465px;
    height: 54px;
    font-size: 44px;
    font-weight: 600;
    line-height: 53.64px;
    text-align: center;
    color: $black;
    margin-top: 20px;
    margin-bottom: 15px;
  }
  &__router {

    background: rgba($color: #9dd37b, $alpha: 1.0) ;
    text-align: left;
    font-size: 24px;
  }
  &__layer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: rgba($color: #9dd37b, $alpha: 1.0) ;
    &__img {
      background: rgba($color: #7ba0d3, $alpha: 1.0) ;
      width: 300px

    }
    &__descr {
      display: flex;
      flex-direction: column;
      width: 650px;
      padding: 30px;

      &__details {
        display: flex;
        flex-direction: column;
        background: rgba($color: #d37bc6, $alpha: 1.0) ;
        padding: 15px, 15px, 20px, 50px;
      }
    }
  }
}
</style>
