import { Card, Col, Row } from 'antd'
import React from 'react'

const Placeholder = ({ children }) => {
  return <div className="placeholder">{children}</div>
}
const PlaceholderItem = (props) => {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        minWidth: props.width,
        minHeight: props.height
      }}
      className={`placeholder-item placeholder-item_${props.type} ${
        props.className ? props.className : ''
      }`}
    ></div>
  )
}

const CategoryListPlaceHolder = () => {
  return (
    <Card className="mb-1 category-list-card">
      <Placeholder>
        <Row>
          <Col span={20}>
            <div className="d-flex flex-column">
              <PlaceholderItem type="line" height="20px" className="mb-1" />
              <div className="d-flex">
                <PlaceholderItem
                  type="line"
                  width="50px"
                  height="12px"
                  className="mr-1"
                />
                <PlaceholderItem type="line" width="50px" height="12px" />
              </div>
            </div>
          </Col>
          <Col span={3} offset={1}>
            <PlaceholderItem type="pill" height="30px" />
          </Col>
        </Row>
      </Placeholder>
    </Card>
  )
}

const PostPlaceholder = () => {
  return (
    <div className="card-padding-responsive border-bottom-light px-0">
      <Placeholder>
        <div className="d-flex align-items-center mb-2">
          <PlaceholderItem
            type="rounded"
            width="50px"
            height="50px"
            className="mr-1"
          />
          <div className="d-flex flex-column w-100">
            <PlaceholderItem
              type="line"
              width="50%"
              height="22px"
              className="mb-1"
            />
            <PlaceholderItem type="line" width="75px" height="12px" />
          </div>
        </div>
        <PlaceholderItem type="line" height="18px" className="mb-1" />
        <PlaceholderItem type="line" height="18px" className="mb-1" />
        <PlaceholderItem type="line" height="18px" className="mb-3" />
        <div className="d-flex">
          <PlaceholderItem
            type="line"
            width="60px"
            height="16px"
            className="mr-1"
          />
          <PlaceholderItem
            type="line"
            width="60px"
            height="16px"
            className="mr-1"
          />
          <PlaceholderItem
            type="line"
            width="60px"
            height="16px"
            className="mr-1"
          />
        </div>
      </Placeholder>
    </div>
  )
}

export { PlaceholderItem, CategoryListPlaceHolder, PostPlaceholder }
