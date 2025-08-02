import { ref } from 'vue'
import { defineStore } from 'pinia'
import { IUser } from '@/types/user'
import { useUserService } from '@/service/user-service-api'

/**
 * Хранилище пользователя, использующее Pinia для управления состоянием пользователя.
 */
export const useUserStore = defineStore('user', () => {
  /** Реактивная ссылка на данные текущего пользователя. */
  const user = ref<IUser | null>(null)

  /** Реактивная ссылка, указывающая, аутентифицирован ли пользователь. */
  const isAuth = ref<boolean>(false)

  /**
   * Устанавливает данные пользователя.
   * @param value - Объект пользователя типа IUser.
   */
  async function setUser(value: IUser) {
    user.value = value
  }

  /**
   * Получает данные пользователя по его идентификатору.
   * @param userId - Идентификатор пользователя.
   */
  async function getUser(userId: number) {
    const { getUser: getUserFromService } = useUserService()
    const response = await getUserFromService(userId)
    if (response) {
      isAuth.value = true
      user.value = response
    }
  }

  /**
   * Получает данные текущего аутентифицированного пользователя.
   * @returns {Promise<number | null>} - Идентификатор пользователя или null, если пользователь не аутентифицирован.
   */
  async function getCurrentUser() {
    const { getCurrentUser: getCurrentUserFromService } = useUserService()
    const response = await getCurrentUserFromService()
    if (response) {
      isAuth.value = true
      user.value = response
      return response.id
    }
    return null
  }

  return { user, setUser, getUser, isAuth, getCurrentUser }
})
