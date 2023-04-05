import { FC, useState } from 'react'

import { Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import productsData, { IProduct } from './data/products'
import CartPage from './pages/CartPage'
import CatalogPage from './pages/CatalogPage'
import MainPage from './pages/MainPage'
import ProductPage from './pages/ProductPage'

import './scss/app.scss'

export type CartItem = {
  productId: number
  count: number
}

const App: FC = () => {
  const [products, setProducts] = useState<IProduct[]>(productsData)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartTotalSum = cartItems.reduce((sum, current) => {
    const product = products.filter(
      (product) => product.id === current.productId
    )[0]
    return sum + current.count * product.price
  }, 0)

  const cartItemsCount = cartItems.reduce(
    (sum, current) => sum + current.count,
    0
  )

  const addToCart = (productId: number) => {
    const newItem: CartItem = { productId, count: 1 }
    setCartItems((cartItems) => [newItem, ...cartItems])
  }

  const deleteCartItem = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.productId !== productId))
  }

  const deleteAllItems = () => {
    setCartItems([])
  }

  const changeCount = (productId: number, type: 'inc' | 'dec') => {
    setCartItems(
      cartItems.map((item) => {
        if (item.productId === productId) {
          if (type === 'dec' && item.count > 1) {
            return { ...item, count: item.count - 1 }
          } else if (type === 'inc') {
            return { ...item, count: item.count + 1 }
          }
        }
        return item
      })
    )
  }

  return (
    <div className='wrapper'>
      <Header cartItemsCount={cartItemsCount} cartTotalSum={cartTotalSum} />
      <main className='main'>
        <Routes>
          <Route
            path='/'
            element={
              <MainPage
                products={products}
                cartItems={cartItems}
                onAddToCart={addToCart}
              />
            }
          />
          <Route
            path='/catalog'
            element={
              <CatalogPage
                products={products}
                cartItems={cartItems}
                onAddToCart={addToCart}
              />
            }
          />
          <Route path='/catalog/:id' element={<ProductPage />} />
          <Route
            path='/cart'
            element={
              <CartPage
                items={cartItems}
                products={products}
                cartItemsCount={cartItemsCount}
                changeCount={changeCount}
                onDeleteItem={deleteCartItem}
                onDeleteAllItems={deleteAllItems}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
