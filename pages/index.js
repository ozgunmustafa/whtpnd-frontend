import React, { useState, useRef, useEffect } from 'react'
import { Col, Modal, Row, Button, Input } from 'antd'
import Head from 'next/head'
import Layout from '../components/Layout'
import { Typography } from 'antd'
import Avvatar from '../components/Avvatar'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

import { ChevronDownIcon, ShieldSvg } from '../components/CustomIcons'
import Icon, {
  PlusOutlined,
  MinusOutlined,
  SearchOutlined
} from '@ant-design/icons'
import ActionButton from '../components/ActionButton'
import { isLoggedIn } from '../src/utils/authentication'
import { getAllCategories } from '../src/features/categories/categorySlice'
import CategoryService from '../src/services/CategoryService'
import PostService from '../src/services/PostService'
import PostCard from '../components/PostCard'
import CategoryPill from '../components/CategoryPill'
import classNames from 'classnames'

const { Title, Paragraph } = Typography
const ShieldIcon = (props) => <Icon component={ShieldSvg} {...props} />

function Home({ popularCategories, featuredCategories, featuredUsers, posts }) {
  const initialFeaturedCategories = []
  const initialPopularCategories = []

  // const [featuredCategories, setFeaturedCategories] = useState(
  //   initialFeaturedCategories
  // )
  // const [popularCategories, setPopularCategories] = useState(
  //   initialPopularCategories
  // )
  const [featuredCategoryLoading, setfeaturedCategoryLoading] = useState(true)
  const [popularCategoryLoading, setPopularCategoryLoading] = useState(true)

  const dispatch = useDispatch()
  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError
  } = useSelector((state) => state.categories)

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [shareUrl, setShareUrl] = useState('')
  const [expandTopics, setExpandTopics] = useState(false)
  const [modalType, setModalType] = useState('share')

  const [activePostComments, setActivePostComments] = useState([])
  // React.useEffect(() => {
  //   CategoryService.getFeaturedCategories()
  //     .then((response) => {
  //       setFeaturedCategories(response.data.data)
  //       setfeaturedCategoryLoading(false)
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // }, [featuredCategories.data])

  // React.useEffect(() => {
  //   CategoryService.getPopularCategories()
  //     .then((response) => {
  //       setPopularCategories(response.data.data)
  //       setPopularCategoryLoading(false)
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // }, [popularCategories.data])

  // React.useEffect(() => {
  //   dispatch(getAllCategories())
  // }, [])

  const showModal = (type) => {
    setIsModalVisible(true)
    setModalType(type)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const getPostComments = (id) => {
    PostService.getPostComments(id).then((response) => {
      setActivePostComments(response.data.data)
    })
  }

  return (
    <>
      <Modal
        title={modalType.toLocaleUpperCase()}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/*modalType === 'share' ? (
          <div>
            <Typography.Title
              level={3}
              copyable={{ tooltips: ['Kopyala', 'Kopyalandı'] }}
            >
              {shareUrl}...
            </Typography.Title>
            <div className="d-flex">
              <span style={{ marginRight: '10px' }}>Share to:</span>
              <InstagramOutlined
                style={{
                  fontSize: '22px',
                  color: '#6975ff',
                  marginRight: '5px'
                }}
              />
              <FacebookOutlined
                style={{
                  fontSize: '22px',
                  color: '#6975ff',
                  marginRight: '5px'
                }}
              />
              <TwitterOutlined
                style={{
                  fontSize: '22px',
                  color: '#6975ff',
                  marginRight: '5px'
                }}
              />
            </div>
          </div>
        ) : modalType === 'comments' ? (
          activePostComments.map((item, index) => (
            <p key={'cmnts' + index}>{item.content}</p>
          ))
        ) : (
          ''
        )*/}
      </Modal>
      <Layout
        title="Create Next App"
        description="Generated by create next app"
        headerEnabled={true}
      >
        <Head>
          <title>Whthpnd | Homepage</title>
          <meta name="description" content="What Happened Home Page" />
        </Head>

        <section className="section-padding-1">
          <div className="container">
            <Row gutter={20}>
              <Col
                className="gutter-row  mb-3 order-2 order-lg-1"
                xs={24}
                lg={16}
              >
                <section>
                  <Title level={3} className="">
                    Highlight Topics
                  </Title>
                  <div
                    className={classNames({
                      'category-pills mb-3': true,
                      expanded: expandTopics
                    })}
                  >
                    {featuredCategories.data.map((item, index) => (
                      <CategoryPill
                        item={item}
                        key={'category-pill' + index}
                        active={index % 3 == 0 ? true : false}
                      />
                    ))}
                    
                  </div>

                  <Button
                    type="text"
                    className={classNames({
                      'expand-btn w-100 py-3': true,
                      'd-none': featuredCategories.data.length < 8
                    })}
                    icon={<ChevronDownIcon />}
                    onClick={() => {
                      setExpandTopics(!expandTopics)
                    }}
                  >
                    Daha {expandTopics ? 'Az' : 'Fazla'}
                  </Button>
                </section>
                <section>
                  <Title level={3} className="">
                    Reading Suggestions
                  </Title>

                  {posts.data.map((item, index) => (
                    <PostCard key={'feed-' + item._id} item={item} />
                  ))}
                </section>
              </Col>
              <Col
                className="gutter-row mb-3 px-lg-30 order-1 order-lg-2"
                xs={24}
                lg={8}
              >
                <div className="sticky-top">
                  <Input
                    size="large"
                    className="radius-pill"
                    placeholder="Ara"
                    prefix={
                      <SearchOutlined
                        style={{ fontSize: '20px', color: '#5c5c5c' }}
                      />
                    }
                  />
                  <div className="py-3 radius-1 ">
                    <Title level={4}>Top Categories</Title>
                    <ul
                      className="highlight-topics flex-column"
                      style={{ maxHeight: 'unset' }}
                    >
                      {popularCategories.data.map((item, index) => (
                        <li
                          key={'category-top-card' + index}
                          className="radius-2 text-left"
                        >
                          <Link
                            href="/category/[slug]"
                            as={`/category/${slug(item.title)}-${item._id}`}
                            key={'ctg-' + item._id}
                          >
                            <a>{item.title}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <section className="section-padding-2">
                    <Title level={4}>Top Creators</Title>
                    {featuredUsers.data.map((item, index) => (
                      <Link
                        href="/profile/[slug]"
                        as={`/profile/${slug(item.name)}-${item._id}`}
                        key={'featuredUser' + item._id}
                      >
                        <a className="user-card mb-1">
                          <div className="">
                            <Avvatar
                              key={index}
                              size={50}
                              src={`https://joeschmoe.io/api/v1/male/random`}
                              text={item.name}
                              description="Product designer & editor-in-chief of UX Planet."
                              style={{
                                minWidth: '50px',
                                backgroundColor: '#d1d1d1'
                              }}
                            />
                          </div>
                        </a>
                      </Link>
                    ))}
                  </section>
                  <div className="post-card px-1 bg-white radius-1 d-flex align-items-center mb-2">
                    <ShieldIcon
                      style={{ fontSize: '40px', marginRight: '10px' }}
                    />
                    Shield is important for us!
                  </div>
                  {/*
<div className="card-padding-responsive radius-1  d-flex align-items-center">
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
                     */}
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const dataPopularCategories = await unfetch(
    `${process.env.BASE_URL}/categories/popular`
  )
  const popularCategories = await dataPopularCategories.json()

  const dataFeaturedCategories = await unfetch(
    `${process.env.BASE_URL}/categories/featured`
  )
  const featuredCategories = await dataFeaturedCategories.json()

  const dataFeaturedUsers = await unfetch(
    `${process.env.BASE_URL}/users/popular`
  )
  const featuredUsers = await dataFeaturedUsers.json()

  const dataPosts = await unfetch(`${process.env.BASE_URL}/posts`)
  const posts = await dataPosts.json()

  return {
    props: {
      popularCategories,
      featuredCategories,
      featuredUsers,
      posts
    }
  }
}

export default Home
