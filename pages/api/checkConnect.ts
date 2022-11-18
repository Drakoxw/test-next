import requestIp from 'request-ip'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function myRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const detectedIp = requestIp.getClientIp(req)
  res.status(200).json({ ip: detectedIp })
}