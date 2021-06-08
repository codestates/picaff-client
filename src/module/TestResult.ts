import axios from 'axios'
import { TestResult } from 'interface'

export const getitemResult = async (
  score: (number | null)[],
  accessToken: string | null,
  cb?: () => Promise<string | null>
): Promise<TestResult> => {
  const Token = accessToken ? `Bearer ${accessToken}` : null
  const res = await axios.post<TestResult>(
    'http://localhost:4000/test',
    { score },
    {
      headers: { 'Content-Type': 'application/json', 'Authorization': Token },
    }
  )
  if (res.status === 401) {
    if (cb) accessToken = await cb()
    await getitemResult(score, accessToken)
  }
  return res.data
}
