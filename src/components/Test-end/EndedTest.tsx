import Button from 'components/button/Button'
import { useAuth } from 'containers/ProvideAuth/ProvideAuth'
import { TestResult } from 'interface'
import { getitemResult } from 'module/TestResult'
import React, { useEffect, useState } from 'react'
import { EndedTestContainer } from './EndedTest.style'

type TestFinish = {
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: TestResult) => void
  score: (number | null)[]
}

export default function EndedTest({ handleSubmit, score }: TestFinish) {
  const [data, setdata] = useState<TestResult | null>(null)
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

    ResData()
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
