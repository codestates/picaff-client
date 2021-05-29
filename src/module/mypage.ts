import axios from 'axios'
import { itemResult, TestResult, UserInfo } from 'interface'

type Res = {
  userInfo: UserInfo
  testResult: TestResult[]
  likedCoffeeList: itemResult[]
  likedProductList: itemResult[]
}

export const requestUserInfo = async (
  auth: string,
  type: 'user' | 'test' | 'coffee' | 'product',
  callback: (data: UserInfo | itemResult[] | TestResult[]) => void
) => {
  const response = await axios.get<Res>('http://localhost:4000/user', {
    headers: {
      'Content-Type': 'application/json',
      'Credential': true,
      'authorization': `Bearer ${auth}`,
    },
  })

  const { userInfo, testResult, likedCoffeeList, likedProductList } = response.data
  switch (type) {
    case 'user':
      callback(userInfo)
      break
    case 'test':
      callback(testResult)
      break
    case 'coffee':
      callback(likedCoffeeList)
      break
    case 'product':
      callback(likedProductList)
      break
    default:
      break
  }
}
