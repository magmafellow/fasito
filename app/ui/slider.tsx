'use client'
import '@/app/ui/css/slider.css'
import { useEffect } from 'react'

export default function Slider() {
  useEffect(() => {
    const slides = document.querySelectorAll('.slides img')
  }, [])
  
  return (
    <div className='slider'>
      <div className='slides'>
        <img src="/slider/01.png" alt="Image #1" />
        <img src="/slider/02.png" alt="Image #2" />
        <img src="/slider/03.png" alt="Image #3" />
      </div>
      <button className='prev   bg-sky-600 hover:bg-sky-500 hover:text-white focus:outline outline-sky-300 transition py-2 px-4 rounded-xl'>&#10094;</button>
      <button className='next   bg-sky-600 hover:bg-sky-500 hover:text-white focus:outline outline-sky-300 transition py-2 px-4 rounded-xl'>&#10095;</button>
    </div>
  )
}
