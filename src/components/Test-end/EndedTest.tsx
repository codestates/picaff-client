import Button from 'components/button/Button'
import { useAuth } from 'containers/ProvideAuth/ProvideAuth'
import { TestResult } from 'interface'
import { getitemResult } from 'module/TestResult'
import React, { useEffect, useState } from 'react'
import { EndedTestContainer } from './EndedTest.style'
import TestLoadingIndicator from 'components/loading-indicator/TestLoading'

type TestFinish = {
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: TestResult) => void
  score: (number | null)[]
}

export default function EndedTest({ handleSubmit, score }: TestFinish) {
  const [data, setdata] = useState<TestResult | null>(null)
  const [onLoading, setOnLoading] = useState<boolean>(true)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    data && handleSubmit(e, data)
  }
  const auth = useAuth()
  useEffect(() => {
    async function ResData() {
      auth.refreshAccessToken &&
        setdata(await getitemResult(score, auth.accessToken, auth.refreshAccessToken))
    }

    const time = setTimeout(() => {
      ResData()
      setOnLoading(false)
    }, 3000)
    return () => {
      clearTimeout(time)
    }
  }, [])

  return (
    <EndedTestContainer onLoading={onLoading}>
      <h1>내게 맞는 홈카페 취향 찾는 중</h1>
      <TestLoadingIndicator />
      <div className='loadingStart'>
        <div className='video'>
          <video src='/coffee2_VP9.webm' muted={true} autoPlay />
        </div>
      </div>
      <div className='loadingEnd'>
        {data && (
          <Button
            type='button'
            style='MainBtnIvory'
            handleClick={handleClick}
            value='결과확인하기'
          />
        )}
      </div>
    </EndedTestContainer>
  )
}
