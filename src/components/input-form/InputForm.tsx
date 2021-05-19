import { InputContainer } from './InputForm.style'

type props = {
  children: React.ReactNode
}
export default function InputForm({ children }: props) {
  return <InputContainer className='textinput container'>{children}</InputContainer>
}
