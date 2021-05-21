import { SocialLogin } from './Oauth.style'
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'

type Oauth = {
  responseGoogle: (res: GoogleLoginResponse | GoogleLoginResponseOffline) => void
}

export default function Oauth({ responseGoogle }: Oauth) {
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
          cookiePolicy={'code'}
        />
        <button id='kakao'>
          <img className='logo' src='./images/kakao.png' />
          <div className='title'>Login with Kakao</div>
        </button>
      </div>
    </SocialLogin>
  )
}
