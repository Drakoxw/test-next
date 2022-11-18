import http from './http'
type RespIp = { ip: string}

export const GetIpClient = () => {
  return http('LOCAL_API').get<RespIp>('api/checkConnect/')
}