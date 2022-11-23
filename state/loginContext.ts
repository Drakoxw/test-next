
import { FormLogin } from '@interfaces/index';
import { useContext, createContext } from 'react'

export const FormContext = createContext<FormLogin>({ user: '', pass: '' })

export function useFormLoginCtx() {
  return useContext(FormContext);
}