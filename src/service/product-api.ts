import { type IProduct } from '@/types/Product';

async function getProducts() {
  const response = await fetch('http://localhost:3000/products');
  const data: IProduct[] = await response.json();
  return data;
}
// async function getProducts() {
//   try {
//     const response = await fetch('http://localhost:3000/products');
//     if (!response.ok) {
//       throw new Error(`HTTP ошибка! статус: ${response.status}`);
//     }
//     const data: IProduct[] = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Не удалось получить продукты:', error);
//     return []; // Возвращаем пустой массив в случае ошибки
//   }
// }


async function getCart() {
  const response = await fetch('http://localhost:3000/cart');
  const data: IProduct[] = await response.json();
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
  const data = await response.text();
  return data;
}

export { getProducts, getCart, addToCart, removeFromCart };
