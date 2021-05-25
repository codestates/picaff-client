import Button from 'components/button/Button'
import { TestResult } from 'interface'
import { getTestResult } from 'module/TestResult'
import React, { useEffect, useState } from 'react'
import { EndedTestContainer } from './EndedTest.style'

type TestFinish = {
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: any) => void
  score: (number | null)[]
}

export default function EndedTest({ handleSubmit, score }: TestFinish) {
  const [data, setdata] = useState<TestResult | null>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    handleSubmit(e, data)
  }

  useEffect(() => {
    ;async () => setdata(await getTestResult(score))
  }, [])

  return (
    <EndedTestContainer>
      <h1>내게 맞는 커피취향 알아보는 중</h1>
      <video src='/coffee1_VP9.webm' muted={true} autoPlay />
      <div className='background'></div>
      {data && (
        <Button type='button' style='MainBtnIvory' handleClick={handleClick} value='결과확인하기' />
      )}
    </EndedTestContainer>
  )
}
