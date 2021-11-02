import { useRouter } from 'next/dist/client/router'
import React, { ReactNode } from 'react'

const Sample = (): ReactNode => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      id: { id }
    </div>
  )
}

export default Sample
