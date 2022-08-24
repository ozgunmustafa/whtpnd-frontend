import axios, { axiosPrivate, privateEndpoint } from '../api'

class PostService {
  getAllPosts() {
    return axios.get('/Post')
  }
  getFeaturedPosts() {
    return axios.get('/Post/featured')
  }
  getPopularPosts() {
    return axios.get('/Post/popular')
  }
  getSinglePost(id) {
    return axios.get(`/Post/${id}`)
  }
  getPostComments(id) {
    return axios.get(`/posts/${id}/comments`)
  }
  
}
export default new PostService()
