import { IProduct } from '@/types/Product'

interface ICart {
  id: number;
  products: IProduct[]
}

export type { ICart }
