'use client'

import { useState } from 'react'
import { FaRectangleXmark } from 'react-icons/fa6'
import '@/app/ui/css/modal-v2.css'
import clsx from 'clsx'

export default function ModalV2({
  children,
  css2wrapper,
  css2modal,
  css2button,
  css2close,
  btnText,
}: {
  children: any
  css2wrapper: string
  css2modal: string
  css2button: string
  css2close: string
  btnText: string
}) {
  const [hired, setHired] = useState(false)

  const onWrapperClickHandler = (e: any) => {
    const target = e.target as HTMLButtonElement
    if (target.dataset.materia === 'modal-wrapper') {
      setHired(false)
    }
  }

  return (
    <>
      {hired && (
        <div
          data-materia="modal-wrapper"
          className={clsx(
            'min-h-screen flex justify-center items-center w-full fixed top-0 left-0',
            css2wrapper
          )}
          onClick={onWrapperClickHandler}
        >
          <div data-materia="modal" className={clsx('relative', css2modal)}>
            {children}
            <FaRectangleXmark
              className={clsx(
                'absolute top-2 right-2 cursor-pointer',
                css2close
              )}
              onClick={() => setHired(false)}
            />
          </div>
        </div>
      )}
      <button className={css2button} onClick={() => setHired(!hired)}>
        {btnText}
      </button>
    </>
  )
}
