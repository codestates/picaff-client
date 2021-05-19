import { SocialLogin } from './Oauth.style'

export default function Oauth() {
  return (
    <SocialLogin>
      <div className='social_login'>
        <button id='google'>
          <img className='logo' src='./images/google.png' />
          <div className='title'>Login with Google</div>
        </button>
        <button id='kakao'>
          <img className='logo' src='./images/kakao.png' />
          <div className='title'>Login with Kakao</div>
        </button>
      </div>
    </SocialLogin>
  )
}
