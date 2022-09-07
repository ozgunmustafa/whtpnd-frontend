import React, { useRef, useState } from 'react'
import { Col, Modal, Row, Button, Input, Card, Form } from 'antd'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Avvatar from '../../components/Avvatar'
import { Typography } from 'antd'
import { Avatar } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  ImageIcon,
  CodeBlockIcon,
  ShieldSvg
} from '../../components/CustomIcons'
import Icon, {
  PlusOutlined,
  MinusOutlined,
  SearchOutlined
} from '@ant-design/icons'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'
import PostCard from '../../components/PostCard'

const { Title, Paragraph } = Typography
const ShieldIcon = (props) => <Icon component={ShieldSvg} {...props} />

function CategoryIndex({ category }) {

  const [modalVisible, setModalVisible] = useState(false);

  const router = useRouter()
  const [feedCategories, setFeedCategories] = useState([
    {
      category: 'Marketing',
      category_img: 'https://robohash.org/accusantiumdoloremea.png'
    },
    {
      category: 'Research and Development',
      category_img: 'https://robohash.org/voluptasidofficiis.png'
    },
    {
      category: 'Engineering',
      category_img: 'https://robohash.org/aperiamvelnesciunt.png'
    },
    {
      category: 'Data Analyses',
      category_img: 'https://robohash.org/exdoloresquaerat.png'
    },
    {
      category: 'Programming',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Song',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Listen',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Podcast',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Marketing',
      category_img: 'https://robohash.org/accusantiumdoloremea.png'
    },
    {
      category: 'Research and Development',
      category_img: 'https://robohash.org/voluptasidofficiis.png'
    },
    {
      category: 'Engineering',
      category_img: 'https://robohash.org/aperiamvelnesciunt.png'
    },
    {
      category: 'Data Analyses',
      category_img: 'https://robohash.org/exdoloresquaerat.png'
    },
    {
      category: 'Programming',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Song',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Listen',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Podcast',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Marketing',
      category_img: 'https://robohash.org/accusantiumdoloremea.png'
    },
    {
      category: 'Research and Development',
      category_img: 'https://robohash.org/voluptasidofficiis.png'
    },
    {
      category: 'Engineering',
      category_img: 'https://robohash.org/aperiamvelnesciunt.png'
    },
    {
      category: 'Data Analyses',
      category_img: 'https://robohash.org/exdoloresquaerat.png'
    },
    {
      category: 'Programming',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Song',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Listen',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Podcast',
      category_img: 'https://robohash.org/nesciuntutest.png'
    }
  ])
  const [expandTopics, setExpandTopics] = useState(false)

  const textInput = useRef(null)
  const textInputPlaceholder = useRef(null)


  return (
    <>
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
              <Col className="gutter-row  mb-3" xs={24} lg={16}>
                <section className="section-padding-1 hide-on-desktop">
                  <Card
                    title={
                      <div className="d-flex flex-wrap align-items-center justify-content-between">
                        {category.title}

                        <Button
                          type="primary"
                          style={{
                            borderColor: '#14a800',
                            backgroundColor: '#14a800',
                            color: 'white'
                          }}
                        >
                          Follow
                        </Button>
                      </div>
                    }
                    className="topic-card"
                  >
                    <Row gutter={20}>
                      <Col className="gutter-row " span={12}>
                        <Title level={3} className="lh-sm mb-0">
                          {category.posts.length}
                        </Title>
                        <p className="text-muted mb-0">Entries</p>
                      </Col>
                      <Col className="gutter-row " span={12}>
                        <Title level={3} className="lh-sm mb-0">
                          {category.followers.length}
                        </Title>
                        <p className="text-muted mb-0">Followers</p>
                      </Col>
                    </Row>
                  </Card>
                </section>
                <section>
                  <div className="share-box mb-3">
                    <div className="share-box_header">
                      <Avatar
                        src="https://joeschmoe.io/api/v1/random"
                        size="large"
                        style={{ minWidth: '40px' }}
                      />
                      <div
                        className="share-box_content"
                        onClick={() => {
                          console.log('xx')
                        }}
                      >
                        <p className="placeholder mb-0">
                          Type Something about <b>{category.title}</b>
                        </p>
                      </div>
                    </div>
                    <Button type="primary" className="share-box_submit-btn">
                      Primary Button
                    </Button>
                    <div className="share-box_body">
                      <div className="d-flex align-items-center">
                        <label className="file-upload d-flex align-items-center share-box_btn mr-3">
                          <ImageIcon
                            style={{ color: '#24669E', marginRight: '7px' }}
                          />
                          <input type="file" />
                          <span>Add Image</span>
                        </label>
                        <button className="d-flex align-items-center share-box_btn">
                          <CodeBlockIcon
                            style={{ color: 'green', marginRight: '7px' }}
                          />
                          <span>Add Code Block</span>
                        </button>
                      </div>
                      <span className="share-box_subject">
                        {category.title}
                      </span>
                    </div>
                  </div>
                  {/*
                  <div className="content-create-box border-light radius-2">
                     <Editor />
                  </div>*/}
                  {category.posts.map((item, index) => (
                    <PostCard key={'feed-category' + index} item={item} />
                  ))}
                </section>
              </Col>
              <Col className="gutter-row mb-3" xs={24} lg={8}>
                <Input
                  size="large"
                  className="radius-pill mb-1 hide-on-mobile"
                  placeholder="Ara"
                  prefix={
                    <SearchOutlined
                      style={{ fontSize: '20px', color: '#5c5c5c' }}
                    />
                  }
                />
                <section className="section-padding-1 hide-on-mobile">
                  <Card
                    title={
                      <div className="d-flex flex-wrap align-items-center justify-content-between">
                        {category.title}
                        <Button
                          type="primary"
                          style={{
                            borderColor: '#14a800',
                            backgroundColor: '#14a800',
                            color: 'white'
                          }}
                        >
                          Follow
                        </Button>
                      </div>
                    }
                    className="topic-card"
                  >
                    <Row gutter={20}>
                      <Col className="gutter-row " span={12}>
                        <Title level={3} className="lh-sm mb-0">
                          {category.posts.length}
                        </Title>
                        <p className="text-muted mb-0">Entries</p>
                      </Col>
                      <Col className="gutter-row " span={12}>
                        <Title level={3} className="lh-sm mb-0">
                          {category.followers.length}
                        </Title>
                        <p className="text-muted mb-0">Followers</p>
                      </Col>
                    </Row>
                  </Card>
                </section>
                <section className="section-padding-2">
                  <Title level={5}>Top Creators</Title>
                  {[...Array(5)].map((e, i) => (
                    <Link href="/profile" key={'avvva' + i}>
                      <a className="user-card mb-1" key={'avva' + i}>
                        <div className="" key={'avvaa' + i}>
                          <Avvatar
                            size={50}
                            src={`https://joeschmoe.io/api/v1/male/random`}
                            head="Nich Babich"
                            sub="Product designer & editor-in-chief of UX Planet."
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
                <section className="section-paddin-1">
                  <Title level={5}>Releated Topics</Title>
                  <ul
                    className={
                      'highlight-topics ' + (expandTopics ? 'expanded ' : '')
                    }
                  >
                    {feedCategories.map((category, index) => (
                      <li key={'fdCtg' + index}>
                        <a href="">{category.category}</a>
                      </li>
                    ))}
                  </ul>
                  <Button
                    type="text"
                    className="w-100 "
                    icon={expandTopics ? <MinusOutlined /> : <PlusOutlined />}
                    onClick={() => {
                      setExpandTopics(!expandTopics)
                    }}
                  >
                    Daha {expandTopics ? 'Az' : 'Fazla'}
                  </Button>
                </section>

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
              </Col>
            </Row>
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const dataCategories = await unfetch(`${process.env.BASE_URL}/categories`)
  const categories = await dataCategories.json()

  const paths = categories.data.map((category) => ({
    params: { slug: `${slug(category.title)}-${category._id}` }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const id = params.slug.split('-').slice(-1)[0]

  const dataCategory = await unfetch(`${process.env.BASE_URL}/categories/${id}`)
  const category = await dataCategory.json()

  return {
    props: { category: category.data }
  }
}
export default CategoryIndex
