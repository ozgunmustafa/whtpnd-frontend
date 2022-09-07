import Link from 'next/link'
import React from 'react'
import slug from 'slug'

const CategoryBadge = ({ item }) => {
  return (
    <Link
      href="/category/[slug]"
      as={`/category/${slug(item.title)}-${item._id}`}
      key={'ctg-' + item._id}
    >
      <a className="category-badge">#{item.title}</a>
    </Link>
  )
}

export default CategoryBadge
