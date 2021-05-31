import { BtnComponent } from './ShareAndLike.style'
import { MdShare } from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'
import { itemResult } from 'interface'
import { useState } from 'react'
import axios from 'axios'
import Share from 'components/share-and-like/Share'

type Props = {
  renderItem: itemResult
}

export default function ShareAndLike({ renderItem }: Props) {
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false)

  const AddLike = async () => {
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

  return (
    <BtnComponent isLiked={isLiked}>
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
