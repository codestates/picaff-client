// import React from 'react'
import { BtnComponent } from './ShareAndLike.style'
import { MdShare } from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'

type Button = {
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function ShareAndLike({ handleClick }: Button) {
  return (
    <BtnComponent>
      <button className='share' onClick={handleClick}>
        <MdShare />
      </button>
      <button className='like' onClick={handleClick}>
        <MdFavorite />
      </button>
    </BtnComponent>
  )
}
