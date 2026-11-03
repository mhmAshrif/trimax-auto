

interface ProductFiltersProps {
  brands: string[]
  categories: string[]
  selectedBrand: string
  selectedCategory: string
  onBrandChange: (brand: string) => void
  onCategoryChange: (category: string) => void
  onClear: () => void
  searchName: string
  searchPartNumber: string
  onSearchNameChange: (value: string) => void
  onSearchPartNumberChange: (value: string) => void
  matchCount: number
}

function ProductFilters({
  brands,
  categories,
  selectedBrand,
  selectedCategory,
  onBrandChange,
  onCategoryChange,
  onClear,
  searchName,
  searchPartNumber,
  onSearchNameChange,
  onSearchPartNumberChange,
  matchCount,
}: ProductFiltersProps) {
  return (
    <section className="bg-[#151B27] rounded-lg p-4 mb-6 shadow border border-[#283244]">
      <form
        className="flex flex-col md:flex-row md:items-end gap-4 flex-wrap"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="flex-1 min-w-[180px]">
          <label htmlFor="search-name" className="block text-[#A7B0C0] text-xs font-semibold mb-1">Product Name</label>
          <input
            id="search-name"
            type="text"
            value={searchName}
            onChange={e => onSearchNameChange(e.target.value)}
            className="w-full rounded bg-[#080B12] border border-[#283244] text-white px-3 py-2 focus:outline-none focus:border-[#176BFF]"
            placeholder="Search by name..."
            autoComplete="off"
          />
        </div>
        <div className="flex-1 min-w-[180px]">
          <label htmlFor="search-part-number" className="block text-[#A7B0C0] text-xs font-semibold mb-1">Part Number</label>
          <input
            id="search-part-number"
            type="text"
            value={searchPartNumber}
            onChange={e => onSearchPartNumberChange(e.target.value)}
            className="w-full rounded bg-[#080B12] border border-[#283244] text-white px-3 py-2 focus:outline-none focus:border-[#176BFF]"
            placeholder="Search by part number..."
            autoComplete="off"
          />
        </div>
        <div className="flex-1 min-w-[180px]">
          <label htmlFor="brand-filter" className="block text-[#A7B0C0] text-xs font-semibold mb-1">Brand</label>
          <select
            id="brand-filter"
            value={selectedBrand}
            onChange={e => onBrandChange(e.target.value)}
            className="w-full rounded bg-[#080B12] border border-[#283244] text-white px-3 py-2 focus:outline-none focus:border-[#176BFF]"
          >
            <option value="">All Brands</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
        <div className="flex-1 min-w-[180px]">
          <label htmlFor="category-filter" className="block text-[#A7B0C0] text-xs font-semibold mb-1">Category</label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={e => onCategoryChange(e.target.value)}
            className="w-full rounded bg-[#080B12] border border-[#283244] text-white px-3 py-2 focus:outline-none focus:border-[#176BFF]"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="flex items-end min-w-[120px]">
          <button
            type="button"
            onClick={onClear}
            className="w-full bg-[#283244] hover:bg-[#176BFF] text-white font-semibold rounded px-4 py-2 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </form>
      <p className="mt-2 text-xs text-[#A7B0C0]" role="status" aria-live="polite">
        {matchCount} product{matchCount === 1 ? '' : 's'} found
      </p>
    </section>
  )
}

export default ProductFilters
