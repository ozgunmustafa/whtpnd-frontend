import { getCookie, setCookies, removeCookies } from 'cookies-next'
const token = getCookie('access_token')

export const isLoggedIn = () => {
  if (token === undefined || token ===null) {
    return false
  } else {
    return true
  }
}

