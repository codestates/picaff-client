import Button from 'components/button/Button'
import EndedTest from 'components/Test-end/EndedTest'
import Select from 'components/select-test/Select'
import { Test, TestResult } from 'interface'
import { convertArray, test } from 'module/test'
import { useState, useEffect } from 'react'
import { SliderContainer } from './Test.style'
import Result from 'containers/result/Result'

export default function TestImpls() {
  const [testData, setTest] = useState<Test[]>(test)
  const [index, setindex] = useState<number>(0)
  const [isDone, setisDone] = useState<boolean>(false)
  const [scoreArr, setscoreArr] = useState<(number | null)[]>(convertArray(testData, 'score'))

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
    if (scoreArr[0] !== null) setindex(index + 1)
    scoreArr.indexOf(null) === -1 ? setisDone(true) : ''
  }, [scoreArr])

  const handleBackBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, idx: number) => {
    e.preventDefault()
    setindex(idx - 1)
  }
  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: TestResult
  ): JSX.Element => {
    e.preventDefault()
    return <Result TestResult={data} />
  }

  return (
    <SliderContainer index={index}>
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
    </SliderContainer>
  )
}
