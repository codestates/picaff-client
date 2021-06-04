import axios from 'axios'
import { itemResult, TestResult, UserInfo } from 'interface'

type Res = {
  userInfo: UserInfo
  testResult: TestResult[]
  likedCoffeeList: itemResult[]
  likedProductList: itemResult[]
}

export const requestUserInfo = async (auth: string, callback: (data: Res) => void) => {
  const response = await axios.get<Res>('http://localhost:4000/user', {
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${auth}`,
    },
    withCredentials: true,
  })

  callback(response.data)
}
