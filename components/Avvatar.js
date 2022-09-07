import { Avatar } from 'antd'
import React from 'react'

const Avvatar = (props) => {
  return (
    <div className={`d-flex align-items-center ${props.className}`}>
      <Avatar {...props} />
      <div className="d-flex flex-column" style={{ marginLeft: '7px' }}>
        <span
          style={{ fontSize: '16px', marginBottom: '3px' }}
          className="fw-600 lh-sm "
        >
          {props.head}
        </span>
        {props.sub && (
          <span
            style={{ fontSize: '14px' }}
            className="text-muted lh-sm line-clamp line-clamp--2"
          >
            {props.sub}
          </span>
        )}
      </div>
    </div>
  )
}

export default Avvatar
