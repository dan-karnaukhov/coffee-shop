import { useEffect, useState } from 'react'

import { CartItem } from '../../App'
import { IProduct } from '../../data/products'
import CatalogNotFound from '../CatalogNotFound'
import Pagination, { PaginateEvent } from '../Pagination'
import ProductCard from '../ProductCard'

import './style.scss'

type ProductListProps = {
  products: IProduct[]
  cartItems: CartItem[]
  onAddToCart: (productId: number) => void
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  cartItems,
  onAddToCart,
}) => {
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    setOffset(0)
    setPage(0)
  }, [products])

  const productsPerPage = 6
  const pageCount = Math.ceil(products.length / productsPerPage)
  const paginatedProducts = products.slice(offset, offset + productsPerPage)

  const onPaginate = (event: PaginateEvent) => {
    setOffset(event.selected * productsPerPage)
    if (event.selected > page) {
      setPage((page) => page + 1)
    } else {
      setPage((page) => page - 1)
    }
  }

  if (paginatedProducts.length === 0) {
    return <CatalogNotFound />
  }

  return (
    <div className='product-list'>
      <div className='product-list__products'>
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            inCart={
              cartItems.findIndex((item) => item.productId === product.id) !== -1
            }
            onAddToCart={() => onAddToCart(product.id)}
          />
        ))}
      </div>
      <Pagination
        forcePage={page}
        pageCount={pageCount}
        onPageChange={onPaginate}
      />
    </div>
  )
}

export default ProductList
