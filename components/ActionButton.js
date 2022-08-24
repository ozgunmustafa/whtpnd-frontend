import React from 'react'

const ActionButton = (props) => {
  return (
    <button className="d-flex align-items-center" {...props}>
      {props.icon}
      <span style={{ marginLeft: '3px' }}>{props.text}</span>
    </button>
  )
}

export default ActionButton
