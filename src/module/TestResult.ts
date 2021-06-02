import axios from 'axios'
import { TestResult } from 'interface'

export const getitemResult = async (
  score: (number | null)[],
  accessToken: string | null
): Promise<TestResult> => {
  const res = await axios.post<TestResult>('http://localhost:4000/test', score, {
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}` },
    // token 보내줘야함
  })
  return res.data
}
