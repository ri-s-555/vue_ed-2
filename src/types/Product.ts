import { CategoryProducts } from '@/types/category'

/**
 * @interface IProduct
 * @property {number} id - Идентификатор продукта
 * @property {string} color - Цвет продукта
 * @property {string} colorSave - Цвет сохранения продукта
 * @property {string} name - Название продукта
 * @property {string} fullName - Полное название продукта
 * @property {string} review - Отзывы о продукте
 * @property {number} price - Цена продукта
 * @property {number} save - Скидка на продукт
 * @property {number} rating - Рейтинг продукта
 * @property {string} image - Фото продукта
 * @property {string} brand - Бренд продукта
 * @property {string} releaseDate - Дата релиза продукта
 * @property {string} model - Модель продукта
 * @property {boolean} deliveryAvailable - Возможность доставки продукта
 * @property {string} description - Описание продукта
 * @property {CategoryProducts[]} category - Категория продукта
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
}

