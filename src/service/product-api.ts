import { type IProduct } from '@/types/Product'

async function getProducts() {
  const response = await fetch('http://localhost:3000/products')
  const data: IProduct[] = await response.json()
  console.log(data)
  return data
}
