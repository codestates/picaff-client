import React, { useState } from 'react'
import { User } from 'interface'
import axios from 'axios'
import { LoginContainer } from './Login.style'
import InputForm from 'components/input-form/InputForm'
import Button from 'components/button/Button'
import Oauth from 'components/social-Oauth/Oauth'
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'

export default function SignIn() {
  const [user, setUser] = useState<User>({ name: '', email: '', password: '' })
  const [alertMessage, setAlertMessage] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (email === '' || password === '') {
      setAlertMessage('아이디와 비밀번호를 모두 입력해주세요')
    } else {
      await axios
        .post(
          'https://localhost:4000/user/signin',
          { email, password },
          {
            headers: { 'Content-Type': 'application/json', 'withCredentials': true },
          }
        )
        .then((res) => {
          // ?: 로그인 요청 성공
          if (res.headers) {
            // 토큰 저장
            // ?: 로그인 요청 실패
          } else {
            // setAlertMessage('아이디와 비밀번호를 확인해주세요')
          }
        })
        .catch((err) => console.error(err))
    }
  }

  const handleGoogleLogin = async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(res)
  }

  const { email, password } = user

  return (
    <LoginContainer>
      <form>
        <h2>Nice to see you again!</h2>
        <InputForm>
          <label className='Input label'>Email Address</label>
          <input type='email' name='email' value={email} onChange={handleChange} />
        </InputForm>
        <InputForm>
          <label className='Input label'>Password</label>
          <input type='password' name='password' value={password} onChange={handleChange} />
        </InputForm>
        <span className='alert'>{alertMessage}</span>
        <div className='box_login'>
          <div className='user_login'>
            <Button style='MainBtnBrown' value='Login' handleClick={handleLogin} />
          </div>
          <Oauth responseGoogle={handleGoogleLogin} />
        </div>
        <span className='greeting'>are you new member?</span>
        <div className='box_signup'>
          <button id='signup'>Sign-up</button>
        </div>
      </form>
    </LoginContainer>
  )
}
