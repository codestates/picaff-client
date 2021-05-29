import { useState } from 'react'

export function useProvideAuth() {
  const [accessToken, setaccessToken] = useState<string | null>(null)

  const signin = (accessToken: string, cb: () => void) => {
    setaccessToken(accessToken)
    cb()
  }

  const signout = (cb: () => void) => {
    setaccessToken(null)
    cb()
  }

  return {
    accessToken,
    signin,
    signout,
  }
}
