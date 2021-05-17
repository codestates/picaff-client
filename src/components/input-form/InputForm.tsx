import { InputContainer } from './InputForm.style'
type props = {
  label: string
}
export default function InputForm({ label }: props) {
  return (
    <InputContainer className='textinput container'>
      <label className='Input label'>{label}</label>
      <input type='text' />
    </InputContainer>
  )
}
