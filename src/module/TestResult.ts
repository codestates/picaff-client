import axios from 'axios'
import { useAuth } from 'containers/ProvideAuth/ProvideAuth'
import { TestResult } from 'interface'

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
