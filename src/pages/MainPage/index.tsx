import { CartItem } from '../../App'
import AboutUs from '../../components/AboutUs'
import Intro from '../../components/Intro'
import ProductSlider from '../../components/ProductSlider'
import { IProduct } from '../../data/products'

type MainPageProps = {
  products: IProduct[]
  cartItems: CartItem[]
  onAddToCart: (productId: number) => void
}

const MainPage: React.FC<MainPageProps> = ({
  products,
  cartItems,
  onAddToCart,
}) => {
  const salesHits = products
    .sort((a: IProduct, b: IProduct) =>
      a.salesNumber > b.salesNumber ? -1 : 1
    )
    .slice(0, 6)

  return (
    <>
      <Intro />
      <AboutUs />
      <ProductSlider
        products={salesHits}
        cartItems={cartItems}
        onAddToCart={onAddToCart}
      />
    </>
  )
}

export default MainPage
