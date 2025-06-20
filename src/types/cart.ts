import { IProduct } from '@/types/Product'

interface ICart {
  id: number | null;
  // products: IProduct[]
  products: Array<IProduct | { id: number }>;
}

export type { ICart }
