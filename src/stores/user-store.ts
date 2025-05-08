import { ref } from 'vue'
import { defineStore } from 'pinia'
import { IUser } from '@/types/user'



export const useUserStore = defineStore('user', () => {
  const user = ref<IUser | null>(null)
  const cart = ref([])
  function setUser(value: IUser) {
    user.value = value
  }

  return { user,cart, setUser }
})


