import { CategoryProducts } from '@/types/category'

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

