'use client'

import gsap from 'gsap'
import { useEffect } from 'react'

export default function Circle() {
  const tl = gsap.timeline()

  useEffect(() => {
    tl.to('.circle', { width: 200, height: 200, duration: 1 })
    // gsap.to('.circle', { duration: 2, x: 100 })
    // gsap.to('.circle', { duration: 1, y: 200 })
    // gsap.to('.circle', { duration: 3, rotation: 360 })
  }, [])

  return <div className="circle w-32 h-32 bg-slate-500"></div>
}
