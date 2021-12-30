import { createContext } from 'react'


export interface AuthContextInterface {
    login: Boolean;
    setLogin: any

}
export const AuthContext = createContext<AuthContextInterface | null>(null);