import { BtnComponent } from './ShareAndLike.style'
import { MdShare } from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'
import { itemResult, TestResult } from 'interface'
import { useState } from 'react'
import axios from 'axios'
import Share from 'components/share-and-like/Share'
import { useAuth } from 'containers/ProvideAuth/ProvideAuth'
import { useHistory, useLocation } from 'react-router'

type Props = {
  renderItem: itemResult
  testResult: TestResult
}

export default function ShareAndLike({ renderItem, testResult }: Props) {
  const [isLiked, setIsLiked] = useState<boolean>(renderItem.isLiked)
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false)
  const auth = useAuth()
  const history = useHistory()
  const location = useLocation()

  const isLogin = (): boolean => {
    if (auth.accessToken) {
      return true
    } else {
      history.push('/login', { from: location, testResult })
    }
    return false
  }

  const AddLike = async () => {
    if (isLogin()) {
      const res = await axios.post(
        'https://localhost:4000/item/liked',
        { itemId: renderItem.id },
        {
          headers: {
            // 'Authorization': `Bearer ${acceccToken}`,
            'Content-Type': 'application/json',
            'withCredentials': true,
          },
        }
      )
      if (res.status === 200) {
        setIsLiked(!isLiked)
        console.log('좋아요 상태 변경 요청 성공')
      } else {
        console.log('권한이 없습니다 혹은 다시 시도하십시오')
      }
    }
  }

  return (
    <BtnComponent isLiked={isLiked} className='shareandlike'>
      <button className='share' onClick={() => setIsShareOpen(!isShareOpen)}>
        <MdShare />
      </button>
      <button className='like' onClick={() => AddLike()}>
        <MdFavorite />
      </button>
      <Share isShareOpen={isShareOpen} />
    </BtnComponent>
  )
}
