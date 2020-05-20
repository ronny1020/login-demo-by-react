import React, { useState } from 'react'
import { handleLogin, responseFacebook } from '../actions/handleLogin'

import { FaFacebook } from 'react-icons/fa'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

function Login() {
  const [error, setError] = useState(false)

  return (
    <div className="container">
      <form
        className="card m-5 p-5"
        onSubmit={(event) => {
          event.preventDefault()
          let account = document.getElementById('account').value
          let password = document.getElementById('password').value
          async function login() {
            const checkLogin = await handleLogin(account, password)
            if (checkLogin) {
              window.location.replace('/member')
            } else {
              setError(true)
            }
          }
          login()
        }}
      >
        <div className="form-group">
          <label htmlFor="account">請輸入帳號、信箱或手機</label>
          <input type="text" className="form-control" id="account" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">密碼</label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>
        {error ? (
          <small className="text-danger">帳號或密碼輸入錯誤</small>
        ) : null}
        <div className="d-flex">
          <div className="display-4">
            <FacebookLogin
              appId="250506489358768"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              render={(renderProps) => (
                <FaFacebook onClick={renderProps.onClick} />
              )}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-5 w-25">
          登入
        </button>
      </form>
    </div>
  )
}

export default Login
