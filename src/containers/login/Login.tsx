import React, { useEffect, useState } from 'react'
import { User, UserInfo, KakaoLoginResponse, TestResult } from 'interface'
import { LoginContainer } from './Login.style'
import InputForm from 'components/input-form/InputForm'
import Button from 'components/button/Button'
import Oauth from 'components/social-Oauth/Oauth'
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { requestOauth, saveBeforeTest } from 'module/Oauth'
import { useHistory, useLocation } from 'react-router-dom'
import { useAuth } from 'containers/ProvideAuth/ProvideAuth'

interface Props extends Location {
  from: {
    pathname: string
    state?: {
      testResult: TestResult
    }
  }
}

export default function SignIn() {
  const history = useHistory()
  const location = useLocation<Props>()
  const auth = useAuth()
  const [user, setUser] = useState<User>({ name: '', email: '', password: '' })
  const [userInfo, setUserInfo] = useState<UserInfo>({
    id: 0,
    userName: '',
    email: '',
    auth: { accessToken: '' },
  })
  const [alertMessage, setAlertMessage] = useState<string>('')
  const { email, password } = user

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }
  useEffect(() => {
    if (auth.signin && userInfo.auth) {
      const accessToken = userInfo.auth ? userInfo.auth.accessToken : ''
      const refreshToken = userInfo.auth ? userInfo.auth.refreshToken : ''
      if (accessToken && refreshToken) {
        const { from } = location.state || { from: { pathname: '/' } }
        if (location.state && 'testResult' in location.state) {
          console.log(from.state)
          saveBeforeTest(location.state['testResult'], accessToken)
          auth.signin(accessToken, refreshToken, () =>
            history.replace({
              pathname: from.pathname,
              state: from.state,
            })
          )
        } else {
          auth.signin(accessToken, refreshToken, () => history.replace({ pathname: from.pathname }))
        }
      }
    }
  }, [userInfo])

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!email || !password) {
      setAlertMessage('아이디와 비밀번호를 모두 입력해주세요')
    } else {
      await requestOauth('https://localhost:4000/user/signin', { email, password }, (userInfo) => {
        setUserInfo(userInfo)
      })
    }
  }

  const handleGoogleLogin = async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('tokenId' in res) {
      const { accessToken: access_token, tokenId: id_token } = res

      await requestOauth(
        'https:localhost:4000/user/google',
        { access_token, id_token },
        (userInfo) => {
          setUserInfo(userInfo)
        }
      )
    }
  }

  const handleKakaoLogin = async (res: KakaoLoginResponse) => {
    console.log(res)
    const { access_token } = res
    await requestOauth('https://localhost:4000/user/kakao', { access_token }, (userInfo) => {
      setUserInfo(userInfo)
    })
  }

  const handleclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    history.push('/signup')
  }

  return (
    <LoginContainer>
      <form>
        <h2>로그인</h2>
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
          <Oauth responseGoogle={handleGoogleLogin} responseKakao={handleKakaoLogin} />
        </div>
        <span className='greeting'>are you new member?</span>
        <div className='box_signup'>
          <button onClick={handleclick} id='signup'>
            Sign-up
          </button>
        </div>
      </form>
    </LoginContainer>
  )
}
