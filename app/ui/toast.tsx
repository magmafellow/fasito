'use client'

import clsx from 'clsx'
import { useState } from 'react'
import '@/app/ui/css/toast.css'
import { IoIosCloseCircle } from 'react-icons/io'
import { time } from 'console'

export function Toast({
  className,
  close,
  children,
  timeDisappear,
  id,
}: {
  className?: string
  close?: boolean | undefined
  children?: any
  timeDisappear?: number
  id: string
}) {
  if (!timeDisappear) timeDisappear = 1500
  const commonStyle = 'relative max-w-96 mb-6 py-4 px-6 hidden rounded-md toast'
  const defaultStyle = 'bg-zinc-900 text-zinc-200'

  if (!className) className = ''

  const onClickHandler = function () {
    const toast = document.querySelector(`#${id}`)
    clearTimeout(Number(toast?.getAttribute('preDeactivateTimeout')))
    clearTimeout(Number(toast?.getAttribute('deactivateTimeout')))
    preDeactivate(toast, 0)
    deactivate(toast, 300)
  }

  return (
    <div
      id={id}
      data-time-disappear={timeDisappear}
      className={clsx(commonStyle, {
        [defaultStyle]: !className,
        [className]: Boolean(className),
        'pr-8': Boolean(close),
      })}
    >
      {children}
      {close && (
        <IoIosCloseCircle
          className="text-xl absolute top-1.5 right-1.5 cursor-pointer hover:text-red-400"
          onClick={onClickHandler}
        />
      )}
    </div>
  )
}

export function ToastBox({ children }: { children: any }) {
  return (
    <div className="absolute overflow-hidden right-10 bottom-0 p-1 pb-10 max-w-80">
      {children}
    </div>
  )
}

export function ToastHire(event: any, id: string) {
  const toast = document.querySelector(`#${id}`)
  const timeDisappear = Number(toast?.getAttribute('data-time-disappear'))

  if (toast?.classList.contains('active')) {
    return null
  }

  preActivate(toast)
  activate(toast)
  preDeactivate(toast, timeDisappear)
  deactivate(toast, timeDisappear)
}

export function ToastButton({ id }: { id: string }) {
  return (
    <button
      className="py-4 px-5 font-semibold tracking-wide mr-5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg active:outline focus:outline transition"
      onClick={(e) => ToastHire(undefined, id)}
    >
      toast me
    </button>
  )
}

function preActivate(toast: any) {
  // toast.setAttribute('closed', 'no')

  toast?.classList.add('flex')
  toast?.classList.remove('hidden')
  toast?.classList.add('active')
}

function activate(toast: any) {
  setTimeout(() => {
    toast?.classList.add('activated')
  }, 10)
}

function preDeactivate(toast: any, timeDisappear: number) {
  const preDeactivateTimeout = setTimeout(() => {
    toast?.classList.remove('activated')
    toast?.classList.add('descend')
  }, timeDisappear)

  toast.setAttribute('preDeactivateTimeout', String(preDeactivateTimeout))
}

function deactivate(toast: any, timeDisappear: number) {
  const deactivateTimeout = setTimeout(() => {
    toast?.classList.add('hidden')
    toast?.classList.remove('flex')
    toast?.classList.remove('active')
    toast?.classList.remove('activated')
    toast?.classList.remove('descend')
  }, timeDisappear + 300)
  toast.setAttribute('deactivateTimeout', String(deactivateTimeout))
}
