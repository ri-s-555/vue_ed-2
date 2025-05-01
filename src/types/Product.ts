import { CategoryProducts } from '@/types/category'

/**
 * @interface IProduct
 * @property {number} id - Идентификатор продукта
 * @property {string} color - Цвет продукта
 * @property {string} colorSave - Цвет сохранения продукта
 * @property {string} name - Название продукта
 */
export interface IProduct {
  id: number
  color?: string
  colorSave?: string
  name: string
  fullName?: string
  review?: number
  price?: number
  save?: number
  rating?: number
  image?: string
  brand?: string,
  releaseDate?: string,
  model?: string,
  deliveryAvailable?: boolean,
  description?: string
  category?: CategoryProducts[]
  isNew: boolean
}

