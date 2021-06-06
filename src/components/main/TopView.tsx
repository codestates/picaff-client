import React from 'react'
import { useHistory } from 'react-router'

export default function TopView() {
  const history = useHistory()
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    history.push('/test')
  }
  return (
    <>
      <section className='mainContainer'>
        <div className='subdec'>
          <div className='style'>
            <hr className='bar' />
            <span>PICK YOUR CAFE & COFFEE</span>
          </div>
        </div>
        <div className='Container dec'>
          <span className='title a'>C</span>
          <span className='title b'>O</span>
          <span className='title c'>F</span>
          <span className='title d'>F</span>
          <span className='title e'>E</span>
          <span className='title f'>E</span>
        </div>
        <div className='Container p'>
          <p>
            원두는 너무 많아 고르기 힘들고
            <br />
            맛있게 내리기는 더 어려운 홈 카페
          </p>
        </div>
        <div className='Container button' onClick={handleClick}>
          <a className='btn'>나의 홈카페 취향 알아보기</a>
        </div>
      </section>
      <div className='VideoContainer'>
        <video className='video' muted autoPlay loop>
          <source src='mainvideo.mp4' />
        </video>
      </div>
    </>
  )
}
