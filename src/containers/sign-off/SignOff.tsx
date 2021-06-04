import axios from 'axios'
import { UserInfo } from 'interface'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { ModifyContainer } from './Modify.style'

type SignOffProps = {
  userInfo: UserInfo
}

export default function SignOff({ userInfo }: SignOffProps) {
  const [UserInfo, setUserInfo] = useState<UserInfo>(userInfo)
  const history = useHistory()
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

  return (
    <>
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
    )
  </>
}