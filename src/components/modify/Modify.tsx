import axios from 'axios'
import Button from 'components/button/Button'
import { useAuth } from 'containers/ProvideAuth/ProvideAuth'
import { UserInfo } from 'interface'
import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import InfoUpdate from './InfoUpdate'
import { ModifyContainer } from './Modify.style'
import SignOff from './SignOff'

export default function Modify() {
  const [serialNum, setserialNum] = useState('')
  const [isModify, setisModify] = useState(false) // new added by B. K
  const [isSignOff, setisSignOff] = useState(false) // new added by B. K
  const location = useLocation<UserInfo>()
  const auth = useAuth()
  const history = useHistory()
  let { userName, email, type } = location.state

  const handleSignOut = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log('logout')
    auth.signout!(() => history.push({ pathname: '/' }))
  }

  async function SendCheckMail(email: string) {
    const res = await axios.post('http://localhost:4000/user/email?type=signoff', { email })
    const { serialnum } = res.data

    setserialNum(serialnum)
  }

  const handleSignOffClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // new added by B. K for Sign Off
    e.preventDefault()
    SendCheckMail(email)
    setisSignOff(!isSignOff)
  }

  return (
    <>
      <ModifyContainer>
        <div>
          <span>name</span>
          {!isModify ? (
            <div className='modifyContainer'>
              <h2>{userName}</h2>
              <div className='modify'>
                <Button
                  style='MenuBtn'
                  type='button'
                  value='수정하기'
                  handleClick={() => setisModify(!isModify)}
                />
              </div>
            </div>
          ) : (
            <div className='inputContainer'>
              <InfoUpdate
                userInfo={location.state}
                handleModifyForm={() => setisModify(!isModify)}
              />
            </div>
          )}
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
          {type === 'normal' &&
            (!isSignOff ? (
              <div>
                <label htmlFor='Signoff'>회원탈퇴</label>
                <button onClick={handleSignOffClick} id='Signoff' className='normalButton'></button>
              </div>
            ) : (
              <div className='SignOffContainer'>
                <SignOff serialNum={serialNum} />
              </div>
            ))}
        </section>
      </ModifyContainer>
    </>
  )
}
