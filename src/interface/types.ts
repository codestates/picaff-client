export type User = {
  name: string | undefined
  email: string | undefined
  password: string | undefined
  ConfirmPassword: string | undefined
}

export type CheckEmail = {
  isSend: boolean
  isPassEmail: boolean
  serialNum: string | undefined
  inputNum: string | undefined
}
