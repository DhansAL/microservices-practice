import React from 'react'

export const Commentlist = ({ comments }) => {

  const renderedComments = comments.map(comment => {
    let content;
    if (comment.status === 'approved') {
      content = comment.content;
    }
    if (comment.status === "pending") {
      content = 'this comment is awaiting moderation please check our guidelines'
    };
    if (comment.status === 'rejected') {
      content = `this comment has been rejected. comment was ${comment.content}`
    }

    return <li key={comment.id}>{content}</li>
  })
  return (
    <div>{renderedComments}</div>
  )
}
