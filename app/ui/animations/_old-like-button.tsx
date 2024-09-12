'use client'

import { FaHeart } from 'react-icons/fa'
import anime from 'animejs'
import { useEffect, useRef } from 'react'
import styles from './like-button.module.scss'
import { getCurve } from '@/app/lib/like-curve'

export default function LikeButton({ id }: { id: string }) {
  const initObj: { restart: () => void } = { restart: () => {} } // for typescript not yield
  const animRef = useRef(initObj)
  useEffect(() => {
    animRef.current = anime({
      targets: `#${id} [data-role="helper"]`,
      width: '70px',
      height: '70px',
      keyframes: getCurve(1),
      easing: 'linear',
      autoplay: false,
      duration: 50,
    })
  }, [])

  const onClickHandler = () => {
    animRef.current.restart()
  }

  return (
    <div
      id={id}
      className="like-button border relative hover:cursor-pointer text-xl hover:text-red-600 hover:border-red-300 border-slate-400 p-2 rounded-full"
      onClick={onClickHandler}
    >
      <FaHeart />
      <FaHeart data-role="helper" className={`${styles.helper}`} />
      {/* <FaHeart data-role="helper" className={`${styles.helper}`} /> */}
      {/* <FaHeart data-role="helper" className={`${styles.helper}`} /> */}
    </div>
  )
}
