import Button from 'components/button/Button'
import InputForm from 'components/input-form/InputForm'
import React, { useState } from 'react'
import { SignInContainer } from './SignIn.style'

export default function SignIn() {
  const [email, setemail] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setemail(e.target.value)
  }
  return (
    <SignInContainer>
      <form>
        <InputForm label='Email' handleChange={handleChange} type='email' />
        <Button style='MainBtnIvory' />
        <input type='submit' value='Submit' />
      </form>
    </SignInContainer>
  )
}
