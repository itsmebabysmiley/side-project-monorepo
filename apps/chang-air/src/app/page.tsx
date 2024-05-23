'use client'

import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [isLoading, setLoading] = useState(false)
  const handleClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <>
      <Button
        startIcon={<Mail />}
        endIcon={<Mail />}
        onClick={handleClick}
        loading={isLoading}
      >
        Log in
      </Button>
    </>
  )
}
