import Button from 'components/button/Button'
import InputForm from 'components/input-form/InputForm'
import React, { useState } from 'react'
import { SignUpContainer } from './SignUp.style'
import { User, CheckEmail } from 'interface'
import axios from 'axios'
import { checkPassword } from '../../module/index'

export default function SignUp() {
  const [User, setUser] = useState<User>({ name: '', email: '', password: '', ConfirmPassword: '' })
  const [AlertMessage, setAlertMessage] = useState('')
  const [checkSerial, setcheckSerial] = useState<CheckEmail>({
    isSend: false,
    isPassEmail: false,
    serialNum: '',
    inputNum: '',
    disabled: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log(name, value)
    if (name === 'serial') {
      setcheckSerial({
        ...checkSerial,
        inputNum: value,
      })
    } else {
      setUser({
        ...User,
        [name]: value,
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!checkSerial.isPassEmail) {
      setAlertMessage('이메일 인증이 필요합니다')
    } else if (!User.name) {
      setAlertMessage('이름을 입력해주세요')
    } else if (!User.password) {
      console.log('wrong')
      setAlertMessage('비밀번호를 입력해주세요')
    } else if (User.password && typeof checkPassword(User.password) !== 'boolean') {
      const checkPW = checkPassword(User.password)
      typeof checkPW === 'string' && setAlertMessage(checkPW)
    } else if (User.password !== User.ConfirmPassword) {
      setAlertMessage('비밀번호가 일치하지 않습니다')
    } else {
      setAlertMessage('')
      const { name: userName, email, password } = User
      const res = await axios.post('http://localhost:4000/user/signin', {
        email,
        userName,
        password,
      })

      if (res.status === 201) {
        //router login
        // return <Redirect to='/login' />
      } else if (res.status === 404) {
        alert('다시 시도해주세요')
        // 페이지 새로고침
      }
    }
  }

  const handleEmailSend = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setcheckSerial({
      ...checkSerial,
      isSend: true,
    })
    if (!email) {
      alert('email을 입력해주세요')
    } else {
      console.log(email)
      const res = await axios.post('http://localhost:4000/user/email', { email })
      const { serialnum } = res.data

      // 잘못된 이메일(중복된 email) 입력 에러처리 해야함
      setcheckSerial({
        ...checkSerial,
        isSend: true,
        serialNum: serialnum,
      })
    }
  }

  const handleEmailConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(checkSerial.inputNum, checkSerial.serialNum)
    if (!checkSerial.serialNum) {
      alert('메일을 다시 요청해주세요')
      setcheckSerial({
        disabled: false,
        inputNum: '',
        isSend: false,
        serialNum: '',
        isPassEmail: false,
      })
    } else {
      if (checkSerial.inputNum === checkSerial.serialNum) {
        alert('인증 되었습니다')
        setcheckSerial({
          ...checkSerial,
          disabled: true,
          isPassEmail: true,
        })
      } else {
        alert('올바른 인증번호를 입력해주세요')
      }
    }
  }

  const { name, email, password, ConfirmPassword } = User
  return (
    <SignUpContainer>
      <form onSubmit={handleSubmit}>
        <InputForm>
          <label className='Input label'>Email</label>
          <input type='email' onChange={handleChange} name='email' value={email} />
          <div className='email'>
            <Button style='MenuBtn' type='button' value='인증요청' handleClick={handleEmailSend} />
          </div>
        </InputForm>
        {checkSerial.isSend && (
          <InputForm>
            <label className='Input label'>인증번호</label>
            <input
              type='text'
              onChange={handleChange}
              name='serial'
              value={checkSerial.inputNum}
              disabled={checkSerial.disabled}
            />
            <div className='email'>
              <Button style='MenuBtn' type='button' value='인증' handleClick={handleEmailConfirm} />
            </div>
          </InputForm>
        )}
        <InputForm>
          <label className='Input label'>name</label>
          <input type='text' onChange={handleChange} name='name' value={name} />
        </InputForm>
        <InputForm>
          <label className='Input label'>password</label>
          <input type='password' onChange={handleChange} name='password' value={password} />
        </InputForm>
        <InputForm>
          <label className='Input label'>Confirm password</label>
          <input
            type='password'
            onChange={handleChange}
            name='ConfirmPassword'
            value={ConfirmPassword}
          />
        </InputForm>
        {AlertMessage && (
          <div className='message'>
            <span>{AlertMessage}</span>
          </div>
        )}
        <div className='button'>
          <Button style='MainBtnBrown' type='submit' value='Sign Up' />
        </div>
      </form>
    </SignUpContainer>
  )
}
