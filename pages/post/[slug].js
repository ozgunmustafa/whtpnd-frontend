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
import TextArea from 'antd/lib/input/TextArea'
import CommentCard from '../../components/CommentCard'

const { Title, Paragraph } = Typography
const ShieldIcon = (props) => <Icon component={ShieldSvg} {...props} />

function PostIndex({ post, postComments }) {
  console.log(postComments)
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
          <title>Whthpnd | {post.title}</title>
          <meta name="description" content="What Happened Home Page" />
        </Head>

        <section className="section-padding-1">
          <div className="container">
            <Row gutter={20}>
              <Col className="gutter-row  mb-3" xs={24} lg={16}>
                <section>
                  <div className="mb-3">
                    <Avvatar
                      className="mb-2"
                      size={50}
                      src={`https://joeschmoe.io/api/v1/male/random`}
                      // text={post.user.name}
                      text="Mustafa Özgün"
                      description="Product designer & editor-in-chief of UX Planet."
                      style={{
                        minWidth: '50px',
                        backgroundColor: '#d1d1d1'
                      }}
                    />
                    <h1 style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                      {post.title}
                    </h1>
                    <Paragraph
                      style={{ fontSize: '1.1rem', lineHeight: '1.1' }}
                    >
                      {post.content}
                    </Paragraph>
                  </div>

                  <div className="">
                    {postComments?.map((comment) => (
                      <CommentCard comment={comment} key={comment._id} />
                    ))}
                  </div>
                  <TextArea
                    rows={6}
                    placeholder="Leave a Comment"
                    maxLength={6}
                  />
                </section>
              </Col>
              <Col className="gutter-row mb-3" xs={24} lg={8}>
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
  const dataPosts = await unfetch(`${process.env.BASE_URL}/posts`)
  const posts = await dataPosts.json()

  const paths = posts.data.map((post) => ({
    params: { slug: `${slug(post.slug)}-${post._id}` }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const id = params.slug.split('-').slice(-1)[0]

  const dataPost = await unfetch(`${process.env.BASE_URL}/posts/${id}`)
  const post = await dataPost.json()

  const dataPostComments = await unfetch(
    `${process.env.BASE_URL}/posts/${id}/comments`
  )
  const postComments = await dataPostComments.json()

  return {
    props: { post: post.data, postComments: postComments.data }
  }
}
export default PostIndex
