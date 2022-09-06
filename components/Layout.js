import React from 'react'
import MainNavigation from './partials/MainNavigation'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import { Avatar, Button, Modal, Tabs } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import LoginForm from './LoginForm'
const { TabPane } = Tabs

const info = () => {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {}
  })
}

const Layout = (props) => {
  const { user } = useSelector((state) => state.authentication)
  const st = useSelector((state) => state)
  console.log('xx', st)

  //const [userAuthenticated, setUserAuthenticated] = React.useState(false)
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  const onChange = (key) => {
    console.log(key)
  }
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="Sign In" key="1">
            <LoginForm/>
          </TabPane>
          <TabPane tab="Sign Up" key="2">
            Content of card tab 2
          </TabPane>
        </Tabs>
      </Modal>
      <Head>
        <title>Whthpnd | Layout</title>
        <meta
          name="description"
          content="Burada neler oluyor? Şikayetiniz nedir? "
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {props.headerEnabled && (
        <header className="main-header">
          <div className=" main-header-container">
            <Link href="/">
              <a>
                <Image
                  src="/logo.svg"
                  alt="Vercel Logo"
                  width={120}
                  height={40}
                />
              </a>
            </Link>
            {user ? (
              <Link href="/">
                <a>
                  <Button
                    type="dashed"
                    shape="round"
                    style={{ padding: '5px 8px' }}
                    icon={
                      <Avatar
                        style={{
                          backgroundColor: '#d5d5d5',
                          marginRight: '5px'
                        }}
                        size="small"
                        src="https://joeschmoe.io/api/v1/random"
                      />
                    }
                    size="large"
                    className="btn-dashed"
                  >
                    Mustafa Özgün
                  </Button>
                </a>
              </Link>
            ) : (
              <Button
                onClick={showModal}
                type="dashed"
                shape="round"
                icon={<UserOutlined />}
                size="large"
                className="btn-dashed"
              >
                Sign in
              </Button>
            )}
          </div>
        </header>
      )}

      <main>{props.children}</main>
      <footer>
        <div className="card-padding-responsive radius-1  d-flex align-items-center justify-content-center">
          <ul className="custom-list text-muted d-flex flex-wrap justify-content-center">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">Community</a>
            </li>
            <li>
              <a href="">Policy</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Layout
