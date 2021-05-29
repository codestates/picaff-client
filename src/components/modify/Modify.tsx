import axios from 'axios'
import { useAuth } from 'containers/ProvideAuth/ProvideAuth'
import { UserInfo } from 'interface'
import React from 'react'
import { useHistory } from 'react-router'
import { ModifyContainer } from './Modify.style'

type ModifyProps = {
  userInfo: UserInfo
}

export default function Modify({ userInfo }: ModifyProps) {
  const { name, email } = userInfo
  const auth = useAuth()
  const history = useHistory()
  const handleSignOut = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log('logout')
    auth.signout!(() => history.push({ pathname: '/' }))
  }

  const handleSignOff = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const res = await axios.delete('http://localhost:4000/user', {
      headers: { Authorization: auth.accessToken },
    })

    if (res.status === 202) {
      history.push({ pathname: '/' })
    } else {
      alert('다시 시도해 주세요')
    }
  }
  return (
    <ModifyContainer>
      <div>
        <span>name</span>
        <h2>{name}</h2>
      </div>
      <div>
        <span>email</span>
        <h2>{email}</h2>
      </div>
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
  )
}
