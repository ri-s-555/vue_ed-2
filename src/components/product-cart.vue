<template>
  <div class="card">
    <div :class="['card__pick' , props.product.color]">
      <div class="card__pick__img">
        <img :src="props.product.image" :alt="product.name" class="card__pick__img__product" />
        <div v-if="product.save" :class="['card__pick__img__save', props.product.colorSave]">
          Save ${{ props.product.save }}
        </div>
      </div>
      <div class="card__pick__descr">
        <div class="card__pick__descr__name">
          {{ props.product.name }}
        </div>
        <div class="card__pick__descr__reviews">
          <div class="card__pick__descr__reviews__svg">
            <svg
              v-for="(i, index) in Math.round(props.product.rating)"
              :key="index"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z"
                fill="#C00C00"
              ></path>
            </svg>
          </div>
          <div class="card__pick__descr__reviews__text">{{ props.product.review }} reviews</div>
        </div>
        <div class="card__pick__descr__price">${{ props.product.price }}</div>
      </div>
    </div>
     
    <mainButton @click="addToCart" title="Buy Now"  :type="ButtonType.DEFAULT"/> 
    <modalTemplate v-if="state.isShowModal" @close="closeModal"  >
        hello
    <template v-if="false" #footer>123</template>
    </modalTemplate>
  </div>
</template>

<script lang="ts" setup>
import { type IProduct } from '@/types/Product'
import modalTemplate from '@/components/ui/modal-template.vue';
import mainButton from '@/components/ui/main-button.vue';
import {ButtonType} from '@/components/ui/ui-types'
import { reactive } from 'vue';

interface IState {
  isShowModal:boolean
}

const props = defineProps<{
  product: IProduct
}>()
const state = reactive<IState>({
  isShowModal:false
})

function addToCart(){
state.isShowModal = true
console.log('addToCart',state.isShowModal)
}
function closeModal(){
  state.isShowModal = false
console.log('closeModal',state.isShowModal)

}
</script>

<style lang="scss"></style>
