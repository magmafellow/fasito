'use client'

import anime from "animejs"
import { useEffect, useRef } from "react"

export default function Box() {
  const initObj: {restart: () => void} = {restart: () => {}} // for typescript not yield
  const animRef = useRef(initObj)
  useEffect(() => {
    animRef.current = anime({
      targets: '.box',
      width: 100,
      height: 100,
      autoplay: false,
    })
  }, [])

  const onClickHandler = () => {
    animRef.current.restart()
  }
  
  return (
    <div className='box w-10 h-10 bg-green-800' onClick={onClickHandler}>

    </div>
  )
}