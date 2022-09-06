import React, { useRef } from 'react'
import { Col, Modal, Row, Button, Input, Card, Form } from 'antd'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Avvatar from '../../components/Avvatar'
import { Typography } from 'antd'
import { Avatar } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  BookmarkIcon,
  BookmarkIconActive,
  CommentsIcon,
  ShareIcon,
  ImageIcon,
  CodeBlockIcon,
  ShieldSvg
} from '../../components/CustomIcons'
import Icon, {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  PlusOutlined,
  MinusOutlined,
  SearchOutlined
} from '@ant-design/icons'
import ActionButton from '../../components/ActionButton'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

const { Title, Paragraph } = Typography
const ShieldIcon = (props) => <Icon component={ShieldSvg} {...props} />

function CategoryIndex({ category }) {
  const router = useRouter()

  console.log(router.query.slug.split('-').slice(-1)[0])
  const [feedData, setFeedData] = React.useState([
    {
      id: 1,
      publisher: {
        name: 'Fosinopril sodium',
        username: 'fosodium'
      },
      category: 'Marketing',
      gender: 'Female',
      question:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
      comments: [
        {
          publisher:
            'Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate',
          gender: 'Non-binary',
          question:
            'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
        }
      ],
      bookmarked: false
    },
    {
      id: 2,
      publisher: {
        name: 'Lamb Quarters',
        username: 'lambQua'
      },
      category: 'Research and Development',
      gender: 'Female',
      question: 'Duis bibendum. Morbi non quam nec dui luctus rutrum.',
      comments: [
        {
          publisher:
            'Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate',
          gender: 'Non-binary',
          question:
            'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
        }
      ],
      bookmarked: true
    },
    {
      id: 3,
      publisher: {
        name: 'Rromethazine Quarters',
        username: 'promethazine'
      },
      category: 'Engineering',
      gender: 'Female',
      question:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
      comments: [
        {
          publisher: 'LATANOPROST',
          gender: 'Male',
          question:
            'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.'
        },
        {
          publisher: 'ustilago maydis',
          gender: 'Polygender',
          question:
            'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.'
        },
        {
          publisher:
            'Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate',
          gender: 'Non-binary',
          question:
            'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
        }
      ],
      bookmarked: false
    },
    {
      id: 4,
      publisher: {
        name: 'Octinoxate, Octisalate',
        username: 'octisalate'
      },
      gender: 'Male',
      category: 'Research and Development',
      question:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
      comments: [
        {
          publisher: 'LATANOPROST',
          gender: 'Male',
          question:
            'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.'
        },
        {
          publisher: 'ustilago maydis',
          gender: 'Polygender',
          question:
            'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.'
        },
        {
          publisher:
            'Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate',
          gender: 'Non-binary',
          question:
            'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
        }
      ],
      bookmarked: true
    },
    {
      id: 5,
      publisher: {
        name: 'Promethazine Hydrochloride',
        username: 'hydrochloride'
      },
      gender: 'Female',
      category: 'Research and Development',
      question:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
      comments: [
        {
          publisher: 'LATANOPROST',
          gender: 'Male',
          question:
            'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.'
        },
        {
          publisher: 'ustilago maydis',
          gender: 'Polygender',
          question:
            'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.'
        }
      ],
      bookmarked: true
    }
  ])
  const [feedCategories, setFeedCategories] = React.useState([
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
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [shareUrl, setShareUrl] = React.useState('')
  const [divContent, setDivContent] = React.useState('')
  const [expandTopics, setExpandTopics] = React.useState(false)
  const [modalType, setModalType] = React.useState('share')
  const [activeFeedComments, setActiveFeedComments] = React.useState([])

  const textInput = useRef(null)
  const textInputPlaceholder = useRef(null)

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

  React.useEffect(() => {
    // setDivContent(textInput.current.innerHTML)
    // console.log(textInput.current.innerHTML)

    console.log('xxx', divContent)
  }, [divContent])

  return (
    <>
      <Modal
        title={modalType.toLocaleUpperCase()}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {modalType === 'share' ? (
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
          activeFeedComments.map((item, index) => (
            <p key={'cmnt' + index}>{item.question}</p>
          ))
        ) : (
          ''
        )}
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
                        contentEditable="true"
                        onBlur={(e) => setDivContent(e.target.innerHTML)}
                        ref={textInput}
                      >
                        <p
                          className="placeholder mb-0"
                          ref={textInputPlaceholder}
                        >
                          Type Something {/*about <b>Development </b>*/} ...
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
                  {feedData.map((feedItem, index) => (
                    <div
                      className="post-card bg-white radius-1 mb-2"
                      key={'feed-' + index}
                    >
                      <Avvatar
                        size={35}
                        src={`https://joeschmoe.io/api/v1/${feedItem.gender.toLowerCase()}/random`}
                        text={feedItem.category}
                        description={
                          <Link href="/profile">
                            <a>{feedItem.publisher.name}</a>
                          </Link>
                        }
                        style={{ backgroundColor: '#d1d1d1' }}
                      />

                      <p style={{ marginTop: '10px' }}>{feedItem.question}</p>
                      <div className="d-flex">
                        <ActionButton
                          icon={<CommentsIcon />}
                          text={feedItem.comments.length + ' Yorum'}
                          style={{ marginRight: '7px', color: '#919191' }}
                          onClick={() => {
                            showModal('comments')
                            setActiveFeedComments(feedItem.comments)
                          }}
                        />
                        <ActionButton
                          icon={<ShareIcon />}
                          text="Paylaş"
                          style={{ marginRight: '7px', color: '#919191' }}
                          onClick={() => {
                            showModal('share')
                            setShareUrl('https://temp-mail.org/tr/')
                          }}
                        />
                        <ActionButton
                          icon={
                            feedItem.bookmarked ? (
                              <BookmarkIconActive />
                            ) : (
                              <BookmarkIcon />
                            )
                          }
                          text="Yer İşareti"
                          style={{ marginRight: '7px', color: '#919191' }}
                        />
                      </div>
                    </div>
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
                            text="Nich Babich"
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
