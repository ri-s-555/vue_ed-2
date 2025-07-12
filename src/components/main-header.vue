<template>
  <div class="container header">
    <div class="header-logo">
      <router-link :to="RoutePaths.Main"> <span>Shop</span>per </router-link>
    </div>
    <div class="header-buttons">
      <div class="search">
        <input
          class="search-input"
          :value="state.inputValue"
          type="text"
          placeholder="Search Items"
          @input="
            (event) => {
              state.inputValue = (event.target as HTMLInputElement).value
            }
          "
        />

        <button class="search-button">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9935 17.7563L15.0219 13.7847C16.022 12.5177 16.6249 10.9226 16.6249 9.1875C16.6249 5.08638 13.2885 1.75 9.18738 1.75C5.08625 1.75 1.74988 5.08638 1.74988 9.1875C1.74988 13.2886 5.08625 16.625 9.18738 16.625C10.9234 16.625 12.5176 16.023 13.7846 15.022L17.7563 18.9937C17.9269 19.1643 18.1509 19.25 18.3749 19.25C18.5989 19.25 18.8229 19.1643 18.9935 18.9937C19.3356 18.6515 19.3356 18.0985 18.9935 17.7563ZM3.49988 9.1875C3.49988 6.0515 6.05138 3.5 9.18738 3.5C12.3234 3.5 14.8749 6.0515 14.8749 9.1875C14.8749 12.3235 12.3234 14.875 9.18738 14.875C6.05138 14.875 3.49988 12.3235 3.49988 9.1875Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <mainButton title="0 Items Added" :type="ButtonType.INLINE_ROUND" @click="redirectToCart" />

      <mainButton title="Login or Sign Up" :type="ButtonType.FULL_ROUND" @click="redirectToLogin" />
      <!-- @click="openModal" -->
    </div>
  </div>
  <nav class="container menu">
    <ul>
      <li class="features"><router-link :to="RoutePaths.Features">Features</router-link></li>
      <li class="products"><router-link :to="RoutePaths.CategoryList">Products</router-link></li>
      <li class="blog"><router-link :to="RoutePaths.Blog">Blog</router-link></li>
      <li class="about"><router-link :to="RoutePaths.About">About</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import mainButton from '@/components/ui/main-button.vue'
import { ButtonType } from '@/components/ui/ui-types'
import { RoutePaths } from '@/types/Route-names'
import { useRouter } from 'vue-router'


interface IState {
  inputValue: string
}

const state = reactive<IState>({
  inputValue: '',
})
const router = useRouter()
const redirectToLogin = () => {
  router.push({ name: 'Login' })
}
const redirectToCart = () => {
  router.push({ name: 'Cart' })
}
</script>

<style lang="scss">
@use '@/scss/colors' as *;
@use '@/scss/breacpoints' as mixins;

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 38px 85px 20px 85px;

  &-logo {
    width: 172px;
    height: 49px;
    font-size: 40px;
    font-weight: 400;
    font-style: italic;

    span {
      color: $primary-color;
    }
  }
}

.menu {
  ul {
    display: flex;
    justify-content: center;
    gap: 75px;
    padding: 10px 20px;
    height: 81px;
    background: $primary-color;
    font-size: 20px;
    font-weight: 600;
    line-height: 60px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    list-style-type: none;
  }
}

@include mixins.isTablet() {
  header {
    span {
      color: $card-purple;
    }
  }
}

@media (min-width: 720px) and (max-width: 1240px) {
  .menu {
    ul {
      background: $card-blue-3;
    }
  }
}
</style>
