<template>
    <button @click="click" :class="{
        'round-button':props.type === ButtonType.ROUND,
        'default-button':props.type === ButtonType.DEFAULT

    }">
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
    leftIcon:string
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

</style>