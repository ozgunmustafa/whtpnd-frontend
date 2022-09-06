import React from 'react'
import { Col, Modal, Row, Button, Input, Card, Form } from 'antd'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import Link from 'next/link'
import { Typography } from 'antd'
import Image from 'next/image'
import { loginUser } from '../src/features/auth/authentication'

const { Title, Paragraph } = Typography

const LoginForm = () => {
  const authorization = useSelector((state) => state.authentication)
  const router = useRouter()
  const dispatch = useDispatch()

  const onFinish = (values) => {
    dispatch(loginUser(values))
    router.push('/')
  }

  const onFinishFailed = (errorInfo) => {
    //console.log('Failed:', errorInfo)
  }
  return (
    <Card className="">
      
      <Title level={3}>Login</Title>
      <Form
        name="basic"
        labelCol={{
          span: 0
        }}
        wrapperCol={{
          span: 24
        }}
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!'
            }
          ]}
        >
          <Input size="large" placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}
        >
          <Input.Password size="large" placeholder="Password" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 24
          }}
        >
          <Button
            type="primary"
            danger
            htmlType="submit"
            className="w-100"
            size="large"
            loading={authorization.loading ? true : false}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
      <p className="text-center">
        <span className="text-muted">Don&apos;t you have an account?</span>
        <Link href="/register">
          <a>
            <i>Register</i>
          </a>
        </Link>
      </p>
    </Card>
  )
}

export default LoginForm
