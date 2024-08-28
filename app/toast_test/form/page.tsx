'use client'

import { addUser } from '@/app/lib/actions/users'
import { Toast, ToastBox, ToastHire } from '@/app/ui/toast'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'

export default function Page() {
  const [message, dispatch] = useFormState(addUser, undefined)
  console.log(message)

  useEffect(() => {
    if (message?.error) ToastHire(undefined, 'toast-error')
    if (message?.message) ToastHire(undefined, 'toast-success')
  }, [message])

  return (
    <form
      className="min-h-screen text-neutral-50 bg-neutral-950 flex flex-col justify-center items-center"
      action={dispatch}
    >
      <div>
        <label htmlFor="username">username</label>
      </div>
      <div className="mb-4">
        <input
          className="bg-neutral-900 border rounded-md border-neutral-500 focus:outline outline-indigo-300 py-2 px-3"
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div>
        <label htmlFor="passwrod">password</label>
      </div>
      <div className="mb-4">
        <input
          className="bg-neutral-900 border rounded-md border-neutral-500 focus:outline outline-indigo-300 py-2 px-3"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div>
        <label htmlFor="gender">gender</label>
      </div>
      <div className="mb-4">
        <input
          className="bg-neutral-900 border rounded-md border-neutral-500 focus:outline outline-indigo-300 py-2 px-3"
          type="text"
          name="gender"
          id="gender"
        />
      </div>
      <div className="">
        <button className="py-4 px-5 font-semibold tracking-wide mr-5 bg-indigo-800 hover:bg-indigo-700 text-indigo-300 rounded-lg active:outline focus:outline transition">
          submit
        </button>
      </div>
      <ToastBox>
        <Toast timeDisappear={15000} close={true} id="toast-error">
          <div>{message?.error}</div>
        </Toast>
        <Toast timeDisappear={2000} id="toast-success">
          <div>{message?.message}</div>
        </Toast>
      </ToastBox>
    </form>
  )
}
