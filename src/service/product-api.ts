import { type IProduct } from '@/types/Product';

// Получение товаров
async function getProducts() {
  const response = await fetch('http://localhost:3000/products');
  const data: IProduct[] = await response.json();
  return data;
}

// Получение корзины
async function getCart() {
  const response = await fetch('http://localhost:3000/cart');
  const data: IProduct[] = await response.json();
  return data;
}

// Добавление товара в корзину
async function addToCart(product: IProduct) {
  const response = await fetch('http://localhost:3000/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  const data = await response.text();
  return data;
}

// Удаление товара из корзины
async function removeFromCart(productId: number) {
  const response = await fetch(`http://localhost:3000/cart/${productId}`, {
    method: 'DELETE',
  });
  const data = await response.text();
  return data;
}

export { getProducts, getCart, addToCart, removeFromCart };

