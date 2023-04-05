import './style.scss'

type ProductPageDescriptionProps = {
  description: string[]
}

const ProductPageDescription: React.FC<ProductPageDescriptionProps> = ({
  description,
}) => {
  return (
    <div className='product-page-description'>
      <h4>Описание</h4>
      {description.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
    </div>
  )
}

export default ProductPageDescription
