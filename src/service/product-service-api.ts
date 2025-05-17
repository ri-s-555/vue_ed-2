import { type IProduct } from '@/types/Product'
import { API_URL } from '@/service/api'

const useProductService = () => {


  // Получение всех товаров
  async function getProducts() {
    const response = await fetch(`${API_URL}/products`)
    const data: IProduct[] = await response.json()
    return data
  }
  return { getProducts }
}

export default useProductService
