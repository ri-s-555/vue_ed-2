import { IUser } from '@/types/user'
import { API_URL } from '@/service/api'
import { ref } from 'vue'

/**
 * Сервис для работы с пользователями
 */
const useUserService = () => {
  /**
   * Реактивная ссылка на текущего пользователя
   */
  const user = ref<IUser | null>(null)

  /**
   * Получение пользователя по идентификатору
   * @param {number} id - Идентификатор пользователя
   * @returns {Promise<IUser>} - Данные пользователя в формате JSON
   */
  async function getUser(id: number) {
    const response = await fetch(`${API_URL}/user/${id}`)
    const data: IUser = await response.json()
    user.value = data

    return data
  }
  return { user, getUser }
}

export { useUserService }
