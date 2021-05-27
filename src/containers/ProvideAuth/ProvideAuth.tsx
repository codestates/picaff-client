import { createContext, useContext } from 'react'
import { Authorization } from 'interface'
import { useProvideAuth } from 'module/ProvideAuth'

const authContext = createContext<Authorization>({ accessToken: '' })

type props = {
  children: React.ReactNode
}

export default function ProvideAuth({ children }: props) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export function useAuth() {
  return useContext(authContext)
}
