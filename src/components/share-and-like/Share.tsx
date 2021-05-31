import { ShareComponent } from './Share.style'
import { useEffect } from 'react'
import shareKakao from 'module/ShareKakao'
import shareTwitter from 'module/ShareTwitter'
import shareFacebook from 'module/ShareFacebook'
import shareNaverBlog from 'module/ShareNaverBlog'

type Props = {
  isShareOpen: boolean
}

export default function Share({ isShareOpen }: Props) {
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
    <ShareComponent isShareOpen={isShareOpen}>
      <img src='./icons/kakaotalk.png' onClick={() => shareKakao()} id='btnKakao'></img>
      <img src='./icons/naverblog.png' onClick={() => shareNaverBlog()}></img>
      <img src='./icons/twitter.png' onClick={() => shareTwitter()}></img>
      <img src='./icons/facebook.png' onClick={() => shareFacebook()}></img>
    </ShareComponent>
  )
}
