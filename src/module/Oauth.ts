import axios from 'axios'
import { UserInfo } from 'interface'

type requestType = {
  access_token: string
  id_token?: string
}

export const requestOauth = async (
  endpoint: string,
  data: requestType,
  callback: (userInfo: UserInfo) => void
) => {
  const response = await axios.post(endpoint, data, {
    headers: { 'Content-Type': 'application/json', 'Credential': true },
  })
  console.log(response.data)
  const userInfo = response.data as UserInfo
  userInfo ? callback(userInfo) : alert('로그인에 실패하였습니다')
}
