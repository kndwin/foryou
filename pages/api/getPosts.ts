import { NextApiResponse } from 'next'

export default function handler (_, res: NextApiResponse) {
  res.send("Api test!")
}
