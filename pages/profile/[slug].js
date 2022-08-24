import React, { useCallback, useState } from 'react'
import { Col, Modal, Row, Button, Input, Card } from 'antd'
import Head from 'next/head'
import Layout from '../../components/Layout'
import { Typography } from 'antd'
import Avvatar from '../../components/Avvatar'
import { Avatar } from 'antd'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import {
  BookmarkIcon,
  BookmarkIconActive,
  CommentsIcon,
  ShareIcon,
  ShieldSvg
} from '../../components/CustomIcons'
import Icon, {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  PlusOutlined,
  MinusOutlined,
  SearchOutlined,
  FormOutlined
} from '@ant-design/icons'
import ActionButton from '../../components/ActionButton'
import {
  followCategory,
  getAllCategories
} from '../../src/features/categories/categorySlice'
import {
  CategoryListPlaceHolder,
  PostPlaceholder
} from '../../components/Placeholders'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

const { Title, Paragraph } = Typography
const ShieldIcon = (props) => <Icon component={ShieldSvg} {...props} />

function UserProfile({ user }) {
  const [userId, setUserId] = useState('')
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.categories)

  React.useEffect(() => {
    dispatch(getAllCategories())
    setUserId(localStorage.getItem('userId'))
  }, [])

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
  const [expandTopics, setExpandTopics] = React.useState(false)
  const [modalType, setModalType] = React.useState('share')
  const [activeFeedComments, setActiveFeedComments] = React.useState([])

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

  const onChangeFollow = (item) => {
    dispatch(followCategory(item._id))
    setTimeout(() => {
      dispatch(getAllCategories())
    }, 500)
  }
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
            <p key={index + 'q'}>{item.question}</p>
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
              <Col className="gutter-row  mb-3" xs={24} lg={15}>
                <section>
                  <Title level={4}>Explore</Title>

                  {data == null
                    ? [...Array(5)].map((item, index) => (
                        <CategoryListPlaceHolder
                          key={'placeholder-category' + index}
                        />
                      ))
                    : data?.data.map((item, index) => (
                        <Card
                          className="mb-1 category-list-card"
                          key={'category-card' + index}
                        >
                          <Row>
                            <Col xs={24} sm={20}>
                              <div className="d-flex flex-column">
                                <h4 className="fw-600 mb-0">
                                  <Link href="/">
                                    <a>{item.title}</a>
                                  </Link>{' '}
                                </h4>
                                <div className="d-flex text-muted">
                                  <small className="mr-1">22K Entries</small>
                                  <small className="mr-1">2K Followers</small>
                                </div>
                              </div>
                            </Col>
                            <Col xs={24} sm={4}>
                              {item.followers.includes(userId) ? (
                                <Button
                                  type="primary"
                                  style={{
                                    borderColor: '#14a800',
                                    backgroundColor: 'transparent',
                                    color: '#14a800',
                                    width: '100%'
                                  }}
                                  onClick={() => {
                                    onChangeFollow(item)
                                  }}
                                >
                                  Unfollow
                                </Button>
                              ) : (
                                <Button
                                  type="primary"
                                  style={{
                                    borderColor: '#14a800',
                                    backgroundColor: '#14a800',
                                    color: 'white',
                                    width: '100%'
                                  }}
                                  onClick={() => {
                                    onChangeFollow(item)
                                  }}
                                >
                                  Follow
                                </Button>
                              )}
                            </Col>
                          </Row>
                        </Card>
                      ))}

                  <PostPlaceholder />
                  {feedData.map((feedItem, index) => (
                    <div
                      className="card-padding-responsive bg-white radius-1 border-bottom-light"
                      key={'feed-' + index + feedItem.category}
                    >
                      <Avvatar
                        size={35}
                        src={`https://joeschmoe.io/api/v1/${feedItem.gender.toLowerCase()}/random`}
                        text={feedItem.category}
                        description={
                          <a href="" style={{ color: '#1890ff' }}>
                            {feedItem.publisher.name}
                          </a>
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
              <Col className="gutter-row mb-3" xs={24} lg={9}>
                <Input
                  size="large"
                  className="radius-pill mb-1"
                  placeholder="Ara"
                  prefix={
                    <SearchOutlined
                      style={{ fontSize: '20px', color: '#5c5c5c' }}
                    />
                  }
                />
                <section className="section-padding-1">
                  <Card className="topic-card">
                    <Row gutter={20}>
                      <Col className="gutter-row text-center" span={24}>
                        <div className="d-flex flex-column align-items-center mb-5">
                          <span className="prfl-avatar creator">
                            <Avatar
                              src="https://joeschmoe.io//api/v1/female/jana"
                              size={64}
                              className=""
                            />
                          </span>

                          <span
                            style={{ fontSize: '16px' }}
                            className="fw-600 lh-sm mb-1"
                          >
                            {user.name}
                          </span>
                          <span
                            style={{ fontSize: '14px' }}
                            className="text-muted lh-sm"
                          >
                            Velit culpa laborum laboris eu incididunt enim Lorem
                            cupidatat id irure.
                          </span>
                        </div>
                      </Col>
                    </Row>
                    <Row gutter={20} className="mb-3">
                      <Col className="gutter-row text-center" span={8}>
                        <Title level={5} className="lh-sm mb-0">
                          65K
                        </Title>
                        <p className="text-muted mb-0">Entries</p>
                      </Col>
                      <Col className="gutter-row text-center" span={8}>
                        <Title level={5} className="lh-sm mb-0">
                          5K
                        </Title>
                        <p className="text-muted mb-0">Followers</p>
                      </Col>
                      <Col className="gutter-row  text-center" span={8}>
                        <Title level={5} className="lh-sm mb-0">
                          {user.followingCategory.length +
                            user.followingUser.length}
                        </Title>
                        <p className="text-muted mb-0">Following</p>
                      </Col>
                    </Row>
                    <Row gutter={20}>
                      <Col className="gutter-row text-center" span={24}>
                        <Button
                          icon={<FormOutlined />}
                          shape="circle"
                          style={{ marginRight: '5px' }}
                        ></Button>
                        <Button shape="round">Follow</Button>
                      </Col>
                    </Row>
                  </Card>
                </section>

                <section className="section-padding-1">
                  <ul
                    className={
                      'highlight-topics ' + (expandTopics ? 'expanded ' : '')
                    }
                  >
                    {feedCategories.map((category, index) => (
                      <li key={index + 'c'}>
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
                <section className="section-padding-2">
                  <Title level={5}>Following</Title>
                  {[...Array(5)].map((e, i) => (
                    <Link href="/profile" key={'profile' + i}>
                      <a>
                        <div className="mb-2">
                          <Avvatar
                            key={i}
                            size={30}
                            src={`https://joeschmoe.io//api/v1/male/jack`}
                            text="Nich Babich"
                            style={{
                              minWidth: '30px',
                              backgroundColor: '#d1d1d1',
                              fontSize: '12px'
                            }}
                          />
                        </div>
                      </a>
                    </Link>
                  ))}
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
  const dataUsers = await unfetch(`${process.env.BASE_URL}/users`)
  const users = await dataUsers.json()

  const paths = users.data.map((user) => ({
    params: { slug: `${slug(user.name)}-${user._id}` }
  }))

  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ params }) {
  const id = params.slug.split('-').slice(-1)[0]

  const dataUser = await unfetch(`${process.env.BASE_URL}/users/${id}`)
  const user = await dataUser.json()

  return {
    props: { user: user.data }
  }
}

export default UserProfile
