
export const setToStorage = (key: string, value: string): void => {
  if (typeof window !== 'undefined') {
    return window.localStorage.setItem(key, value);
  }
}

export const delItemOnStorage = (key: string): void => {
  if (typeof window !== 'undefined') {
    return window.localStorage.removeItem(key)
  }
}

export const clearLocalStorage = (): void => {
  if (typeof window !== 'undefined') {
    return window.localStorage.clear()
  }
}

export const getToStorage = (key: string): string => {
  let item = ''
  if (typeof window !== 'undefined') {
    const get = window.localStorage.getItem(key)
    if(get) item = get?.toString()
  }
  return item
}
