import { IUser } from '@/types/user';
import { API_URL } from '@/service/api';
import { ref } from 'vue';

/**
 * Сервис для работы с пользователями.
 * @namespace useUserService
 */
const useUserService = () => {
  /**
   * Реактивная ссылка на текущего пользователя.
   * @type {import('vue').Ref<IUser | null>}
   */
  const user = ref<IUser | null>(null);

  /**
   * Получение пользователя по идентификатору.
   * @async
   * @function getUser
   * @param {number} id - Идентификатор пользователя.
   * @returns {Promise<IUser>} Данные пользователя в формате JSON.
   */
  // async function getUser(id: number) {
  //   const token = localStorage.getItem('token') || '123123123';
  //   const response = await fetch(`${API_URL}/user/${id}`, {
  //     headers: {
  //       "Authorization": `Bearer ${token}`
  //     }
  //   });
  //   const data: IUser = await response.json();
  //   user.value = data;
  //   return data;
  // }
  async function getUser(id: number) {
  try {
    const token = localStorage.getItem('token') || '123123123';
    const response = await fetch(`${API_URL}/user/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: IUser = await response.json();
    user.value = data;
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}


  /**
   * Регистрация нового пользователя.
   * @async
   * @function registerUser
   * @param {string} username - Имя пользователя.
   * @param {string} email - Электронная почта пользователя.
   * @param {string} password - Пароль пользователя.
   * @returns {Promise<Object>} Объект с токеном и данными пользователя.
   */
  async function registerUser(username: string, email: string, password: string) {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      body: JSON.stringify({ username, email, password })
    });
    const data = await response.json();
    return data;
  }

  /**
   * Вход пользователя в систему.
   * @async
   * @function loginUser
   * @param {string} email - Электронная почта пользователя.
   * @param {string} password - Пароль пользователя.
   * @returns {Promise<Object>} Объект с токеном и данными пользователя.
   */
  async function loginUser(email: string, password: string): Promise<object> {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
    });
    const data = await response.json();
    return data;
  }

  /**
   * Получение текущего аутентифицированного пользователя.
   * @async
   * @function getCurrentUser
   * @returns {Promise<IUser | null>} Данные текущего пользователя или null, если пользователь не аутентифицирован.
   */
  async function getCurrentUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Не удалось получить данные пользователя');

      const data: IUser = await response.json();
      user.value = data;
      return data;
    } catch (error) {
      console.error('Ошибка при получении текущего пользователя:', error);
      return null;
    }
  }

  return { user, getUser, registerUser, loginUser, getCurrentUser };
};

export { useUserService };
