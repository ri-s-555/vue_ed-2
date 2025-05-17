import { ref } from 'vue'
import { defineStore } from 'pinia'
import { IUser } from '@/types/user'
import useUserService from '@/service/user-service-api'

export default defineStore('user', () => {
  const user = ref<IUser | null>(null)


  async function setUser(value: IUser) {
    console.log('setUser')
    user.value = value
  }
  async function getUser(userId:number) {
    const { getUser: getUserFromService} = useUserService()
    await setUser(await getUserFromService(userId))
    return user.value
  }

  return { user, setUser, getUser }
})
