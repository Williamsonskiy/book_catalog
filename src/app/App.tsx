import { createBrowserRouter, Outlet } from "react-router"
import { RouterProvider } from "react-router/dom"

import { MainPage } from "../pages/Main"
import { CartPage } from "../pages/Cart"

const Layout = () => {
  return <>
      <header className="p-4 flex justify-between bg-white shadow-md">
        <a href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800">Новый каталог книг</a>
        <a href="/cart" className="underline">Корзина</a>
      </header>
      <main className="m-auto mt-2 w-4xl px-4 bg-gray-50 min-h-screen">
        <Outlet />
      </main>
    </>
}

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: MainPage },
      { path: 'cart', Component: CartPage }
    ],
  },
])

export const App = () => {
  return <RouterProvider router={router} />
}