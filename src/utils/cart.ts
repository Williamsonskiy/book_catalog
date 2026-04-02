import type { Book } from "../types/book";
import type { CartItem } from "../types/cart";

const cartKey = 'cart';

export const setCart = (state: (items: CartItem[]) => CartItem[]): void => {
  const currItems = getCart();
  const newItems = state(currItems);
  localStorage.setItem(cartKey, JSON.stringify(newItems));
};

export const getCart = (): CartItem[] => {
  try {
    const storedData = localStorage.getItem(cartKey);
    if (!storedData) return [];
    const parsed = JSON.parse(storedData);
    if (!Array.isArray(parsed)) return [];
    return parsed as CartItem[];
  } catch {
    return [];
  }
};

export const addToCart = (book: Book, quantity: number = 1): void => {
  setCart((prev) => {
    const existingItem = prev.find(item => item.book.id === book.id);
    
    if (existingItem) {
      const updatedItems = prev.map((item) => {
        if (item.book.id === book.id) {
          return { ...item, qty: item.qty + quantity };
        }
        return item;
      });
      return updatedItems;
    }
    
    const newItem: CartItem = { book, qty: quantity };
    return [...prev, newItem];
  });
};
