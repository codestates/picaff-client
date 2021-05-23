import axios from 'axios'

// api 문서 최신화 해주세요ㅠㅠ
export const getTestResult = async (score: (number | null)[]) /* : TestResult */ => {
  const res = await axios.post('http://localhost:4000/test', score, {
    headers: { 'Content-Type': 'application/json' },
  })
  return res.data
}
