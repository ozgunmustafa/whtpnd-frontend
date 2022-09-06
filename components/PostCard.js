import Link from 'next/link'
import React from 'react'
import ActionButton from './ActionButton'
import Avvatar from './Avvatar'
import slug from 'slug'

import {
  BookmarkIcon,
  BookmarkIconActive,
  CommentsIcon,
  ShareIcon
} from './CustomIcons'

const PostCard = ({ item }) => {
  return (
    <div className="post-card bg-white radius-1 mb-2">
      <Avvatar
        size={35}
        src={`https://joeschmoe.io/api/v1/random`}
        // text={item.category ? item.category.title : 'Lorem'}
        text={
          item.category ? (
            <Link
              href="/category/[slug]"
              as={`/category/${slug(item.category.title)}-${item.category._id}`}
              key={'ctg-' + item.category._id}
            >
              <a>{item.category.title}</a>
            </Link>
          ) : (
            'Lorem'
          )
        }
        description={
          <Link
            href="/profile/[slug]"
            as={`/profile/${slug(item.user.name)}-${item.user._id}`}
            key={'featuredUser' + item._id}
          >
            <a>{item.user.name}</a>
          </Link>
        }
        style={{ backgroundColor: '#d1d1d1' }}
      />
      <Link
        href="/post/[slug]"
        as={`/post/${slug(item.slug)}-${item._id}`}
        key={'postId' + item._id}
      >
        <a>
          <div style={{ marginTop: '15px', color: '#484848' }}>
            <span style={{ fontSize: '16px' }} className="fw-600 lh-sm ">
              {item.title}
            </span>
            <p className="postcard-content">{item.content}</p>
          </div>
        </a>
      </Link>

      <div className="d-flex">
        <Link
          href="/post/[slug]"
          as={`/post/${slug(item.slug)}-${item._id}`}
        >
          <a
            className="d-flex align-items-center"
            style={{ marginRight: '7px', color: '#919191' }}
          >
            <CommentsIcon />
            <span>{item.comments.length + ' Yorum'}</span>
          </a>
        </Link>
        {/**
                        <ActionButton
                          icon={<CommentsIcon />}
                          text={item.comments.length + ' Yorum'}
                          style={{ marginRight: '7px', color: '#919191' }}
                          onClick={() => {
                            showModal('comments')
                            getPostComments(item._id)
                          }}
                        /> */}
        <ActionButton
          icon={<ShareIcon />}
          text="Paylaş"
          style={{ marginRight: '7px', color: '#919191' }}
          onClick={() => {
            showModal('share')
            setShareUrl('https://temp-mail.org/tr/')
          }}
        />
        <ActionButton
          icon={<BookmarkIconActive />}
          text="Yer İşareti"
          style={{ marginRight: '7px', color: '#919191' }}
        />
      </div>
    </div>
  )
}

export default PostCard
