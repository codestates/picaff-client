import axios from 'axios'
import { useEffect, useState } from 'react'

export function useProvideAuth() {
  const [accessToken, setaccessToken] = useState<string | null>(null)

  const setToken = (accessToken: string, refreshToken: string) => {
    sessionStorage.setItem('accessToken', JSON.stringify(accessToken))
    if (refreshToken) sessionStorage.setItem('refreshToken', JSON.stringify(refreshToken))
  }

  const getToken = () => {
    const accessToken = sessionStorage.getItem('accessToken')
    accessToken && setaccessToken(JSON.parse(accessToken))
  }

  useEffect(() => {
    getToken()
  }, [])

  const signin = (accessToken: string, refreshToken: string, cb: () => void) => {
    setToken(accessToken, refreshToken)
    setaccessToken(accessToken)
    cb()
  }

  const refreshAccessToken = async (): Promise<string | null> => {
    const refreshToken = sessionStorage.getItem('refreshToken')
    if (refreshToken) {
      const res = await axios.post(
        'https://localhost:4000/user/token',
        { refreshToken },
        { withCredentials: true }
      )

      sessionStorage.setItem('accessToken', JSON.stringify(res.data.cssessToken))
      setaccessToken(res.data.cssessToken)
    }
    return accessToken
  }

  const signout = (cb: () => void) => {
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('refreshToken')
    setaccessToken(null)
    cb()
  }

  return {
    accessToken,
    refreshAccessToken,
    signin,
    signout,
  }
}
