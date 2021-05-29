// import { TestResult, UserInfo } from 'interface'
// import { requestUserInfo } from 'module/mypage'
// import { useEffect, useState } from 'react'
import { MypageContainer } from './Mypage'

export default function Mypage() {
  // const [UserInfo, setUserInfo] = useState<UserInfo>({
  //   email: '',
  //   name: '',
  //   id: 0,
  //   auth: { accessToken: '' },
  // })
  // const [TestResult, setTestResult] = useState<TestResult[]>([])
  // const [LikeCoffees, setLikeCoffees] = useState<TestResult[]>([])
  // const [LikeProducts, setLikeProducts] = useState<TestResult[]>([])

  // const auth = useAuth()
  // useEffect(() => {
  //   async function getUserData() {
  //     requestUserInfo(auth.accessToken, 'user', (data) => {
  //       setUserInfo(data as UserInfo)
  //     })
  //     requestUserInfo(auth.accessToken, 'test', (data) => {
  //       setTestResult(data as TestResult[])
  //     })
  //     requestUserInfo(auth.accessToken, 'coffee', (data) => {
  //       setLikeCoffees(data as TestResult[])
  //     })
  //     requestUserInfo(auth.accessToken, 'product', (data) => {
  //       setLikeProducts(data as TestResult[])
  //     })
  //   }
  // }, [input])
  return (
    <MypageContainer>
      {/* <h1>{name}</h1>
      <h1>{email}</h1>
      <TestResultList testResult={TestResult} />
      <LikeItems CoffeeItem={LikeCoffees} type='coffee' />
      <LikeItems ProductItem={LikeProducts} type='product' /> */}
    </MypageContainer>
  )
}
