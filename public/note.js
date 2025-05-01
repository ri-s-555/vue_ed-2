{/* <style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 76%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  &_content {
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    width: 500px;
    position: relative;
    background: rgb(0 140 255 / 60%);
    &_close {
      position: absolute;
      top: 10px;
      right: 30px;
      font-size: 20px;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
    &_login-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      &__title {
        font-size: 30px;
        color: #000000;

      }
      &__input {
        width: 80%;
        padding: 12px;
        border: 1px solid rgba(204, 204, 204, 0.269);
        border-radius: 10px;
        font-size: 16px;
      }
      &__button {
        width: 20%;
        padding: 12px;
        border: 1px solid rgba(204, 204, 204, 0.269);
        border-radius: 10px;
        font-size: 16px;
        }
        &__success {
          font-size: 30px;
          color: #000000;
        }
    }
    &_cart-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      &__success {
        font-size: 26px;
        color: #000000;
      }
    }
  }
}

</style>




<!-- <button class="items-added-button">
<div>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.25002 7.25V7.13012C7.25002 4.96238 8.71763 3.06964 10.8171 2.52979C11.5931 2.33024 12.407 2.33024 13.183 2.52979C15.2824 3.06964 16.75 4.96238 16.75 7.13013V7.25H18.2511C18.8224 7.25 19.3073 7.66898 19.3901 8.23423L19.6088 9.72668C20.0393 12.6651 20.0393 15.6507 19.6088 18.5891C19.4008 20.0081 18.2565 21.1052 16.83 21.2531L16.2011 21.3183C13.4079 21.608 10.5921 21.608 7.79888 21.3183L7.17001 21.2531C5.74347 21.1052 4.59918 20.0081 4.39127 18.5891C3.96072 15.6507 3.96072 12.6651 4.39127 9.72668L4.60994 8.23423C4.69276 7.66898 5.17761 7.25 5.74889 7.25H7.25002ZM11.1906 3.98252C11.7216 3.84599 12.2784 3.84599 12.8094 3.98252C14.2459 4.3519 15.25 5.64693 15.25 7.13013V7.25H8.75002V7.13012C8.75002 5.64693 9.75417 4.3519 11.1906 3.98252ZM7.25002 8.75V11C7.25002 11.4142 7.5858 11.75 8.00002 11.75C8.41423 11.75 8.75002 11.4142 8.75002 11V8.75H15.25V11C15.25 11.4142 15.5858 11.75 16 11.75C16.4142 11.75 16.75 11.4142 16.75 11V8.75H17.9496L18.1246 9.94414C18.534 12.7384 18.534 15.5774 18.1246 18.3717C18.0162 19.1118 17.4193 19.684 16.6753 19.7611L16.0464 19.8264C13.356 20.1054 10.644 20.1054 7.95361 19.8264L7.32474 19.7611C6.5807 19.684 5.98386 19.1118 5.87542 18.3717C5.46601 15.5774 5.46601 12.7384 5.87542 9.94414L6.05039 8.75H7.25002Z"
      fill="var(--primary-color)"
    />
  </svg>
</div>
<div class="items-added-button-text">0 Items Added</div>
</button> -->

<!-- <button class="login-button"> */}


// список основных страниц, которые обычно присутствуют в интернет-магазинах:

// 1. Главная страница (Home Page)
// Описание: Основная страница, на которую попадают пользователи при входе на сайт. Обычно содержит обзор товаров, акции, новинки и другие важные разделы.
// Пример пути: /
// 2. Страница категорий (Category Page)
// Описание: Страница, на которой отображаются товары, отфильтрованные по категориям (например, одежда, электроника, книги и т.д.).
// Пример пути: /category/:categoryName
// 3. Страница товара (Product Page)
// Описание: Страница, на которой отображается подробная информация о конкретном товаре, включая изображения, описание, цену, отзывы и кнопку "Добавить в корзину".
// Пример пути: /product/:id
// 4. Страница корзины (Cart Page)
// Описание: Страница, на которой отображаются товары, добавленные пользователем в корзину, с возможностью изменения количества товаров и перехода к оформлению заказа.
// Пример пути: /cart
// 5. Страница оформления заказа (Checkout Page)
// Описание: Страница, на которой пользователь вводит данные для оформления заказа, включая адрес доставки, способ оплаты и подтверждение заказа.
// Пример пути: /checkout
// 6. Страница входа (Login Page)
// Описание: Страница, на которой пользователь может войти в свой аккаунт, введя имя пользователя и пароль.
// Пример пути: /login
// 7. Страница регистрации (Register Page)
// Описание: Страница, на которой новые пользователи могут зарегистрироваться, создав аккаунт.
// Пример пути: /register
// 8. Страница профиля пользователя (User Profile Page)
// Описание: Страница, на которой пользователь может просматривать и редактировать информацию о своем профиле, включая личные данные, историю заказов и настройки аккаунта.
// Пример пути: /profile
// 9. Страница "О нас" (About Us Page)
// Описание: Страница, на которой представлена информация о компании, ее миссии, истории и команде.
// Пример пути: /about
// 10. Страница контактов (Contact Us Page)
// Описание: Страница, на которой пользователи могут найти контактную информацию компании и форму для отправки сообщений или вопросов.
// Пример пути: /contact
// 11. Страница "Часто задаваемые вопросы" (FAQ Page)
// Описание: Страница, на которой собраны ответы на часто задаваемые вопросы пользователей.
// Пример пути: /faq
// 12. Страница политики конфиденциальности (Privacy Policy Page)
// Описание: Страница, на которой описана политика конфиденциальности компании, включая информацию о том, как собираются, используются и защищаются данные пользователей.
// Пример пути: /privacy-policy
// 13. Страница условий использования (Terms of Service Page)
// Описание: Страница, на которой описаны условия использования сайта и услуг компании.
// Пример пути: /terms-of-service
// 14. Страница ошибки (Error Page)
// Описание: Страница, на которую перенаправляются пользователи в случае ошибки (например, если страница не найдена или требуется аутентификация).
// Пример пути: /:pathMatch(.*)*
// Пример маршрутизатора с дополнительными страницами
import { createRouter, createWebHistory } from 'vue-router';
import mainPage from '@/components/pages/main-page.vue';
import categoryPage from '@/components/pages/category-page.vue';
import productPage from '@/components/pages/product-page.vue';
import cartPage from '@/components/pages/cart-page.vue';
import checkoutPage from '@/components/pages/checkout-page.vue';
import loginPage from '@/components/pages/login-page.vue';
import registerPage from '@/components/pages/register-page.vue';
import profilePage from '@/components/pages/profile-page.vue';
import aboutPage from '@/components/pages/about-page.vue';
import contactPage from '@/components/pages/contact-page.vue';
import faqPage from '@/components/pages/faq-page.vue';
import privacyPolicyPage from '@/components/pages/privacy-policy-page.vue';
import termsOfServicePage from '@/components/pages/terms-of-service-page.vue';
import errorPage from '@/components/pages/error-page.vue';

import { RouteNames } from '@/types/Route-names';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: mainPage,
      name: RouteNames.Main,
      meta: {
        title: 'Main',
      },
    },
    {
      path: '/category/:categoryName',
      component: categoryPage,
      name: RouteNames.Category,
      meta: {
        title: 'Category',
      },
    },
    {
      path: '/product/:id',
      component: productPage,
      name: RouteNames.Product,
      meta: {
        title: 'Product',
      },
    },
    {
      path: '/cart',
      component: cartPage,
      name: RouteNames.Cart,
      meta: {
        title: 'Cart',
        withOutHeader: true,
      },
    },
    {
      path: '/checkout',
      component: checkoutPage,
      name: RouteNames.Checkout,
      meta: {
        title: 'Checkout',
        needAuth: true,
      },
    },
    {
      path: '/login',
      component: loginPage,
      name: RouteNames.Login,
      meta: {
        title: 'Login',
        withOutHeader: true,
      },
    },
    {
      path: '/register',
      component: registerPage,
      name: RouteNames.Register,
      meta: {
        title: 'Register',
        withOutHeader: true,
      },
    },
    {
      path: '/profile',
      component: profilePage,
      name: RouteNames.Profile,
      meta: {
        title: 'Profile',
        needAuth: true,
      },
    },
    {
      path: '/about',
      component: aboutPage,
      name: RouteNames.About,
      meta: {
        title: 'About',
      },
    },
    {
      path: '/contact',
      component: contactPage,
      name: RouteNames.Contact,
      meta: {
        title: 'Contact',
      },
    },
    {
      path: '/faq',
      component: faqPage,
      name: RouteNames.FAQ,
      meta: {
        title: 'FAQ',
      },
    },
    {
      path: '/privacy-policy',
      component: privacyPolicyPage,
      name: RouteNames.PrivacyPolicy,
      meta: {
        title: 'Privacy Policy',
      },
    },
    {
      path: '/terms-of-service',
      component: termsOfServicePage,
      name: RouteNames.TermsOfService,
      meta: {
        title: 'Terms of Service',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: errorPage,
      name: RouteNames.Error,
      meta: {
        title: 'Error',
        withOutHeader: true,
      },
    },
  ],
});

export default router;






// <modalTemplate v-if="state.isShowModal" @close="closeModal" title="Оформление заказа">
// <div class="order-form">
//  <div class="order-items">
//    <div v-for="item in cart" :key="item.id" class="order-item">
//      <!-- <img :src="item.image" :alt="item.name" class="order-item__image" /> -->
//      <span class="order-item__name">{{ item.name }}</span>
//      <span class="order-item__price">${{ item.price }}</span>
//    </div>
//  </div>



// <!-- <div class="order-total">
// Итого: ${{ totalPrice }}
// </div> -->
// </div>


// <template #footer>
// <div class="modal-actions">
// <mainButton @click="confirmOrder" title="Подтвердить" />
// <mainButton @click="closeModal" title="Отмена" :type="ButtonType.OUTLINE" />
// </div>
// </template>

// </modalTemplate>
