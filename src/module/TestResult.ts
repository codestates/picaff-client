import axios from 'axios'
import { TestResult } from 'interface'

export const getTestResult = async (score: (number | null)[]): Promise<TestResult> => {
  const res = await axios.post<TestResult>('http://localhost:4000/test', score, {
    headers: { 'Content-Type': 'application/json' },
    // token 보내줘야함
  })
  return res.data
}