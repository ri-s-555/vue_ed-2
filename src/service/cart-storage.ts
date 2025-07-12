import { type ICart } from '@/types/cart'

/**
 * Обеспечивает наличие корзины в LocalStorage и предоставляет методы для работы с ней.
 * @returns {Object} Методы для работы с корзиной в LocalStorage.
 */
function useLocalCartStorage() {
  const CART_STORAGE_KEY = 'cart';

  /**
   * Получение корзины из LocalStorage.
   * @returns {ICart} Данные корзины или пустая корзина.
   */
  function getCartFromLocalStorage(): ICart {
    const cart = localStorage.getItem(CART_STORAGE_KEY);
    return cart ? JSON.parse(cart) : { id: null, products: [] };
  }

  /**
   * Сохранение корзины в LocalStorage.
   * @param {ICart} cart - Данные корзины.
   */
  function saveCartToLocalStorage(cart: ICart): void {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }

  /**
   * Обеспечивает наличие корзины в LocalStorage.
   * @returns {ICart} Данные корзины из LocalStorage или новая пустая корзина.
   */
  function ensureCartInStorage(): ICart {
    const storedCart = getCartFromLocalStorage();
    if (storedCart.id !== null) {
      return storedCart;
    }

    const newCart: ICart = { id: new Date().getTime(), products: [] };
    saveCartToLocalStorage(newCart);
    return newCart;
  }

  return { getCartFromLocalStorage, saveCartToLocalStorage, ensureCartInStorage };
}

export { useLocalCartStorage };
