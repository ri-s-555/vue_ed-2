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
    const token = localStorage.getItem('token')|| '123123123'
    const response = await fetch(`${API_URL}/user/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    const data: IUser = await response.json()
    user.value = data

    return data
  }
  async function registerUser( username: string, email: string, password: string ) {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      body: JSON.stringify({ username, email, password })
    })
    const data = await response.json()
    // тут возвращается {
    //   token,
    //   user: {
    //     id: user._id,
    //     username: user.username,
    //     email: user.email,
    //     role: user.role
    //   }
    // }
    return data
  }
  async function loginUser( email: string, password: string ) {
    const token = localStorage.getItem('token')
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}` //u3y4otgerhjb2h5g6kfgw9g2b5tl87berf
      },

    })
    const data = await response.json()
    // тут возвращается {
    //   token,
    //   user: {
    //     id: user._id,
    //     username: user.username,
    //     email: user.email,
    //     role: user.role
    //   }
    // }
    return data
  }
  return { user, getUser, registerUser, loginUser }
}

export { useUserService }
