export const checkPassword = (password: string): boolean | string => {
  if (!password) return '비밀번호를 입력하세요'
  if (password && !/.{8,}/gi.test(password)) return '비밀밀번호는 8자 이상이여야 합니다'
  if (
    password &&
    !/^(?=.*[a-z])(?=.*\d)(?=.*[#@+\-$!%*?&])[A-Za-z\d#@+\-$!%*?&]{8,}/gi.test(password)
  ) {
    return '비밀번호는 알파벳 숫자 특수기호를 하나 이상 포함해야 합니다'
  }
  return true
}
