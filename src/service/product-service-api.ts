import { type IProduct } from '@/types/Product'
import { API_URL } from '@/service/api'
// import { ref } from "vue"

/**
 * Сервис для работы с продуктами
 */
const useProductService = () => {
  // const products = ref<IProduct[]>([]);

  /**
   * Получение списка продуктов
   * @returns {Promise<IProduct[]>} - Массив продуктов в формате JSON
   */
  async function getProducts() {
    const response = await fetch(`${API_URL}/products`)
    const data: IProduct[] = await response.json()
    return data
  }

  return { getProducts }
}

export { useProductService }

