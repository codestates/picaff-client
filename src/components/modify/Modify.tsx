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
  const { userName, email } = userInfo
  const auth = useAuth()
  const history = useHistory()
  const handleSignOut = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log('logout')
    auth.signout!(() => history.push({ pathname: '/' }))
  }

  const handleSignOff = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const res = await axios.delete('https://localhost:4000/user', {
      headers: { Authorization: auth.accessToken },
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

  const handleModify = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log('clicked!')
    await axios.patch(
      'https://localhost:4000/user',
      {
        userName: 'wow',
        password: 'isit?',
      },
      {
        headers: { Authorization: auth.accessToken },
      }
    )
    setisModify(!isModify)
  }

  return (
    <>
      {isModify ? (
        <ModifyContainer>
          <div>
            <span>name</span>
            <h2>
              <input type='text' placeholder='이곳에 이름을 입력하세요.' />
            </h2>
          </div>
          <div>
            <span>password</span>
            <h2>
              <input type='text' placeholder='이곳에 비밀번호를 입력하세요.' />
            </h2>
            <button onClick={handleModify} id='letsModify' className='textbtn'>
              수정하기
            </button>
          </div>
        </ModifyContainer>
      ) : (
        <ModifyContainer>
          <div>
            <span>name</span>
            <h2>{userName}</h2>
          </div>
          <div>
            <span>email</span>
            <h2>{email}</h2>
          </div>
          <button onClick={handleClick} id='letsModify' className='textbtn'>
            수정하기
          </button>
          <section className='buttonContainer'>
            <div>
              <label htmlFor='logout'>로그아웃</label>
              <button onClick={handleSignOut} id='logout' className='textbtn' />
            </div>
            <div>
              <label htmlFor='SignOut'>회원탈퇴</label>
              <button onClick={handleSignOff} id='SignOut' className='textbtn' />
            </div>
          </section>
        </ModifyContainer>
      )}
    </>
  )
}
