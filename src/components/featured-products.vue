<template>
  <div class="container featured-products">
    <div class="featured-products-sticker">
      <h2 class="featured-products-sticker_header">{{ product.title }}</h2>
      <div class="featured-products-sticker_img">
        <img
          v-for="(image, index) in images"
          :key="index"
          :class="['featured-products-sticker_img-img', { 'pos-rel-top': image.isPosRelTop }]"
          :src="image.src"
          :alt="image.alt"
        />
      </div>
      <div class="featured-products-sticker_price">
        <div class="featured-products-sticker_price-header">Price:</div>
        <div class="featured-products-sticker_price-value">${{ product.price }}</div>
      </div>
    </div>
    <div class="featured-products-descr">
      <div class="featured-products-descr_text">
        <h1 class="featured-products-descr_text_h">Our Featured Products</h1>
        <p class="featured-products-descr_text_p">
          Lorem ipsum is a placeholder text commonly <br />used to demonstrate the visual form of a
          product
        </p>
      </div>
      <div class="featured-products-descr_button">
        <button class="button-add-to-card" @click="addToCart">Add to cart</button>
        <button class="button-more" @click="viewMore">View more</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const product = ref({
  title: 'Apple wireless Airpod',
  price: '45.99',
  description:
    'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a product',
})

const images = ref([
  { src: '../../public/img/Featured_Products_1.png', alt: 'featured-products_1' },
  {
    src: '../../public/img/Featured_Products_2.png',
    alt: 'featured-products_2',
    isPosRelTop: true,
  },
  { src: '../../public/img/Featured_Products_3.png', alt: 'featured-products_3' },
])

function addToCart() {
  alert(`Added ${product.value.title} to cart`)
}

function viewMore() {
  alert('Viewing more products...')
}
</script>

<style lang="scss">
@use '../scss/colors' as *;

.featured-products {
  background: rgba(132, 94, 194, 1);
  display: flex;
  justify-content: space-around;
  &-sticker {
    width: 900px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    &_header {
      margin-top: 73px;
      margin-bottom: 70px;
      font-family: Montserrat;
      font-size: 64px;
      font-weight: 600;
      line-height: 73.14px;
      text-align: left;
      color: transparent;
      -webkit-text-stroke: 1px white;

      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    }
    &_img {
      display: flex;
      &-img {
        width: 222px;
        height: 393px;
        border-radius: 135px;
        margin: 17px;
      }
      .pos-rel-top {
        position: relative;
        bottom: 70px;
      }
    }
    &_price {
      display: flex;
      margin-top: 20px;
      margin-bottom: 45px;
      gap: 20px;
      &-header {
        font-size: 31px;
        font-weight: 400;
        line-height: 35px;
        text-align: left;
        color: rgba(255, 255, 255, 1);
      }
      &-value {
        font-size: 31px;
        font-weight: 600;
        line-height: 37.79px;
        text-align: left;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  &-descr {
    display: flex;
    flex-direction: column;

    margin-top: 146px;
    margin-left: 33px;
    &_text_h {
      width: 559.39px;
      height: 54px;

      font-size: 44px;
      font-weight: 600;
      line-height: 53.64px;
      text-align: left;

      color: rgba(255, 255, 255, 1);
    }
    &_text_p {
      width: 500.35px;

      font-size: 21px;
      font-weight: 500;
      line-height: 35px;
      text-align: left;
      color: rgba(255, 255, 255, 1);

      margin-top: 10px;
      margin-bottom: 35px;
    }
  }
}
</style>
