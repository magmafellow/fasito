'use client'

import { FaHeart } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import clsx from 'clsx'

export default function LikeButton({ id }: { id: string }) {
  const [liked, setLiked] = useState(false)

  const tl = gsap.timeline()

  const tlBox = gsap.timeline()
  const tlHelper1 = gsap.timeline()
  const tlHelper2 = gsap.timeline()
  const tlHelper3 = gsap.timeline()

  useEffect(() => {}, [])

  const onClickHandler = (e: any) => {
    ;[tl, tlHelper1, tlHelper2, tlHelper3].forEach((elem) => {
      elem.clear(), elem.restart()
    })

    tl.fromTo(
      `#${id} .main-heart`,
      { rotate: 0, color: '#e2e8f0' },
      { rotate: 20, duration: 0.7, scale: 1.28, color: '#b00000' }
    ).to(`#${id} .main-heart`, {
      rotate: 0,
      scale: 1,
      // color: '#e2e8f0',
      // duration: 1,
    })

    tlHelper1
      .fromTo(
        `#${id} .help-heart-01`,
        {
          x: 0,
          y: 0,
          width: 50,
          height: 50,
          scale: 0,
        },
        {
          x: 50,
          y: 25,
          width: 50,
          height: 50,
          scale: 0.3,
          duration: 0.7,
        }
      )
      .to(`#${id} .help-heart-01`, { scale: 0 })

    tlHelper2
      .fromTo(
        `#${id} .help-heart-02`,
        {
          x: 0,
          y: 0,
          width: 50,
          height: 50,
          scale: 0,
        },
        {
          x: -75,
          y: -15,
          width: 50,
          height: 50,
          scale: 0.5,
          duration: 0.5,
        }
      )
      .to(`#${id} .help-heart-02`, { scale: 0 })

    tlHelper3
      .fromTo(
        `#${id} .help-heart-03`,
        {
          x: 0,
          y: 0,
          width: 50,
          height: 50,
          scale: 0,
        },
        {
          x: 70,
          y: -60,
          width: 50,
          height: 50,
          scale: 0.3,
          duration: 0.6,
        }
      )
      .to(`#${id} .help-heart-03`, { scale: 0 })
  }

  return (
    <div
      id={id}
      className="like-wrapper border relative cursor-pointer flex justify-center items-center border-slate-400 w-[42px] h-[42px] rounded-full"
      onClick={onClickHandler}
    >
      <FaHeart
        className={clsx('main-heart text-2xl', {
          'text-red-700': liked,
          'text-slate-200': !liked,
        })}
      />
      <FaHeart className="help-heart-01 absolute text-3xl w-0 h-0" />
      <FaHeart className="help-heart-02 absolute text-3xl w-0 h-0" />
      <FaHeart className="help-heart-03 absolute text-3xl w-0 h-0" />
    </div>
  )
}
