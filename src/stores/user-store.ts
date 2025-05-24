import { ref } from 'vue'
import { defineStore } from 'pinia'
import { IUser } from '@/types/user'
import useUserService from '@/service/user-service-api'

export default defineStore('user', () => {
  const user = ref<IUser | null>(null)
  const isAuth = ref<boolean>(false)


  async function setUser(value: IUser) {
    console.log('setUser')
    user.value = value
  }
  async function getUser(userId:number) {
    const { getUser: getUserFromService} = useUserService()
    const response = await getUserFromService(userId)

    if (response) {
      isAuth.value = true
      user.value = response
    }
  }

  return { user, setUser, getUser, isAuth }
})
