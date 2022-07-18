import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

export interface IUserContext {
  user: string
  handleUser: (name: string) => void
}

type UserContextProps = {
  children: ReactNode
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: UserContextProps): JSX.Element => {
  const [user, setUser] = useState<string>('')

  const handleUser = (user: string) => {
    setUser(user)
  }

  return <UserContext.Provider value={{ user, handleUser }}>{children}</UserContext.Provider>
}

export const useUser = (): IUserContext => useContext(UserContext)
