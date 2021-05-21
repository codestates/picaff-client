import React, { useState } from 'react'
import { User, UserInfo } from 'interface'
import axios from 'axios'
import { LoginContainer } from './Login.style'
import InputForm from 'components/input-form/InputForm'
import Button from 'components/button/Button'
import Oauth from 'components/social-Oauth/Oauth'
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'

type LogiProps = {
  setUserInfo: (UserInfo: UserInfo) => void
}

export default function SignIn({ setUserInfo }: LogiProps) {
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
    if ('tokenId' in res) {
      const { accessToken: access_token, tokenId: token_id } = res

      const response = await axios.post(
        'http:localhost:4000/user/google',
        { access_token, token_id },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      console.log(response.data)
      const UserInfo = response.data as UserInfo
      UserInfo ? setUserInfo(UserInfo) : alert('로그인에 실패하였습니다')
    }
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
