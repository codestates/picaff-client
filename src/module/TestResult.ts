import axios from 'axios'
import { TestResult } from 'interface'
// 시도
// import { TestResult, UserInfo } from 'interface'
// import { /* useEffect, */ useState } from 'react'
// import { useAuth } from 'containers/ProvideAuth/ProvideAuth'

export const getitemResult = async (score: (number | null)[]): Promise<TestResult> => {
  // console.log('UserInfo.auth:::::::::::::::::::::', accessToken)
  console.log('now sending the score!!! =>>>>>>>>>>>>>>>', score)
  const res = await axios.post<TestResult>(
    'https://localhost:4000/test',
    { score: score },
    { headers: { 'Content-Type': 'application/json' } }
  )
  return res.data
}
