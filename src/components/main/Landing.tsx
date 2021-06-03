import TestImpls from 'containers/testpage/TestImpls'
import React, { useState } from 'react'
import LandingComponent from './Landing.style'
export default function Landing() {
  const [isTest, setisTest] = useState(false)
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    setisTest(true)
  }
  return (
    <LandingComponent id='first'>
      {/* <img src='./images/coffee.gif' alt='' /> */}

      {isTest ? (
        <TestImpls />
      ) : (
        <>
          <section className='mainContainer'>
            <div className='subdec'>
              <div className='style'>
                <hr className='bar' />
                <span>COFFEE RECOMMEND</span>
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
                처음 시작하는 홈 카페 <br />
                picaff와 함께 시작하세요
              </p>
            </div>
            <div className='Container button' onClick={handleClick}>
              <a className='btn'>커피취향 알아보기</a>
            </div>
          </section>
          <div className='VideoContainer'>
            <video className='video' muted autoPlay loop>
              <source src='mainvideo.mp4' />
            </video>
          </div>
        </>
      )}

      <section>
        <div className='wave wave1'></div>
        <div className='wave wave2'></div>
        <div className='wave wave3'></div>
        <div className='wave wave4'></div>
      </section>

      <svg width='0' height='0'>
        <filter id='fog'>
          <feTurbulence type='fractalNoise' baseFrequency='.01' numOctaves='10' />
          <feDisplacementMap in='SourceGraphic' scale='180' />
        </filter>
      </svg>
    </LandingComponent>
  )
}
