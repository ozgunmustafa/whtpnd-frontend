import api from '../api'

class UserService {
  registerUser(data) {
    return api.post('/auth/register', data)
  }
  loginUser(data) {
    return api.post('/auth/login', data, {
      withCredentials: true
    })
  }
  getAllUsers() {
    return api.get('/users')
  }
  getUser(id) {
    return api.get(`/users/${id}`)
  }
}
export default new UserService()
