<template>
  <teleport to="body">
    <div class="modal">
      <div class="modal-content">
        <div class="modal-content__header">
          <h4 class="modal-content__header_title">{{ props.title }}</h4>
          <button class="modal-content__header_close" @click="close">x</button>
        </div>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </teleport>
</template>
<script setup lang="ts">
/**
 * @param {string} title - Заголовок модального окна
 */
interface IEmit {
  (event: 'close'): void
}
/**
 * @param {string} title - Заголовок модального окна
 */
interface IProps{
    title?:string
}

const props = withDefaults(defineProps<IProps>(),{
    title:'Modal'
})
const emit = defineEmits<IEmit>()

function close() {
  emit('close')
}

</script>
<style lang="scss">

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
  overflow: hidden;

}
.modal-content {
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 500px;
  position: relative;
  background: rgb(0 140 255 / 60%);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    // &_title {
    // }

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
  }
}
</style>
