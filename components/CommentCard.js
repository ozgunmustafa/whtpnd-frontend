import { Avatar, Comment } from 'antd'
import React from 'react'

const CommentCard = ({ children, comment }) => {
  console.log(comment)

  return (
    <Comment
      actions={[<span key="comment-nested-reply-to">Reply to</span>]}
      author={<a>{comment.user}</a>}
      avatar={
        <Avatar src="https://joeschmoe.io/api/v1/random" alt={comment.user} />
      }
      content={<p>{comment.content}</p>}
    >
      {children}
    </Comment>
  )
}

export default CommentCard
