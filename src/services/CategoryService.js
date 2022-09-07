import axios, { axiosPrivate, privateEndpoint } from '../api'

class CategoryService {
  getAllCategories() {
    return axios.get('/categories')
  }
  getFeaturedCategories() {
    return axios.get('/categories/featured')
  }
  getPopularCategories() {
    return axios.get('/categories/popular')
  }
  getSingleCategory(id) {
    return axios.get(`/categories/${id}`)
  }
  followCategory(id) {
    return axiosPrivate.get(`/categories/${id}/follow`)
  }
}
export default new CategoryService()
