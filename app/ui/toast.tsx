'use client'

import clsx from 'clsx'
import { useState } from 'react'
import '@/app/ui/css/toast.css'
import { IoIosCloseCircle } from "react-icons/io";


export function Toast({
  className,
  close,
  children,
  id,
  doubleTheme,
}: {
  className?: string
  close?: boolean | undefined
  children?: any
  id: string
  doubleTheme?: boolean | undefined
}) {
  const commonStyle = 'relative max-w-96 mb-6 py-4 px-6 hidden rounded-md toast'
  const defaultStyleDoubleTheme =
    'dark:bg-zinc-200 dark:text-zinc-800 bg-zinc-900 text-zinc-200'
  const defaultStyle = 'bg-zinc-900 text-zinc-200'

  if (!className) className = ''

  return (
    <div
      id={id}
      className={clsx(commonStyle, {
        [defaultStyleDoubleTheme]: Boolean(doubleTheme) && !className,
        [defaultStyle]: !Boolean(doubleTheme) && !className,
        [className]: Boolean(className),
      })}
    >
      {children}
      { close && <IoIosCloseCircle className='text-xl absolute top-1 right-1 cursor-pointer hover:text-red-400'/>}
    </div>
  )
}

export function ToastBox({ children }: { children: any }) {
  return <div className="absolute right-10 bottom-10 max-w-80">{children}</div>
}

export function ToastHire(event: any, id: string, timeDisappear: number = 3000) {
  const toast = document.querySelector(`#${id}`)

  if(timeDisappear < 350) {
    return null
  }

  if (toast?.classList.contains('active')) {
    return null
  }

  toast?.classList.add('flex')
  toast?.classList.remove('hidden')
  toast?.classList.add('active')

  setTimeout(() => {
    toast?.classList.add('activated')
  }, 10)

  setTimeout(() => {
    toast?.classList.remove('activated')
    toast?.classList.add('descend')
  }, timeDisappear - 300)

  setTimeout(() => {
    toast?.classList.add('hidden')
    toast?.classList.remove('flex')
    toast?.classList.remove('active')
    toast?.classList.remove('activated')
    toast?.classList.remove('descend')
  }, timeDisappear)
}

export function ToastButton({ id, timeDisappear }: { id: string, timeDisappear?: number }) {
  if(!timeDisappear) {
    timeDisappear = 3000
  }
  return (
    <button
      className="py-4 px-5 font-semibold tracking-wide mr-5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg active:outline focus:outline transition"
      onClick={(e) => ToastHire(undefined, id, timeDisappear)}
    >
      toast me
    </button>
  )
}
