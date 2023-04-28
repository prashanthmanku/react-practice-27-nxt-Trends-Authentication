import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onChangeUserName = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => [this.setState({password: e.target.value})]

  SuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)
    // console.log(response)
    if (response.ok === true) {
      this.SuccessLogin()
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  render() {
    let {errorMsg} = this.state

    errorMsg = errorMsg.length > 1 ? `*${errorMsg}` : errorMsg

    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt=" website logo"
          className="login-mobile-view-logo"
        />

        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-form-img"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt=" website logo"
            className="login-desktop-view-logo"
          />
          <div className="form-input-container">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              type="text"
              id="username"
              className="form-input"
              placeholder="rahul"
              //   placeholder="Username"
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="form-input-container">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="rahul@2021"
              //   placeholder="Password"
              onChange={this.onChangePassword}
            />
          </div>
          <button type="submit" className="login-submit-btn">
            Login
          </button>
          <p className="login-error-msg">{errorMsg}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
