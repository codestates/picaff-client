import { ShareComponent } from './Share.style'
import { useEffect } from 'react'
import shareKakao from 'module/ShareKakao'
import shareTwitter from 'module/ShareTwitter'
import shareFacebook from 'module/ShareFacebook'
import shareNaverBlog from 'module/ShareNaverBlog'

export default function Share() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <ShareComponent>
      <img src='icon-kakaotalk.png' onClick={shareKakao} id='btnKakao'></img>
      <img src='icon-naverblog.png' onClick={shareNaverBlog}></img>
      <img src='icon-twitter.png' onClick={shareTwitter}></img>
      <img src='icon-facebook.png' onClick={shareFacebook}></img>
    </ShareComponent>
  )
}
