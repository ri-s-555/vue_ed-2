import { type ICart } from '@/types/cart'
import { API_URL, headers } from '@/service/api'
import { computed } from 'vue'
import { useUserStore } from '@/stores/user-store'
import { useLocalCartStorage } from '@/service/cart-storage'
// import { type IUser } from '@/types/user'

const CART_STORAGE_KEY = 'cart'

/**
 * Сервис для работы с корзиной пользователя
 * //  * @returns {Object} Методы для взаимодействия с корзиной
 */
const useCartService = async () => {
  const { user, isAuth } = useUserStore() // isAuth не проверяется ниже
  // const { user, isAuth } = storeToRefs(useUserStore()) // обернуть в storeToRefs
  const cartId = computed<number | null | undefined>(() => user?.cartId)

  /**
   * Получение корзины
   * @returns {Promise<ICart>} Данные корзины
   */
  async function getCart(): Promise<ICart> {
    if (!isAuth.value) {
      return useLocalCartStorage().getCartFromLocalStorage()
    }

    if (!cartId.value) {
      console.warn('Authorized user has no cartId')
      return useLocalCartStorage().getCartFromLocalStorage()
    }

    try {
      const response = await fetch(`${API_URL}/cart/${cartId.value}`)
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      const cartData = await response.json() as ICart
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartData))
      return cartData
    } catch (error) {
      console.error('Cart fetch failed:', error)
      return useLocalCartStorage().getCartFromLocalStorage()
    }
  }

  /**
   * Добавление товара в корзину
   * @param {number} productId - ID товара
   * @returns {Promise<ICart>} - Обновленные данные корзины
   */
  async function addToCart(productId: number): Promise<ICart> {
    const { getCartFromLocalStorage, saveCartToLocalStorage } = useLocalCartStorage()
    const localCart = getCartFromLocalStorage()
    const updatedCart = {
      ...localCart,
      products: [...localCart.products, { id: productId }],
    }
    saveCartToLocalStorage(updatedCart)

    if (isAuth.value && cartId.value) {
      try {
        const response = await fetch(`${API_URL}/cart/${cartId.value}`, {
          method: 'POST',
          headers,
          body: JSON.stringify({ productId }),
        })
        if (!response.ok) throw new Error('Ошибка добавления товара')
        const data = await response.json()
        saveCartToLocalStorage(data)
        return data
      } catch (error) {
        console.error('Add to cart error:', error)
        throw error
      }
    }

    return updatedCart
  }

  /**
   * Удаление товара из корзины
   * @param {number} productId - ID товара
   * @returns {Promise<ICart>} - Обновленные данные корзины
   */
  async function removeFromCart(productId: number): Promise<ICart> {
    const { getCartFromLocalStorage, saveCartToLocalStorage } = useLocalCartStorage()
    const localCart = getCartFromLocalStorage()
    const updatedCart = {
      ...localCart,
      products: localCart.products.filter((p: { id: number }) => p.id !== productId),
    }
    saveCartToLocalStorage(updatedCart)

    if (isAuth.value && cartId.value) {
      try {
        const response = await fetch(`${API_URL}/cart/${cartId.value}`, {
          method: 'DELETE',
          headers,
          body: JSON.stringify({ productId }),
        })
        if (!response.ok) throw new Error('Ошибка удаления товара')
        const data = await response.json()
        saveCartToLocalStorage(data)
        return data
      } catch (error) {
        console.error('Remove from cart error:', error)
        throw error
      }
    }

    return updatedCart
  }

  return { getCart, addToCart, removeFromCart }
}

export default useCartService

