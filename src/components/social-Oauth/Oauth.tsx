import { SocialLogin } from './Oauth.style'
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import KakaoLogin from 'react-kakao-login'
import { KakaoLoginResponse } from 'interface'
import React from 'react'

type Oauth = {
  responseGoogle: (res: GoogleLoginResponse | GoogleLoginResponseOffline) => void
  responseKakao: (res: KakaoLoginResponse) => void
}

export default function Oauth({ responseGoogle, responseKakao }: Oauth) {
  return (
    <SocialLogin>
      <div className='social_login'>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOLE_CLIENT_ID as string}
          render={(Ele) => (
            <button id='google' onClick={Ele.onClick}>
              <img className='logo' src='./images/google.png' />
              <div className='title'>Login with Google</div>
            </button>
          )}
          onSuccess={responseGoogle}
          onFailure={(res) => alert(res.error)}
          cookiePolicy={'single_host_origin'}
        />
        <KakaoLogin
          token={process.env.REACT_APP_KAKAO_API_KEY as string}
          onSuccess={({ response }) => responseKakao(response)}
          onFail={console.error}
          onLogout={console.log}
          render={(ele) => (
            <button
              id='kakao'
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault()
                ele.onClick()
              }}>
              <img className='logo' src='./images/kakao.png' />
              <div className='title'>Login with Kakao</div>
            </button>
          )}></KakaoLogin>
      </div>
    </SocialLogin>
  )
}
