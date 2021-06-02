import axios from 'axios'
import { useAuth } from 'containers/ProvideAuth/ProvideAuth'
import { TestResult, UserInfo } from 'interface'

type requestType = {
  access_token: string
  id_token?: string
}
type LoginInfo = {
  email: string
  password: string
}

// export const GetAccessToken = async () => {
//   localStorage.getItem(refreshToeken)
//   await axios.post('http://localhost:4000/user/token', { refreshToken }, {headers: {Credential: true}})
// }

export const requestOauth = async (
  endpoint: string,
  data: requestType | LoginInfo,
  callback: (userInfo: UserInfo) => void
) => {
  const response = await axios.post<UserInfo>(endpoint, data, {
    headers: { 'Content-Type': 'application/json', 'Credential': true },
  })
  console.log(response)
  const userInfo = response.data
  userInfo ? callback(userInfo) : alert('로그인에 실패하였습니다')
}

export const saveBeforeTest = async (
  testResult: TestResult,
  accessToken: string | null
): Promise<void> => {
  const res = await axios.patch(
    'http://localhost/user/test',
    { testId: testResult.testResultId },
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  )
  const auth = useAuth()
  if (res.status === 401 && auth.refreshAccessToken) {
    await auth.refreshAccessToken()
    await saveBeforeTest(testResult, auth.accessToken)
  }
}
