import { createContext, useContext } from 'react'
type Context = { ipClient: string }

export const GlobalCtx = createContext<Context>({
  ipClient: ''
});

export function useGlobalCtx() {
  return useContext(GlobalCtx);
}