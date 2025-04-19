<template>
  <div class="cart-page container">


    <div class="cart-page-new">
      <div class="cart-page-new__header">
        <div class="cart-page-new__title-wrapper">
          <h1 class="cart-page-new__title">Корзина</h1>
          <!--v-if-->
        </div>
      </div>
      <!--v-if-->
      <div class="empty-message flat-shadow">
        <div class="empty-message__cart-image">

        </div><div class="empty-message__text-wrapper">
          <div class="empty-message__title-empty-cart"
          data-gtm-vis-recent-on-screen32166084_2234="117"
          data-gtm-vis-first-on-screen32166084_2234="117"
          data-gtm-vis-total-visible-time32166084_2234="100"
          data-gtm-vis-has-fired32166084_2234="1">
            Пока пусто
          </div>
          <p class="empty-message__text">Воспользуйтесь <a href="/catalog">каталогом</a> или поиском<br>
            Если у вас были товары в корзине – <a id="loginLink">войдите</a> в профиль</p>
        </div>
      </div>
      <div class="recently-view-cart">
        <!--v-if-->
      </div>
      <!--v-if-->
    </div>





  </div>
</template>

<script lang="ts" setu>
export default {
  name: 'CartPage'
}
</script>

<style scoped>
/* Стили компонента */
</style>
