import { useState } from 'react'

import { CartItem } from '../../App'
import Container from '../../components/Container'
import Filter from '../../components/Filter'
import PageTitle from '../../components/PageTitle'
import ProductList from '../../components/ProductList'
import SearchBar from '../../components/SearchBar'
import { SelectOption } from '../../components/Select'
import Sorter from '../../components/Sorter'
import { SorterType } from '../../components/Sorter'
import { IProduct } from '../../data/products'
import {
  regionOptions,
  roastingOptions,
  weightOptions,
} from '../../data/selectData'

import './style.scss'

type CatalogPageProps = {
  products: IProduct[]
  cartItems: CartItem[]
  onAddToCart: (productId: number) => void
}

const CatalogPage: React.FC<CatalogPageProps> = ({ onAddToCart, cartItems, products }) => {
  const [term, setTerm] = useState('')
  const [sorter, setSorter] = useState<SorterType>('popularity')

  const [regionFilter, setRegionFilter] = useState<SelectOption>(
    regionOptions[0]
  )
  const [roastingFilter, setRoastingFilter] = useState<SelectOption>(
    roastingOptions[0]
  )
  const [weightFilter, setWeightFilter] = useState<SelectOption>(
    weightOptions[0]
  )

  const searchProducts = (products: IProduct[], term: string): IProduct[] => {
    return products.filter(({ name }) =>
      name.toLowerCase().includes(term.trim().toLowerCase())
    )
  }

  const filterProducts = (
    products: IProduct[],
    regionFilter: string,
    roastingFilter: string,
    weightFilter: string
  ): IProduct[] => {
    return products.filter(({ region, roasting, weight }) => {
      return (
        (region === regionFilter || regionFilter === 'Все регионы') &&
        (roasting === roastingFilter || roastingFilter === 'Любая обжарка') &&
        (weight === Number(weightFilter) || weightFilter === 'Любой вес')
      )
    })
  }

  const sortProducts = (
    products: IProduct[],
    sorter: SorterType
  ): IProduct[] => {
    switch (sorter) {
      case 'price increase':
        return products.sort((a: IProduct, b: IProduct) =>
          a.price > b.price ? 1 : -1
        )
      case 'price decrease':
        return products.sort((a: IProduct, b: IProduct) =>
          a.price > b.price ? -1 : 1
        )
      case 'title':
        return products.sort((a: IProduct, b: IProduct) =>
          a.name > b.name ? 1 : -1
        )
      default:
        return products.sort((a: IProduct, b: IProduct) =>
          a.salesNumber > b.salesNumber ? -1 : 1
        )
    }
  }

  const visibleProducts = sortProducts(
    filterProducts(
      searchProducts(products, term),
      regionFilter.value,
      roastingFilter.value,
      weightFilter.value
    ),
    sorter
  )

  return (
    <div className='catalog-page'>
      <Container small>
        <div className='catalog-page__top'>
          <PageTitle title='Каталог кофе' count={visibleProducts.length} />
          <SearchBar onSearchChange={setTerm} />
        </div>
        <Filter
          className='catalog-page__filter'
          regionFilter={regionFilter}
          setRegionFilter={setRegionFilter}
          roastingFilter={roastingFilter}
          setRoastingFilter={setRoastingFilter}
          weightFilter={weightFilter}
          setWeightFilter={setWeightFilter}
        />
        <Sorter
          className='catalog-page__sorter'
          sorter={sorter}
          onSorterChange={setSorter}
        />
        <ProductList
          products={visibleProducts}
          onAddToCart={onAddToCart}
          cartItems={cartItems}
        />
      </Container>
    </div>
  )
}

export default CatalogPage
