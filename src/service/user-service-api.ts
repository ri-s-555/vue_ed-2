import { IUser } from '@/types/user'
import { API_URL } from '@/service/api'
import { ref } from 'vue'
const useUserService = () => {
  const user = ref<IUser | null>(null)

  async function getUser(id: number) {
    const response = await fetch(`${API_URL}/user/${id}`)
    const data: IUser = await response.json()
    user.value = data
    return data
  }
  return { user, getUser }
}

export default useUserService
