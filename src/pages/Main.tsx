import type { FC } from "react"
import { type Book } from "../types/book"
import { addToCart } from "../utils/cart"

const books: Book[] = [
  {
    id: 1,
    title: "Книга 1",
    author: "Автор 1",
    price: 100,
  },
  {
    id: 2,
    title: "Книга 2",
    author: "Автор 2",
    price: 200,
  },
  {
    id: 3,
    title: "Книга 3",
    author: "Автор 3",
    price: 300,
  },
  {
    id: 4,
    title: "Книга 4",
    author: "Автор 4",
    price: 400,
  },
  {
    id: 5,
    title: "Книга 5",
    author: "Автор 5",
    price: 500,
  },
]

const Book: FC<{ book: Book }> = ({ book }) => {
  return <div className="flex justify-between">
      <div className="flex gap-x-8">
        <span>{book.title}</span>
        <span>{book.author}</span>
        <span>₽ {book.price}</span>
      </div>
      <button onClick={() => addToCart(book)} className="underline">В корзину</button>
    </div>
}

export const MainPage = () => {
  return <div>
    <h1 className="text-xl">Каталог</h1>
    <div className="mt-4">
      {books.map(book => <Book book={book} key={book.id} />)}
    </div>
  </div>
}
