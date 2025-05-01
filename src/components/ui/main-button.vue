<template>
  <button
    @click="click"
    class="main-button"
    :class="[
      {
        'round-button': props.type === ButtonType.ROUND,
        'default-button': props.type === ButtonType.DEFAULT,
        'outline-button': props.type === ButtonType.OUTLINE,
        'full-round-button': props.type === ButtonType.FULL_ROUND,
        'inline-round-button': props.type === ButtonType.INLINE_ROUND,
        'icon-button': props.type === ButtonType.ICON,
      },
      props.class,
    ]"
  >
    <span v-if="leftIcon">...</span>
    {{ props.title }}
  </button>
</template>
<script setup lang="ts">
import { ButtonType } from '@/components/ui/ui-types'
interface IEmit {
  (event: 'click'): void
}
interface IProps {
  type?: ButtonType
  title?: string
  leftIcon?: string
  class?: string
}
const emit = defineEmits<IEmit>()
const props = withDefaults(defineProps<IProps>(), {
  type: ButtonType.DEFAULT,
  title: '',
  class: '',
})
function click() {
  emit('click')
}
</script>
<style lang="scss">
@use '@/scss/colors' as *;

.main-button {
  width: 263px;
  height: 70px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 25px 50px 0px rgba(132, 94, 194, 0.15);
  font-size: 21px;
  font-weight: 600;
  line-height: 25.6px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.default-button {
  background: $primary-color;
  color: rgba(255, 255, 255, 1);

  &:hover {
    background: $primary-color-active;
    box-shadow: 0px 25px 50px 0px rgba(132, 94, 194, 0.25);
    transform: translateY(-2px);
  }
}

.outline-button {
  box-shadow: 0px 25px 50px 0px rgba(132, 94, 194, 0.15);
  // color: rgba(255, 255, 255, 1);
  transform: translateY(-2px);

  &:hover {
    background: rgba(41, 18, 79, 0.15);
    box-shadow: 0px 25px 50px 0px rgba(132, 94, 194, 0.25);
    transform: translateY(-2px);
  }
}



.full-round-button {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 0px;
  margin-left: 38px;
  width: 229px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid $primary-color;
  background: $primary-color;
  box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: rgb(255, 255, 255);

  &:hover {
    background: $primary-color;
    box-shadow: 0px 25px 50px 0px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    .items-added-button-text {
      color: rgb(255, 255, 255);
    }
  }
}
.inline-round-button {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 0px;
  margin-left: 38px;
  width: 229px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid $primary-color;
  box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  font-size: 16px;
  font-weight: 500;
  line-height: 60px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: $primary-color;
    box-shadow: 0px 25px 50px 0px rgba(132, 94, 194, 0.25);
    transform: translateY(-2px);
    color: rgb(255, 255, 255);
  }
}

.icon-button {
width: 50px;
height: 50px;
border-radius: 50%;

  &:hover {
    background: rgba(93, 20, 210, 0.231);
    box-shadow: 0px 25px 50px 0px rgba(137, 96, 203, 0.25);
    transform: translateY(-2px);
  }
}

</style>
