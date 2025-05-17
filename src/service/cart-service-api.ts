import { type ICart } from '@/types/cart'
import { API_URL, headers } from '@/service/api'
import { ref } from 'vue'
import { type IProduct } from '@/types/Product'
const useCartService  = (currentCartId?: number | null | undefined) => {
  const cartId = ref<number | null | undefined>(currentCartId)
  console.log('cart-service')
  if (!cartId.value) {
    throw new Error('Cart ID is required')
  }

  /**
   * Получение корзины
   * @returns - возвращается ответ от сервера
   */
  async function getCart() {
    const response = await fetch(`${API_URL}/cart/${cartId.value}`)
    const data: ICart = await response.json()
    return data
  }
  /**
   * Добавление товара в корзину
   * @param productId - id товара
   * @returns - возвращается ответ от сервера
   */
  async function addToCart(product: IProduct) {
    const response = await fetch(`${API_URL}/cart/${cartId.value}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(product),
    })
    return response.json()
  }

  /**
   * Удаление товара из корзины
   * @param productId - id товара
   * @returns - возвращается ответ от сервера
   */
  async function removeFromCart(product: IProduct) {
    const response = await fetch(`${API_URL}/cart/${cartId.value}`, {
      method: 'DELETE',
      headers: headers,
      body: JSON.stringify(product),
    })
    const data = await response.json()
    return data
  }

  return { getCart, addToCart, removeFromCart }
}

export default useCartService
