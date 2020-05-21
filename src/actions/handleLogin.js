import jwt from 'jsonwebtoken'
import privateKey from './privateKey'

const url = 'http://www.mocky.io/v2/5ec4ed992f00005f00dc2ccd'
// [
//     {
//       "account": "account1",
//       "email": "account1@test.com",
//       "phone": "0900000001",
//       "password": "1234"
//     },
//     {
//       "account": "account2",
//       "email": "account2@test.com",
//       "phone": "0900000002",
//       "password": "1234"
//     }
//   ]

function setToken(user) {
  const token = jwt.sign(user, privateKey, { expiresIn: '3h' })
  localStorage.setItem('token', token)
}

async function handleLogin(account, password) {
  const response = await fetch(url)
  const data = await response.json()

  let checkLogin = false
  let user = {}
  data.forEach((row) => {
    if (
      (row.account === account ||
        row.email === account ||
        row.phone === account) &&
      row.password === password
    ) {
      user = row
      checkLogin = true
    }
  })
  setToken(user)
  return checkLogin
}

function responseFacebook(response) {
  if (response.name) {
    const user = {
      account: response.name,
      email: response.email,
    }
    setToken(user)
    window.location.replace('/member')
  }
}

function twitterAuthHandler(err, data) {
  const user = {
    account: data.screen_name,
  }
  setToken(user)
  window.location.replace('/member')
}

function responseGoogle(response) {
  const user = {
    account: response.profileObj.name,
    email: response.profileObj.email,
  }
  setToken(user)
  window.location.replace('/member')
}

export { handleLogin, responseFacebook, twitterAuthHandler, responseGoogle }
