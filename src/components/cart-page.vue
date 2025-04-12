<template>
  <div class="page-product container">
    <div class="page-product__wrapper">
      <h2 class="page-product__wrapper__name-product">{{ productInPage.name }}</h2>
      <div class="page-product__wrapper__descr-product">
        <div class="page-product__wrapper__descr-product__img">
          <img
            :src="productInPage.image"
            :alt="productInPage.name"
            class="page-product__wrapper__descr-product__img__image"
          />
        </div>
        <div class="page-product__wrapper__descr-product__text">
          <div class="page-product__wrapper__descr-product__text__about">
            <p class="page-product__wrapper__descr-product__text__description">{{ productInPage.description }}</p>
            <p class="page-product__wrapper__descr-product__text__brand">Brand: {{ productInPage.brand }}</p>
            <p class="page-product__wrapper__descr-product__text__model">Model: {{ productInPage.model }}</p>
            <p class="page-product__wrapper__descr-product__text__release">Release Date: {{ productInPage.releaseDate }}</p>
            <p class="page-product__wrapper__descr-product__text__delivery">Delivery Available: {{ productInPage.deliveryAvailable ? 'Delivery is possible' : 'Delivery is not possible' }}</p>
            <div class="page-product__wrapper__descr-product__text__price">
              <div class="page-product__wrapper__descr-product__text__price__header">Price:</div>
              <div class="page-product__wrapper__descr-product__text__price__value">${{ productInPage.price }}</div>
            </div>
          </div>
          <div class="page-product__wrapper__descr-product__button">
            <mainButton @click="addToCart" title="Add to cart"/>
            <mainButton @click="viewMore" title="View more" :type="ButtonType.OUTLINE"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { type IProduct_in_page } from '@/types/Product_in_page';
import { CARTS_IN_PAGE } from '@/mock/data/mock-products_in_page';
import mainButton from '@/components/ui/main-button.vue';
import { ButtonType } from '@/components/ui/ui-types';

const productInPage = ref<IProduct_in_page>(CARTS_IN_PAGE[0]);

const isShowModal = ref(false);

function addToCart() {
  isShowModal.value = true;
  console.log('addToCart', isShowModal.value);
}

// function closeModal() {
//   isShowModal.value = false;
//   console.log('closeModal', isShowModal.value);
// }

function viewMore() {
  console.log('Viewing more products...');
}
</script>


<style lang="scss">
@use '@/scss/colors' as *;

.page-product {
  background: rgba(132, 94, 194, 1);
  display: flex;
  justify-content: space-around;
  position: relative;

  &__wrapper {
    display: flex;
    flex-direction: column;

    &__name-product {
      font-size: 60px;
      font-weight: 600;
      line-height: 73.64px;
      text-align: center;
      color: rgba(255, 255, 255, 1);
      margin-top: 73px;
    }
    &__descr-product {
    display: flex;
    &__img {
      display: flex;
      justify-content: center;


      &__image {
        width: 240px;
        height: auto;
        border-radius: 135px;
        margin-left: 15px;
        margin-bottom: 15px;
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 40px;
      width: 730px;

      &__price {
        display: flex;
        gap: 20px;
        // margin-bottom: 24px;

        &__header {
          font-size: 31px;
          font-weight: 400;
          line-height: 35px;
          color: rgba(255, 255, 255, 1);
        }

        &__value {
          font-size: 31px;
          font-weight: 600;
          line-height: 37.79px;
          color: rgba(255, 255, 255, 1);
        }
      }

      &__name {
        font-size: 44px;
        font-weight: 600;
        line-height: 53.64px;
        color: rgba(255, 255, 255, 1);
        // margin-bottom: 10px;
      }

      &__description {
        font-size: 21px;
        font-weight: 500;
        line-height: 35px;
        color: rgba(255, 255, 255, 1);
        // margin-bottom: 35px;
      }

      &__brand,
      &__model,
      &__release,
      &__delivery {
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        color: rgba(255, 255, 255, 1);
        margin-top: 5px;
      }
    }
    &__button {
      display: flex;
      margin-bottom: 20px;

    }

  }
  }
}
</style>
