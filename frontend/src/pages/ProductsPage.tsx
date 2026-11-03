import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import ProductFilters from '../components/ProductFilters'
import { demoProducts } from '../data/products'

const BRANDS = ['Piaggio', 'Bajaj', 'TVS', 'Mahindra']
const CATEGORIES = [
  'Engine Parts',
  'Brake Parts',
  'Electrical Parts',
  'Suspension Parts',
  'Body Parts',
  'Other Parts',
]

const SORT_OPTIONS = [
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' },
  { value: 'brand', label: 'Brand' },
]

type SortOrder = 'name-asc' | 'name-desc' | 'brand'
const PAGE_SIZE_OPTIONS = [4, 8, 12]

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchName, setSearchName] = useState('')
  const [searchPartNumber, setSearchPartNumber] = useState('')
  const requestedBrand = searchParams.get('brand') ?? ''
  const selectedBrand = BRANDS.includes(requestedBrand) ? requestedBrand : ''
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sort, setSort] = useState<SortOrder>('name-asc')
  const [pageSize, setPageSize] = useState(4)
  const [page, setPage] = useState(1)

  const filteredProducts = useMemo(() => {
    const normalizedName = searchName.trim().toLocaleLowerCase()
    const normalizedPartNumber = searchPartNumber.trim().toLocaleLowerCase()

    return demoProducts.filter((product) => {
      const matchesName = !normalizedName || product.name.toLocaleLowerCase().includes(normalizedName)
      const matchesPartNumber = !normalizedPartNumber ||
        product.partNumber?.toLocaleLowerCase().includes(normalizedPartNumber)
      const matchesBrand = !selectedBrand || product.brand === selectedBrand
      const matchesCategory = !selectedCategory || product.category === selectedCategory

      return matchesName && matchesPartNumber && matchesBrand && matchesCategory
    })
  }, [searchName, searchPartNumber, selectedBrand, selectedCategory])

  const sortedProducts = useMemo(() => {
    const products = [...filteredProducts]

    products.sort((first, second) => {
      if (sort === 'name-desc') return second.name.localeCompare(first.name)
      if (sort === 'brand') {
        return first.brand.localeCompare(second.brand) || first.name.localeCompare(second.name)
      }
      return first.name.localeCompare(second.name)
    })

    return products
  }, [filteredProducts, sort])

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / pageSize))
  const visiblePage = Math.min(page, totalPages)
  const paginatedProducts = sortedProducts.slice((visiblePage - 1) * pageSize, visiblePage * pageSize)

  function resetPage() {
    setPage(1)
  }

  function clearFilters() {
    setSearchName('')
    setSearchPartNumber('')
    setSelectedCategory('')
    setSearchParams((current) => {
      const next = new URLSearchParams(current)
      next.delete('brand')
      return next
    }, { replace: true })
    resetPage()
  }

  function changeBrand(brand: string) {
    setSearchParams((current) => {
      const next = new URLSearchParams(current)
      if (brand) next.set('brand', brand)
      else next.delete('brand')
      return next
    }, { replace: true })
    resetPage()
  }

  return (
    <div className="products-page">
      <div className="products-page-heading">
        <Container>
          <nav className="products-breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Products</li>
            </ol>
          </nav>
          <SectionHeading
            title="OUR PRODUCTS"
            level={1}
            description="Explore our range of automotive spare parts and find the right components for your requirements."
          />
          <p className="products-demo-notice">Demonstration catalogue. Product information shown is sample data.</p>
        </Container>
      </div>

      <Container className="products-content">
        <ProductFilters
          brands={BRANDS}
          categories={CATEGORIES}
          selectedBrand={selectedBrand}
          selectedCategory={selectedCategory}
          onBrandChange={changeBrand}
          onCategoryChange={(category) => { setSelectedCategory(category); resetPage() }}
          onClear={clearFilters}
          searchName={searchName}
          searchPartNumber={searchPartNumber}
          onSearchNameChange={(value) => { setSearchName(value); resetPage() }}
          onSearchPartNumberChange={(value) => { setSearchPartNumber(value); resetPage() }}
          matchCount={filteredProducts.length}
        />

        <div className="products-toolbar">
          <p className="products-result-count" aria-live="polite">
            Showing {paginatedProducts.length ? (visiblePage - 1) * pageSize + 1 : 0}
            –{Math.min(visiblePage * pageSize, sortedProducts.length)} of {sortedProducts.length} products
          </p>
          <div className="products-toolbar-controls">
            <label htmlFor="products-sort">Sort by</label>
          <select
            id="products-sort"
            value={sort}
              onChange={(event) => { setSort(event.target.value as SortOrder); resetPage() }}
          >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
            <label htmlFor="products-page-size">Per page</label>
            <select
              id="products-page-size"
              value={pageSize}
              onChange={(event) => { setPageSize(Number(event.target.value)); resetPage() }}
            >
              {PAGE_SIZE_OPTIONS.map((size) => <option key={size} value={size}>{size}</option>)}
            </select>
          </div>
        </div>

        {paginatedProducts.length > 0 ? (
          <div className="product-grid">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="products-empty-state" role="status">
            <h2>No matching products</h2>
            <p>Try a different search term or clear your filters to see all demonstration products.</p>
            <button type="button" className="button button-secondary" onClick={clearFilters}>Clear filters</button>
          </div>
        )}

        {sortedProducts.length > pageSize && (
          <nav className="products-pagination" aria-label="Product pages">
            <button
              className="button button-secondary"
              onClick={() => setPage(visiblePage - 1)}
              disabled={visiblePage === 1}
              aria-label="Previous page"
            >
              Previous
            </button>
            <span aria-live="polite">Page {visiblePage} of {totalPages}</span>
            <button
              className="button button-secondary"
              onClick={() => setPage(visiblePage + 1)}
              disabled={visiblePage === totalPages}
              aria-label="Next page"
            >
              Next
            </button>
          </nav>
        )}
      </Container>
    </div>
  )
}

export default ProductsPage
