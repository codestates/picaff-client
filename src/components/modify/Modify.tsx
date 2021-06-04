import axios from 'axios'
import { useAuth } from 'containers/ProvideAuth/ProvideAuth'
import { UserInfo } from 'interface'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { ModifyContainer } from './Modify.style'

type ModifyProps = {
  userInfo: UserInfo
}

export default function Modify({ userInfo }: ModifyProps) {
  const [isModify, setisModify] = useState(false)
  let { userName, email } = userInfo
  const auth = useAuth()
  const history = useHistory()
  const [alertMessage, setAlertMessage] = useState<string>('')
  const [UserInfo, setUserInfo] = useState<UserInfo>(userInfo)

  const handleSignOut = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log('logout')
    auth.signout!(() => history.push({ pathname: '/' }))
  }

  const handleSignOff = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    const res = await axios.delete('https://localhost:4000/user', {
      headers: { Authorization: `Bearer ${auth.accessToken}` },
    })

    if (res.status === 202) {
      history.push({ pathname: '/' })
    } else {
      alert('다시 시도해 주세요')
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setisModify(!isModify)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    console.log(value)
    setUserInfo({
      ...UserInfo,
      userName: value,
    })
  }

  const handleModify = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (UserInfo.userName === userInfo.userName) {
      setAlertMessage('이름을 변경해 주세요.')
    } else {
      setisModify(!isModify)
      const response = await axios.patch(
        'https://localhost:4000/user',
        {
          userName: UserInfo.userName,
        },
        {
          headers: { Authorization: `Bearer ${auth.accessToken}` },
        }
      )
      console.log(response.data)
      setUserInfo({
        ...UserInfo,
        userName: response.data.userName,
      })
    }
  }

  return (
    <>
      {isModify ? (
        <ModifyContainer>
          <div>
            <span>name</span>
            <h2>
              <input
                type='name'
                className='modifyInput'
                placeholder={userName}
                onChange={handleChange}
              />
              <span className='alertspan'>{alertMessage}</span>
            </h2>
          </div>
          <button onClick={handleModify} id='letsModify' className='modifyButton'>
            수정하기
          </button>
        </ModifyContainer>
      ) : (
        <ModifyContainer>
          <div>
            <span>name</span>
            <h2>
              {UserInfo.userName}
              <button onClick={handleClick} id='letsModify' className='modifyButton'>
                이름 변경
              </button>
            </h2>
          </div>
          <div>
            <span>email</span>
            <h2>{email}</h2>
          </div>
          <section className='buttonContainer'>
            <div>
              <label htmlFor='logout'>로그아웃</label>
              <button onClick={handleSignOut} id='logout' className='normalButton'></button>
            </div>
            <div>
              <label htmlFor='SignOut'>회원탈퇴</label>
              <button onClick={handleSignOff} id='SignOut' className='normalButton'></button>
            </div>
          </section>
        </ModifyContainer>
      )}
    </>
  )
}
