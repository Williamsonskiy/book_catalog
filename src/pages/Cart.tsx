import { useState, type FC } from "react"
import type { CartItem } from "../types/cart"
import type { Book } from "../types/book"
import { getCart, removeFromCart } from "../utils/cart"

const CartItem: FC<{ item: CartItem, handleDelete: (book: Book) => void }> = ({ item, handleDelete }) => {
  return <div className="flex justify-between">
    <div className="flex gap-x-8">
      <span>{item.book.title}</span>
      <span>{item.book.author}</span>
      <span>₽ {item.book.price}</span>
      <span>Кол-во: {item.qty}</span>
    </div>
    <button onClick={() => { removeFromCart(item.book.id); handleDelete(item.book) }}>Удалить</button>
  </div>
}

export const CartPage = () => {
  const [cartItems, setCartItems] = useState(getCart())

  return <div>
    <h1 className="text-xl">Корзина</h1>
    <div className="mt-4">
      {cartItems.map(item => <CartItem item={item} handleDelete={() => setCartItems(getCart())} key={item.book.id} />)}
    </div>
  </div>
}
