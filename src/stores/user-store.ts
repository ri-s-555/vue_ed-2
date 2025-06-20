import { ref } from 'vue'
import { defineStore } from 'pinia'
import { IUser } from '@/types/user'
import {useUserService} from '@/service/user-service-api'

export const useUserStore = defineStore('user', () => {

// export default defineStore('user', () => { //новое хранилизе в панье с именем юзер
  const user = ref<IUser | null>(null) //хранит данные пользователя, исначально нал
  const isAuth = ref<boolean>(false) //аунтетификация, значально фолс


  async function setUser(value: IUser) { // принимает объект пользователя типа IUser
    // console.log('setUser')
    user.value = value //и устанавливает его в реактивную ссылку user
  }


  async function getUser(userId:number) { //получает данные пользователя по его userId
    const { getUser: getUserFromService} = useUserService() //использует useUserService для получения метода getUserFromService, который выполняет запрос к API для получения данных пользователя
    const response = await getUserFromService(userId)

    if (response) {
      isAuth.value = true
      user.value = response
    }
  }

  return { user, setUser, getUser, isAuth }
})
