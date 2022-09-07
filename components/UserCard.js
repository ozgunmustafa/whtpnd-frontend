import Link from 'next/link'
import React from 'react'
import slug from 'slug'
import Avvatar from './Avvatar'

const UserCard = ({ item }) => {
  return (
    <Link href="/profile/[slug]" as={`/profile/${slug(item.name)}-${item._id}`}>
      <a className="user-card mb-1">
        <div className="">
          <Avvatar
            size={50}
            src={`https://joeschmoe.io/api/v1/male/random`}
            head={item.name}
            sub={item.about}
            style={{
              minWidth: '50px',
              backgroundColor: '#d1d1d1'
            }}
          />
        </div>
      </a>
    </Link>
  )
}

export default UserCard
