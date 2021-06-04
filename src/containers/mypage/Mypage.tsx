import Button from 'components/button/Button'
import Likeitems from 'components/like-items/Likeitems'
import Modify from 'components/modify/Modify'
import TestResultList from 'components/test-result-list/TestResultList'
import { useAuth } from 'containers/ProvideAuth/ProvideAuth'
import { itemResult, TestResult, UserInfo } from 'interface'
import { coffeetempArr, productTempArr, testResultTempArr } from 'interface/sampledata'
import { requestUserInfo } from 'module/mypage'
import React, { useEffect, useState } from 'react'
import { MypageContainer } from './Mypage.style'

type response = {
  userInfo: UserInfo
  testResult: TestResult[]
  likedCoffeeList: itemResult[]
  likedProductList: itemResult[]
}

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
      requestUserInfo(accessToken, (data: response) => {
        const { userInfo, testResult, likedCoffeeList, likedProductList } = data
        setUserInfo(userInfo)
        setTestResult(testResult)
        setLikeCoffees(likedCoffeeList)
        setLikeProducts(likedProductList)
      })
    }
    auth.accessToken && getUserData(auth.accessToken)
  }, [auth])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setisModify(!isModify)
  }

  const { email, userName } = UserInfo
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
          <h3>내 커피 취향</h3>
          <div className='Container'>
            <TestResultList testResult={TestResult} />
          </div>
          <h3>좋아하는 커피</h3>
          <div className='Container'>
            <Likeitems Items={LikeCoffees} />
          </div>
          <h3>좋아하는 커피 용품</h3>
          <div className='Container'>
            <Likeitems Items={LikeProducts} />
          </div>
        </MypageContainer>
      )}
    </>
  )
}
