<template>
    <button @click="click" :class="[{
        'round-button':props.type === ButtonType.ROUND,
        'default-button':props.type === ButtonType.DEFAULT
    },
    props.class
  ]">
    <span v-if="leftIcon">...</span>
    {{ props.title }}</button>

</template>
<script setup lang="ts">

import {ButtonType} from '@/components/ui/ui-types'
interface IEmit {
    (event:'click'):void
}
interface IProps{
    type:ButtonType,
    title:string,
    leftIcon?:string
    class?:string
}
const emit = defineEmits<IEmit>()
const props = withDefaults(defineProps<IProps>(),{
    type:ButtonType.DEFAULT,
    title:''
})
function click(){
    emit('click')
}
</script>
<style>
  .round-button .default-button {
       width: 361px;
       height: 70px;
       border-radius: 10px;
       font-size: 21px;
       font-weight: 600;
       line-height: 25.6px;
       text-align: center;
       border-color: rgba(0, 0, 0, 0);}


</style>
