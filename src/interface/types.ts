export type User = {
  name: string | undefined
  email: string | undefined
  password: string | undefined
  ConfirmPassword?: string | undefined
}

export type CheckEmail = {
  isSend: boolean
  isPassEmail: boolean
  serialNum: string | undefined
  inputNum: string | undefined
  disabled: boolean
}

type Authorization = {
  accessToken: string
}

export type UserInfo = {
  email: string
  name: string
  id: number
  author: Authorization
}

export interface KakaoLoginResponse {
  token_type: string
  access_token: string
  expires_in: string
  refresh_token: string
  refresh_token_expires_in: number
  scope: string
}

export type Test = {
  title: string
  value: number
}
