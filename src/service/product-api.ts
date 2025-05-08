import { type IProduct } from '@/types/Product';
import { type ICart } from '@/types/cart';
async function getProducts() {
  const response = await fetch('http://localhost:3000/products');
  const data: IProduct[] = await response.json();
  return data;
}
async function getCart(cartId: number) {
  const response = await fetch(`http://localhost:3000/cart/${cartId}`);
  const data: ICart = await response.json();
  return data;
}

async function addToCart(product: IProduct) {
  const response = await fetch('http://localhost:3000/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  return response.json()
}

// Удаление товара из корзины
async function removeFromCart(productId: number) {
  const response = await fetch(`http://localhost:3000/cart/${productId}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
}

export { getProducts, getCart, addToCart, removeFromCart };
