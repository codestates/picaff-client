import axios from 'axios'
import Button from 'components/button/Button'
import InputForm from 'components/input-form/InputForm'
import { useAuth } from 'containers/ProvideAuth/ProvideAuth'
import { UserInfo } from 'interface'
import { useState } from 'react'
import { useHistory } from 'react-router'
type ModifyProps = {
  userInfo: UserInfo
  handleModifyForm: () => void
}

export default function InfoUpdate({ userInfo, handleModifyForm }: ModifyProps) {
  const [alertMessage, setAlertMessage] = useState<string>('') // new added by B. K
  const [UserInfo, setUserInfo] = useState<UserInfo>(userInfo) // new added by B. K for Modify
  const auth = useAuth()
  const history = useHistory()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // new added by B. K for Modify
    const { value } = e.target
    console.log(value)
    setUserInfo({
      ...UserInfo,
      userName: value,
    })
  }

  const handleModify = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // new added by B. K for Modify
    e.preventDefault()
    if (UserInfo.userName === userInfo.userName) {
      setAlertMessage('이름을 변경해 주세요.')
    } else {
      const response = await axios.patch(
        'http://localhost:4000/user',
        {
          userName: UserInfo.userName,
        },
        {
          headers: { Authorization: `Bearer ${auth.accessToken}` },
        }
      )
      setUserInfo({
        ...UserInfo,
        userName: response.data.userName,
      })
      handleModifyForm()
      history.push('/mypage/modify', UserInfo)
    }
  }

  const { userName } = UserInfo
  return (
    <InputForm>
      <input type='text' onChange={handleChange} placeholder={userName} value={userName} />
      <div className='modify'>
        <Button style='MenuBtn' type='button' value='변경하기' handleClick={handleModify} />
      </div>
      <span className='alertspan'>{alertMessage}</span>
    </InputForm>
  )
}
