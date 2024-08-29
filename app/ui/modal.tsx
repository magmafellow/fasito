'use client'

import { IoClose } from 'react-icons/io5'
import '@/app/ui/css/modal.css'
import { useEffect } from 'react'

export function Modal({ children, id }: { children: any; id: string }) {
  useEffect(function () {
    document.documentElement.addEventListener('click', (e) => {
      const modal = document.querySelector(`#${id} .modal`)
      if (!isElemInParent(e.target, modal)) {
        ModalCloseImmediate(id)
      }
    })
  })

  return (
    <div
      id={id}
      className="modal-wrapper fixed hidden items-center justify-center top-0 left-0 bg-opacity-50 bg-black h-screen w-screen"
    >
      <div className="modal max-w-[456px] pt-2 px-2 pb-1 rounded min-h-[256px] bg-white text-black relative">
        {children}
        <IoClose
          className="hover:text-red-900 cursor-pointer absolute right-1.5 top-1.5 text-3xl"
          onClick={() => ModalClose(id)}
        />
      </div>
    </div>
  )
}

export function ModalHire(id: string) {
  const modal = document.querySelector(`#${id}`)
  setTimeout(() => {
    modal?.classList.add('active')
  }, 5)

  setTimeout(() => {
    modal?.classList.add('activated')
  }, 20)

  document.documentElement.classList.add('lock')
}

export function ModalClose(id: string) {
  const modal = document.querySelector(`#${id}`)
  modal?.classList.remove('activated')

  setTimeout(() => {
    modal?.classList.remove('active')
  }, 240)

  document.documentElement.classList.remove('lock')
}

export function ModalCloseImmediate(id: string) {
  const modal = document.querySelector(`#${id}`)
  modal?.classList.remove('activated')

  modal?.classList.remove('active')
  document.documentElement.classList.remove('lock')
}

export function ModalButton({ id, message }: { id: string; message: string }) {
  return (
    <button
      className="py-1 px-1.5 bg-slate-500 rounded mr-4"
      onClick={() => ModalHire(id)}
    >
      {message}
    </button>
  )
}

// it could be imported from @/app/ui/lib
export function isElemInParent(elem: any, parent: any, deep: number = 0) {
  if (elem === null) {
    return false
  }
  if (elem === undefined || deep === 42) {
    return false
  }
  if (elem === parent) {
    return true
  } else {
    return isElemInParent(elem.parentNode, parent, deep + 1)
  }
}
