
import type { Product } from '../data/products'
import { Link } from 'react-router'
import WhatsAppButton from './WhatsAppButton'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="catalogue-product-card bg-[#151B27] rounded-lg shadow-md border border-[#283244] flex flex-col transition-all hover:border-[#176BFF] group">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-[#080B12] flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt={product.imageAlt}
          className="object-contain w-full h-full max-h-48 group-hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <div className="catalogue-product-body flex-1 flex flex-col p-4 gap-2">
        <div className="text-[#176BFF] text-xs font-semibold uppercase tracking-wide">{product.category}</div>
        <h3 className="text-lg font-bold text-white leading-tight">{product.name}</h3>
        <div className="text-[#A7B0C0] text-sm">Brand: <span className="font-medium text-white">{product.brand}</span></div>
        {product.partNumber && (
          <div className="text-[#A7B0C0] text-xs">Part No: <span className="text-white">{product.partNumber}</span></div>
        )}
        <div className="catalogue-card-actions mt-4 flex gap-2">
          <Link className="button button-primary w-full" to={`/products/${product.id}`}>
            View Details
          </Link>
          <WhatsAppButton
            variant="inline"
            message={`Enquiry: ${product.name}${product.partNumber ? ` (Part No: ${product.partNumber})` : ''}`}
          />
        </div>
      </div>
    </article>
  )
}

export default ProductCard
