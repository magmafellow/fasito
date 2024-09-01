'use client'
import '@/app/ui/css/slider.css'
import { useEffect, useState } from 'react'

export default function Slider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState('default')
  const indicatorsCount = images.length
  
  useEffect(() => {
    const slides = document.querySelectorAll('.slides img')
    slides.forEach((slide) => {
      slide.classList.remove('active')
      slide.classList.remove('back')
      slide.classList.remove('forward')
      slide.classList.remove('fade')
    })

    slides[index].classList.add('active')
    if(direction === 'forward') slides[index].classList.add('forward')
    if(direction === 'back')slides[index].classList.add('back')
    if(direction === 'jump')slides[index].classList.add('fade')
  }, [index])

  const nextSlide = () => {
    setDirection('forward')
    const slides = document.querySelectorAll('.slides img')
    if (index + 1 >= slides.length) setIndex(0)
    else setIndex(index + 1)
  }
  const backSlide = () => {
    setDirection('back')
    const slides = document.querySelectorAll('.slides img')
    if (index - 1 < 0) setIndex(slides.length - 1)
    else setIndex(index - 1)
  }

  const indicators = []
  for (let i = 0; i < indicatorsCount; i++) {
    indicators.push(<div className={`indicator ${index===i && 'active'}`} onClick={() => {
      setDirection('jump')
      setIndex(i)
    }}></div>)
  }

  return (
    <div className="slider">
      <div className="slides">
        {images.map(image => <img src={image} alt="slider image" />)}
      </div>
      <button
        className="prev   bg-sky-600 hover:bg-sky-500 hover:text-white focus:outline outline-sky-300 transition py-2 px-4 rounded-xl"
        onClick={backSlide}
      >
        &#10094;
      </button>
      <button
        className="next   bg-sky-600 hover:bg-sky-500 hover:text-white focus:outline outline-sky-300 transition py-2 px-4 rounded-xl"
        onClick={nextSlide}
      >
        &#10095;
      </button>
      <div className='indicator-box'>
        {indicators}
      </div>
    </div>
  )
}
