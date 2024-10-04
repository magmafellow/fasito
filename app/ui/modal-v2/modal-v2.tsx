'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { FaXmark } from 'react-icons/fa6'

import './modal-v2.css'
import { isElemInParent } from '@/app/lib/utility'

export default function ModalV2({
  children,
  id,
}: {
  children: any
  id: string
}) {
  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    const modalWrapper = document.querySelector(`div#${id}`)
    modalWrapper?.addEventListener('click', function (e) {
      console.log(e.target)
      const target = e.target as HTMLButtonElement
      const modalCloser = document.querySelector(`div#${id} .modal-closer`)
      if (
        target.classList.contains('modal-wrapper') ||
        isElemInParent(target, modalCloser)
      ) {
        modalWrapper.classList.remove('active')
      }
    })
  }, [])

  const onClickXHandler = () => {
    const modalWrapper = document.querySelector(`div#${id}`)
    modalWrapper?.classList.remove('active')
  }

  return (
    <div
      id={id}
      className={clsx(
        'modal-wrapper w-screen justify-center items-center fixed top-0 left-0 h-screen bg-opacity-30 bg-black'
        // {
        //   'hidden': !isOpened,
        //   'block': isOpened,
        // }
      )}
    >
      {/* template */}
      {/* <div className="modal relative h-[370px] px-4 pt-4 pb-2 w-[300px] rounded-md border border-gray-600">
          <h2 className="font-bold text-2xl mb-3">Title</h2>
          <p>Info paragraph 01</p>
          <p>Info paragraph 02</p>

          <FaXmark
            className="modal-closer absolute top-4 right-4 text-2xl text-white hover:text-sky-300 cursor-pointer"
          />
        </div> */}

      {children}
    </div>
  )
}

export function ModalV2Activator({ id }: { id: string }) {
  const onClickHandler = () => {
    const modalWrapper = document.querySelector(`div#${id}`)
    modalWrapper?.classList.add('active')
  }

  return (
    <button
      className="bg-yellow-500 text-black rounded py-4 px-4"
      onClick={onClickHandler}
    >
      activate modal {id}
    </button>
  )
}
