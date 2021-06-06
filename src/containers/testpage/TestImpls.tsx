import Button from 'components/button/Button'
import EndedTest from 'components/Test-end/EndedTest'
import Select from 'components/select-test/Select'
import { Test, TestResult } from 'interface'
import { convertArray, test } from 'module/test'
import { useState, useEffect } from 'react'
import { SliderContainer } from './Test.style'
import { useHistory } from 'react-router'

export default function TestImpls() {
  const [testData, setTest] = useState<Test[]>(test)
  const [index, setindex] = useState<number>(0)
  const [isDone, setisDone] = useState<boolean>(false)
  const [scoreArr, setscoreArr] = useState<(number | null)[]>(convertArray(testData, 'score'))
  const history = useHistory()
  const handleNextBtn = (score: number, idx: number) => {
    setTest([
      ...testData.slice(0, idx),
      { ...testData[idx], score },
      ...testData.slice(idx + 1, testData.length),
    ])
  }

  useEffect(() => {
    setscoreArr(convertArray(testData, 'score'))
  }, [testData])

  useEffect(() => {
    if (scoreArr[0] !== null) {
      setTimeout(() => {
        setindex(index + 1)
      }, 200)
    }
    scoreArr.indexOf(null) === -1 ? setisDone(true) : ''
  }, [scoreArr])

  const handleBackBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, idx: number) => {
    e.preventDefault()
    if (idx !== 0) {
      setindex(idx - 1)
    }
  }
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: TestResult) => {
    e.preventDefault()
    console.log(data)
    history.push('/result', data)
  }

  return (
    <SliderContainer index={index}>
      <div className='bar'>
        <div className='progress' />
      </div>
      <div className='slider'>
        {testData.map((el, idx) => (
          <div className='slide' key={idx}>
            <Select
              title={el.title}
              preSelect={el.score}
              handleTestResult={(data) => {
                handleNextBtn(Number(data), idx)
              }}
            />
            <div className='btnContainer'>
              <Button
                type='button'
                style='MainBtnIvory'
                handleClick={(e) => handleBackBtn(e, idx)}
                value='뒤로가기'
              />
            </div>
          </div>
        ))}
      </div>
      {isDone && <EndedTest handleSubmit={handleSubmit} score={scoreArr} />}

      <div>
        <div className='bubble1'></div>
        <div className='bubble2'></div>
      </div>

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
    </SliderContainer>
  )
}
