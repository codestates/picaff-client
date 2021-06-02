import axios from 'axios'
import { useAuth } from 'containers/ProvideAuth/ProvideAuth'
import { TestResult } from 'interface'
// 시도
// import { TestResult, UserInfo } from 'interface'
// import { /* useEffect, */ useState } from 'react'
// import { useAuth } from 'containers/ProvideAuth/ProvideAuth'

// export const getitemResult = async (score: (number | null)[]): Promise<TestResult> => {
//   // console.log('UserInfo.auth:::::::::::::::::::::', accessToken)
//   console.log('now sending the score!!! =>>>>>>>>>>>>>>>', score)
//   const res = await axios.post<TestResult>(
//     'https://localhost:4000/test',
//     { score: score },
//     { headers: { 'Content-Type': 'application/json' } }
//   )
export const getitemResult = async (
  score: (number | null)[],
  accessToken: string | null
): Promise<TestResult> => {
  const Token = accessToken ? `Bearer ${accessToken}` : null
  const res = await axios.post<TestResult>(
    'http://localhost:4000/test',
    { score },
    {
      headers: { 'Content-Type': 'application/json', 'Authorization': Token },
    }
  )
  const auth = useAuth()
  if (res.status === 401 && auth.refreshAccessToken) {
    await auth.refreshAccessToken()
    return await getitemResult(score, auth.accessToken)
  }
  return res.data
}
