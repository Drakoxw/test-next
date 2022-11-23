import { Dispatch, SetStateAction } from 'react'

export type valuesFormLogin = { user?: string | null, pass?: string | null }
export type FormLogin = { user: string, pass: string }
export type T_PropsFormLogin = { 
  title?: string, 
  placeHolder?: string, 
  setValue:  Dispatch<SetStateAction<string>>
}

export interface IredirectRecoverProcces {
  seed?: string,
  email?:string,
  password?: string
}
