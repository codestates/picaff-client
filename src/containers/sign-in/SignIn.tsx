import Button from 'components/button/Button'
import InputForm from 'components/input-form/InputForm'
import React, { useState } from 'react'
import { SignInContainer } from './SignIn.style'
import { User } from 'interface'

export default function SignIn() {
  const [User, setUser] = useState<User>({ name: '', email: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log(name, value)
    setUser({
      ...User,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const { name, email, password } = User

  return (
    <SignInContainer>
      <form onSubmit={handleSubmit}>
        <InputForm>
          <label className='Input label'>Email</label>
          <input type='email' onChange={handleChange} name='email' value={email} />
        </InputForm>
        <InputForm>
          <label className='Input label'>name</label>
          <input type='text' onChange={handleChange} name='name' value={name} />
        </InputForm>
        <InputForm>
          <label className='Input label'>name</label>
          <input type='password' onChange={handleChange} name='password' value={password} />
        </InputForm>
        <div>
          <Button style='MainBtnBrown' type='submit' value='Sign In' />
        </div>
      </form>
    </SignInContainer>
  )
}
