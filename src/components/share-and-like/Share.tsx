import { ShareComponent } from './Share.style'
import { useEffect } from 'react'
import shareKakao from 'module/ShareKakao'
import shareTwitter from 'module/ShareTwitter'
import shareFacebook from 'module/ShareFacebook'
import shareNaverBlog from 'module/ShareNaverBlog'

type Props = {
  isShareOpen: boolean
  // setIsShareOpen: () => void
}

export default function Share({ isShareOpen }: Props) {
  // const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  //  console.log(e.target.value)
  //  버튼 별로 value 값 지정하여 분기
  //  분기한게 먼저 실행되고 shareOpen 상태를 false로
  // }

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
    <ShareComponent id='slide'>
      <div className={isShareOpen ? 'box_btn active' : 'box_btn close'}>
        <img src='./icons/kakaotalk.png' onClick={shareKakao} alt='' id='btnKakao'></img>
        <img src='./icons/naverblog.png' onClick={shareNaverBlog} alt=''></img>
        <img src='./icons/twitter.png' onClick={shareFacebook} alt=''></img>
        <img src='./icons/facebook.png' onClick={shareTwitter} alt=''></img>
      </div>
    </ShareComponent>
  )
}
