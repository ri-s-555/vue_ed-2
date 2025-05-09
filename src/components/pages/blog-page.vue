<template>
  <div class="container new-launches">
    <div class="new-launches__sticker">
      <img
        :class="['new-launches__sticker__img', { 'pos-rel-top': index === currentImageIndex }]"
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
      />
    </div>
    <div class="new-launches__descr">
      <div class="new-launches__descr__text">
        <h1 class="new-launches__descr__text__h">{{ product.title }}</h1>
        <p class="new-launches__descr__text__p">
          {{ product.description }}
          <span v-if="!showFullDescription"
            >... <a @click="showFullDescription = true">Read More</a></span
          >
          <span v-else>{{ product.extendedDescription }}</span>
        </p>
      </div>
      <div class="new-launches__descr__price">
        <div class="new-launches__descr__price__header">Price:</div>
        <div class="new-launches__descr__price__value">${{ product.price }}</div>
      </div>
      <div class="new-launches__descr__option-color">
        <svg
          v-for="(color, index) in colors"
          :key="index"
          :class="[
            { 'new-launches__descr__option-color__y': index === 1 },
            { 'selected-color': selectedColor === index },
          ]"
          width="43"
          height="43"
          viewBox="0 0 43 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="selectColor(index)"
        >
          <circle cx="21.5" cy="21.5" r="21" :fill="color.fill" :stroke="color.stroke || 'none'" />
        </svg>
      </div>
      <div class="new-launches__descr__button">
        <button class="button-add-to-card" @click="addToCart">Add to cart</button>
        <button class="button-more" @click="exploreMore">Explore More</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Данные продукта
const product = {
  title: 'Airdrop 500 Anc',
  description:
    'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a product',
  extendedDescription:
    ' with specific features and benefits. This can be replaced with actual product description.',
  price: '45.99',
}

const images = [
  { src: './img/New Launches_1.png', alt: 'new-launches_1' },
  { src: './img/New Launches_2.png', alt: 'new-launches_2' },
]

const colors = [{ fill: '#111111', stroke: '#FF0000' }, { fill: '#FFF500' }, { fill: '#4484FF' }]

// hеактивные состояния
const showFullDescription = ref(false)
const selectedColor = ref(0)
const currentImageIndex = ref(0)

function selectColor(index: number) {
  selectedColor.value = index
}

function addToCart() {
  alert(`Added ${product.title} in ${colors[selectedColor.value].fill} color to cart`)
}

// function addToCart(){
// state.isShowModal = true
// console.log('addToCart',state.isShowModal)
// }
// function closeModal(){
//   state.isShowModal = false
// console.log('closeModal',state.isShowModal)
// }

function exploreMore() {
  alert('Exploring more products...')
}
</script>

<style lang="scss">
@use '@/scss/colors' as *;

.new-launches {
  background: rgba(132, 94, 194, 1);
  display: flex;
  justify-content: space-around;
  position: relative;

  &__sticker {
    width: 521.36px;
    height: 468px;
    margin-top: 112px;
    margin-bottom: 61px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    position: relative;

    &__img {
      width: 237.79px;
      height: 417px;
      border-radius: 135px;
      margin: 17px;
    }

    &::before {
      content: '';
      position: absolute;
      width: 48px;
      height: 48px;
      left: -50px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='24' fill='%23845EC2'/%3E%3Cpath d='M23.1125 24.0001L27.5375 19.5751C27.7703 19.3409 27.901 19.0241 27.901 18.6939C27.901 18.3636 27.7703 18.0468 27.5375 17.8126C27.4213 17.6955 27.283 17.6025 27.1307 17.539C26.9784 17.4755 26.815 17.4429 26.65 17.4429C26.485 17.4429 26.3216 17.4755 26.1693 17.539C26.017 17.6025 25.8787 17.6955 25.7625 17.8126L20.4625 23.1126C20.3453 23.2288 20.2524 23.3671 20.1889 23.5194C20.1254 23.6717 20.0928 23.8351 20.0928 24.0001C20.0928 24.1651 20.1254 24.3285 20.1889 24.4808C20.2524 24.6332 20.3453 24.7714 20.4625 24.8876L25.7625 30.2501C25.8793 30.366 26.0178 30.4576 26.1701 30.5198C26.3224 30.582 26.4855 30.6136 26.65 30.6126C26.8145 30.6136 26.9776 30.582 27.1299 30.5198C27.2822 30.4576 27.4207 30.366 27.5375 30.2501C27.7703 30.0159 27.901 29.6991 27.901 29.3689C27.901 29.0386 27.7703 28.7218 27.5375 28.4876L23.1125 24.0001Z' fill='white'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      transition: all 0.3s ease;
    }

    &:hover::before {
      transform: translate(-5px, -50%);
      background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='24' fill='%23693699'/%3E%3Cpath d='M23.1125 24.0001L27.5375 19.5751C27.7703 19.3409 27.901 19.0241 27.901 18.6939C27.901 18.3636 27.7703 18.0468 27.5375 17.8126C27.4213 17.6955 27.283 17.6025 27.1307 17.539C26.9784 17.4755 26.815 17.4429 26.65 17.4429C26.485 17.4429 26.3216 17.4755 26.1693 17.539C26.017 17.6025 25.8787 17.6955 25.7625 17.8126L20.4625 23.1126C20.3453 23.2288 20.2524 23.3671 20.1889 23.5194C20.1254 23.6717 20.0928 23.8351 20.0928 24.0001C20.0928 24.1651 20.1254 24.3285 20.1889 24.4808C20.2524 24.6332 20.3453 24.7714 20.4625 24.8876L25.7625 30.2501C25.8793 30.366 26.0178 30.4576 26.1701 30.5198C26.3224 30.582 26.4855 30.6136 26.65 30.6126C26.8145 30.6136 26.9776 30.582 27.1299 30.5198C27.2822 30.4576 27.4207 30.366 27.5375 30.2501C27.7703 30.0159 27.901 29.6991 27.901 29.3689C27.901 29.0386 27.7703 28.7218 27.5375 28.4876L23.1125 24.0001Z' fill='white'/%3E%3C/svg%3E");
    }
  }

  &__descr {
    display: flex;
    flex-direction: column;
    margin-top: 73px;
    margin-left: 85px;

    &__text__h {
      width: 559.39px;
      height: 54px;
      font-size: 60px;
      font-weight: 600;
      line-height: 73.64px;
      text-align: left;
      color: rgba(255, 255, 255, 1);
    }

    &__text__p {
      width: 570px;
      font-size: 21px;
      font-weight: 500;
      line-height: 35px;
      text-align: left;
      color: rgba(255, 255, 255, 1);
      margin-top: 29px;
      margin-bottom: 24px;
    }
    &__price {
      display: flex;
      margin-bottom: 50px;
      gap: 20px;

      &__header {
        font-size: 31px;
        font-weight: 400;
        line-height: 35px;
        text-align: left;
        color: rgba(255, 255, 255, 1);
      }

      &__value {
        font-size: 31px;
        font-weight: 600;
        line-height: 37.79px;
        text-align: left;
        color: rgba(255, 255, 255, 1);
      }
    }

    &__option-color__y {
      margin-left: 31px;
      margin-right: 35px;
    }
    &::after {
      content: '';
      position: absolute;
      width: 48px;
      height: 48px;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='24' transform='matrix(-1 0 0 1 48 0)' fill='%23845EC2'/%3E%3Cpath d='M24.8875 24L20.4625 19.5751C20.2297 19.3409 20.099 19.0241 20.099 18.6939C20.099 18.3636 20.2297 18.0468 20.4625 17.8126C20.5787 17.6955 20.7169 17.6025 20.8693 17.539C21.0216 17.4755 21.185 17.4429 21.35 17.4429C21.515 17.4429 21.6784 17.4755 21.8307 17.539C21.983 17.6025 22.1213 17.6955 22.2375 17.8126L27.5375 23.1126C27.6546 23.2288 27.7476 23.3671 27.8111 23.5194C27.8746 23.6717 27.9072 23.8351 27.9072 24C27.9072 24.1651 27.8746 24.3285 27.8111 24.4808C27.7476 24.6332 27.6546 24.7714 27.5375 24.8876L22.2375 30.25C22.1207 30.366 21.9822 30.4576 21.8299 30.5198C21.6776 30.582 21.5145 30.6136 21.35 30.6126C21.1855 30.6136 21.0224 30.582 20.8701 30.5198C20.7178 30.4576 20.5793 30.366 20.4625 30.25C20.2297 30.0159 20.099 29.6991 20.099 29.3689C20.099 29.0386 20.2297 28.7218 20.4625 28.4876L24.8875 24Z' fill='white'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      transition: all 0.3s ease;
    }

    &:hover::after {
      transform: translate(5px, -50%);
      background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='24' transform='matrix(-1 0 0 1 48 0)' fill='%23693699'/%3E%3Cpath d='M24.8875 24L20.4625 19.5751C20.2297 19.3409 20.099 19.0241 20.099 18.6939C20.099 18.3636 20.2297 18.0468 20.4625 17.8126C20.5787 17.6955 20.7169 17.6025 20.8693 17.539C21.0216 17.4755 21.185 17.4429 21.35 17.4429C21.515 17.4429 21.6784 17.4755 21.8307 17.539C21.983 17.6025 22.1213 17.6955 22.2375 17.8126L27.5375 23.1126C27.6546 23.2288 27.7476 23.3671 27.8111 23.5194C27.8746 23.6717 27.9072 23.8351 27.9072 24C27.9072 24.1651 27.8746 24.3285 27.8111 24.4808C27.7476 24.6332 27.6546 24.7714 27.5375 24.8876L22.2375 30.25C22.1207 30.366 21.9822 30.4576 21.8299 30.5198C21.6776 30.582 21.5145 30.6136 21.35 30.6126C21.1855 30.6136 21.0224 30.582 20.8701 30.5198C20.7178 30.4576 20.5793 30.366 20.4625 30.25C20.2297 30.0159 20.099 29.6991 20.099 29.3689C20.099 29.0386 20.2297 28.7218 20.4625 28.4876L24.8875 24Z' fill='white'/%3E%3C/svg%3E");
    }
  }
}

// .selected-color {
//   transform: scale(1.1);
//   box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
// }
</style>
