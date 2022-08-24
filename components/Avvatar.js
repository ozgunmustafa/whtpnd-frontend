import { Avatar } from 'antd'
import React from 'react'

const Avvatar = (props) => {
  return (
    <div className="d-flex align-items-center">
      <Avatar {...props} />
      <div className="d-flex flex-column" style={{ marginLeft: '7px' }}>
        <span style={{ fontSize: '16px',marginBottom:'3px' }} className="fw-600 lh-sm ">
          {props.text}
        </span>
        <span style={{ fontSize: '14px' }} className="text-muted lh-sm">
          {props.description}
        </span>
      </div>
    </div>
  )
}

export default Avvatar
