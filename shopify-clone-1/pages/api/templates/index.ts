// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(sampleTemplate)
}


const sampleTemplate = {
  "name": "Default product template",
  "wrapper": "div#div_id.div_class[attribute-one=value]",
  "sections": {
    "main": {
      "type": "product"
    }
  },
  "order": [
    "main"
  ]
}