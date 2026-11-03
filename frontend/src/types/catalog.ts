export type CatalogCategory = {
  id: string
  name: string
}

export type CatalogItem = {
  id: string
  name: string
  category: string
  description?: string
  imageUrl?: string
}
