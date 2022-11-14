import axios, { AxiosError, AxiosInstance } from 'axios'
import { logDev } from '../utils/console'

type TYPE_URL = 'LOCALHOST' | 'APP_AVEONLINE'

function createAxios() {
  const getURL = (typeURL: TYPE_URL): string | undefined => {
    if (typeURL === 'LOCALHOST') return 'http://localhost/api/'
    if (typeURL === 'APP_AVEONLINE') return 'https://aveonline.co/api/'
  }

  return (typeURL: TYPE_URL = 'APP_AVEONLINE'): AxiosInstance => {
    const instance = axios.create({
      baseURL: getURL(typeURL as TYPE_URL),
      withCredentials: false
    })

    const handleError = (error: AxiosError) => {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response?.status > 300) {
          logDev('ErrorHttp', { statusCode: error.response?.status, error: error.response })
        }
      }
    }

    instance.interceptors.response.use((response) => response, handleError)
    return instance
  }
}

const httpInstance = createAxios()

export default httpInstance
