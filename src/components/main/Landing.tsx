import Button from 'components/button/Button'
import TestImpls from 'containers/testpage/TestImpls'
import React, { useState } from 'react'
import LandingComponent from './Landing.style'
export default function Landing() {
  const [isTest, setisTest] = useState(false)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
            <h1>홈 카페를 시작하는 첫 걸음</h1>
            <p>
              원두는 너무 많아 고르기 힘들고
              <br /> 맛있게 내리기는 너무 어려워요
            </p>
            <div className='buttonContainer'>
              <Button
                style='MainBtnBrown'
                value='커피취향 알아보기'
                handleClick={handleClick}
                type='button'
              />
            </div>
          </section>
          <div className='VideoContainer'>
            <video className='video' muted autoPlay loop>
              <source src='coffee2_VP9.webm' />
            </video>
            <div className='backContainer'>
              <div className='imageBack'></div>
            </div>
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
