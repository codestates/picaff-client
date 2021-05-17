import React from 'react'
import { InputContainer } from './InputForm.style'
type props = {
  label: string
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
}
export default function InputForm({ label, handleChange, type = 'text' }: props) {
  return (
    <InputContainer className='textinput container'>
      <label className='Input label'>{label}</label>
      <input type={type} onChange={handleChange} />
    </InputContainer>
  )
}
