<template>
  <nav>
    <ul :class="['tab-menu', menuClass]">
      <li v-for="(tab, index) in tabs" :key="index">
        <button
          :class="['tab-menu__button', { 'tab-menu__button-active': index === activeTabIndex }]"
          @click="switchTab(index)"
        >
          {{ tab }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  tabs: string[]
  menuClass?: string
  initialTab?: number
}>()

const activeTabIndex = ref(props.initialTab || 0)

const emit = defineEmits<{
  (e: 'tab-switched', index: number): void
}>()

function switchTab(index: number) {
  activeTabIndex.value = index
  emit('tab-switched', index)
}
</script>

<style lang="scss">
@use '@/scss/colors' as *;

.tab-menu {
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  gap: 20px;
  &__button {
    width: 177px;
    height: 91px;

    border-radius: 50%;
    background: rgb(255, 255, 255);

    text-align: center;
    color: rgba(0, 0, 0, 1);

    border-color: transparent;
    font-size: 26px;
    font-weight: 600;
    line-height: 31.69px;
    cursor: pointer;
    transition: all 0.3s ease;
    &-active {
      border-color: transparent;
      background: $primary-color;
      color: rgba(255, 255, 255, 1);
    }
    &:hover {
      box-shadow: 0px 25px 50px 0px rgba(132, 94, 194, 0.288);
      transform: translateY(-2px);
    }
  }
}
</style>
