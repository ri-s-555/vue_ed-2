<template>
  <div class="container latest-product">
    <div class="latest-product__descr">
      <h1 class="latest-product__descr_title">Discover Our<br />Latest Products</h1>
      <p class="latest-product__descr_text">
        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a product
      </p>
      <mainButton  title="Buy Now"/>
      <div class="latest-product__descr_reviews">
        <div class="latest-product__descr_reviews__img">
          <img
            class="latest-product__descr_reviews__img-img"
            src="/img/Reviews_1.png"
            alt="reviews_1"
          />
          <img
            class="latest-product__descr_reviews__img-img pos-rel-left"
            src="/img/Reviews_2.png"
            alt="reviews_2"
          />
          <img
            class="latest-product__descr_reviews__img-img pos-rel-left"
            src="/img/Reviews_3.png"
            alt="reviews_3"
          />
          <img
            class="latest-product__descr_reviews__img-img pos-rel-left"
            src="/img/Reviews_4.png"
            alt="reviews_4"
          />
        </div>
        <div class="latest-product__descr_reviews__text">15k Well <br />Reviews</div>
      </div>
    </div>
    <div class="latest-product__img">
      <div class="latest-product__img-play-video">
        <img
          class="latest-product__img-play-video-icon"
          src="/img/Play Video.png"
          alt="play-video-img"
        />
        <p class="latest-product__img-play-video-text">Play Video</p>
      </div>
      <div class="latest-product__img-product">
        <svg
          class="star_left"
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.5 0L33.6574 19.3426L53 26.5L33.6574 33.6574L26.5 53L19.3426 33.6574L0 26.5L19.3426 19.3426L26.5 0Z"
            fill="#FFD600"
          />
        </svg>
        <svg
          class="latest-product__img-product-background"
          width="272"
          height="477"
          viewBox="0 0 272 477"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="272" height="477" rx="136" fill="#ECFEF4" />
        </svg>
        <img
          class="latest-product__img-product-product"
          src="/img/product_Red Beats Ml9c2zm:a.png"
          width="270"
          height="299"
          alt="Red Beats Ml9c2zm/a"
        />
        <svg
          class="star_right"
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.5 0L33.6574 19.3426L53 26.5L33.6574 33.6574L26.5 53L19.3426 33.6574L0 26.5L19.3426 19.3426L26.5 0Z"
            fill="#FFD600"
          />
        </svg>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import mainButton from '@/components/ui/main-button.vue';

</script>

<style lang="scss" scoped>

.latest-product {
  display: flex;
  align-content: flex-start;
  &__descr {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 599px;
    margin-left: 85px;
    &_title {
      margin-top: 126px;
      width: 100%;
      font-family: Montserrat;
      font-size: 64px;
      font-weight: 600;
      line-height: 78.02px;
      text-align: left;
      color: rgba(43, 38, 38, 1);
    }
    &_text {
      width: 100%;
      margin-top: 30px;
      font-family: Montserrat;
      font-size: 21px;
      font-weight: 500;
      line-height: 35px;
      text-align: left;
      color: rgba(43, 38, 38, 1);
    }

    &_reviews {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 75px;
      margin-top: 112px;
      &__img {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        &-img {
          width: 60px;
          height: 60px;
          border: 2px solid hsl(0, 0%, 100%);
          border-radius: 50%;
          /* background-image: url('/img/Reviews_1.png'); */

          .pos-rel-left {
            position: absolute;
            left: 20px;
            z-index: 1;
          }
          &:nth-child(2) {
            left: 30px;
            z-index: 2;
          }

          &:nth-child(3) {
            left: 60px;
            z-index: 3;
          }

          &:nth-child(4) {
            left: 90px;
            z-index: 4;
          }

        }
      }
      &__text {
        margin-left: 20px;
        font-size: 26px;
        line-height: 35px;
        color: #000000;
      }
    }
  }
  &__img {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &-play-video {
      display: flex;

      flex-direction: column;
      justify-content: flex-end;
      align-content: center;

      margin: 270px 40px 0 70px;
      &-icon {
        width: 69px;
        height: 69px;

        border: 2px solid rgba(255, 255, 255, 0);
        border-radius: 60px;
      }
      &-text {
        width: 115px;
        height: 35px;
        top: 857px;
        left: 762px;

        font-family: 'Montserrat';
        font-size: 21px;
        font-weight: 500;
        line-height: 35px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;

        color: rgba(43, 38, 38, 1);
      }
    }
    &-product {
      position: relative;

      width: 376px;
      height: 477px;
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 20px;
      margin: 0 70px 0 80px;
      .star_left {
        position: absolute;
        z-index: 3;

        top: -20px;
        left: -54px;
      }
      &-background {
        width: 272px;
        height: 477px;
        position: absolute;

        top: 0;
        left: 0;
        z-index: 1;
      }
      &-product {
        position: absolute;
        top: 90px;
        left: 37%;
        transform: translateX(-50%);
        width: 280px;
        height: auto;
        z-index: 2;
        .star_right {
          position: absolute;
          z-index: 3;

          bottom: -30px;
          right: 40px;
        }
      }
    }
  }
}

</style>
