import Button from 'components/button/Button'
import Likeitems from 'components/like-items/Likeitems'
// import LandingComponent from 'components/main/Landing.style'
import Modify from 'components/modify/Modify'
import TestResultList from 'components/test-result-list/TestResultList'
import { useAuth } from 'containers/ProvideAuth/ProvideAuth'
import { itemResult, TestResult, UserInfo } from 'interface'
import { coffeetempArr, productTempArr, testResultTempArr } from 'interface/sampledata'
import { requestUserInfo } from 'module/mypage'
import React, { useEffect, useState } from 'react'
import { MypageContainer } from './Mypage.style'

export default function Mypage() {
  const [UserInfo, setUserInfo] = useState<UserInfo>({
    email: 'email',
    userName: 'userName',
    id: 0,
    auth: { accessToken: '' },
  })
  const [TestResult, setTestResult] = useState<TestResult[]>(testResultTempArr)
  const [LikeCoffees, setLikeCoffees] = useState<itemResult[]>(coffeetempArr)
  const [LikeProducts, setLikeProducts] = useState<itemResult[]>(productTempArr)
  const [isModify, setisModify] = useState(false)

  const auth = useAuth()
  useEffect(() => {
    async function getUserData(accessToken: string) {
      requestUserInfo(accessToken, 'user', (data) => {
        console.log('setUserInfo DATA@@@@@@@@@@@@@@@@@@', data)
        setUserInfo(data as UserInfo)
      })
      requestUserInfo(accessToken, 'test', (data) => {
        setTestResult(data as TestResult[])
      })
      requestUserInfo(accessToken, 'coffee', (data) => {
        setLikeCoffees(data as itemResult[])
      })
      requestUserInfo(accessToken, 'product', (data) => {
        setLikeProducts(data as itemResult[])
      })
    }
    auth.accessToken && getUserData(auth.accessToken)
    console.log('Mypage UserInfo::::::::::::', UserInfo)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setisModify(!isModify)
  }

  const { email, userName } = UserInfo
  console.log('렌더바로전 Mypage UserInfo::::::::::::', UserInfo)
  return (
    <>
      {isModify ? (
        <Modify userInfo={UserInfo} />
      ) : (
        <MypageContainer>
          <div className='modify'>
            <Button
              handleClick={handleClick}
              type='button'
              style='ModifyBtn'
              value='회원정보 변경하기'
            />
          </div>
          <span>name</span>
          <h1>{userName}</h1>
          <span>email</span>
          <h1>{email}</h1>
          <div>
            <h3>내 커피 취향</h3>
            <TestResultList testResult={TestResult} />
          </div>
          <div>
            <h3>좋아하는 커피</h3>
            <Likeitems Items={LikeCoffees} />
          </div>
          <div>
            <h3>좋아하는 커피 용품</h3>
            <Likeitems Items={LikeProducts} />
          </div>
        </MypageContainer>
      )}
    </>
  )
}
