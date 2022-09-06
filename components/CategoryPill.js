import React from 'react'
import { Button } from 'antd'
import { CheckIcon, PlusIcon } from './CustomIcons'
import classNames from 'classnames'
import Link from 'next/link'
import slug from 'slug'

const CategoryPill = ({ item, active }) => {
  console.log(item)
  return (
    <div className={classNames({ 'category-pill': true, active: active })}>
      <Link
        href="/category/[slug]"
        as={`/category/${slug(item.title)}-${item._id}`}
        key={'ctg-' + item._id}
      >
        <a className="category-pill_text">
          <span>{item.title}</span>
        </a>
      </Link>

      <Button
        className="category-pill_btn"
        type="text"
        icon={active ? <CheckIcon /> : <PlusIcon />}
      ></Button>
    </div>
  )
}

export default CategoryPill
