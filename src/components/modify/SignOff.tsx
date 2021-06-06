import axios from 'axios'
import Button from 'components/button/Button'
import InputForm from 'components/input-form/InputForm'
import { useAuth } from 'containers/ProvideAuth/ProvideAuth'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

type SignOffProps = {
  serialNum: string
}

export default function SignOff({ serialNum }: SignOffProps) {
  const [checkSerial, setcheckSerial] = useState<string>('')
  const [alertMessage, setalertMessage] = useState('')
  const auth = useAuth()
  const history = useHistory()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcheckSerial(e.target.value)
  }
  const handleSignOff = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(serialNum)
    e.preventDefault()
    if (serialNum !== checkSerial) {
      setalertMessage('인증번호가 맞지 않습니다.')
    } else {
      const res = await axios.delete('http://localhost:4000/user', {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      })
      if (res.status === 200) {
        auth.signout && auth.signout(() => history.push({ pathname: '/' }))
      } else {
        alert('다시 시도해 주세요')
      }
    }
  }

  return (
    <InputForm>
      <label>Email에 보내진 인증번호를 확인해주세요</label>
      <input type='text' onChange={handleChange} value={checkSerial} />
      <div className='email'>
        <Button style='MenuBtn' type='button' value='탈퇴하기' handleClick={handleSignOff} />
      </div>
      <span className='alertspan'>{alertMessage}</span>
    </InputForm>
  )
}
