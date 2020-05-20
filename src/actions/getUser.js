import jwt from 'jsonwebtoken'
import privateKey from './privateKey'

export const getUser = () => {
  let user = null
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token')
    try {
      user = jwt.verify(token, privateKey)
    } catch (err) {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
  return user
}
