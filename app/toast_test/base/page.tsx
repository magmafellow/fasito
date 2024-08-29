import { Toast, ToastBox, ToastButton, ToastHire } from '@/app/ui/toast'
import { MdOutlineMessage } from 'react-icons/md'

export default function Page() {
  return (
    <div className="min-h-screen pt-10 pl-10 md:pl-20 bg-neutral-950 text-neutral-200">
      <div className='flex flex-col md:max-w-[70%] md:mx-auto gap-4'>
        <ToastButton message="hey" id="hey-toast" />
        <ToastButton message="get it" id="got-toast" />
        <ToastButton message="#FreeDurov" id="freedurov-toast" />
      </div>

      <ToastBox>
        <Toast
          timeDisappear={3000}
          id="hey-toast"
          className="outline outline-1 outline-neutral-600 bg-neutral-950 text-neutral-300"
        >
          <div>hey there</div>
        </Toast>
        <Toast
          timeDisappear={5000}
          close
          id="got-toast"
          className="outline outline-1 outline-sky-300 text-sky-300 bg-sky-800"
        >
          <div className="flex items-center gap-4">
            <MdOutlineMessage />
            <div>You got it.</div>
          </div>
        </Toast>
        <Toast
          close
          className="bg-blue-800 text-blue-300"
          timeDisappear={7000}
          id="freedurov-toast"
        >
          <div>hey France Put out Pavel Durov!</div>
        </Toast>
      </ToastBox>
    </div>
  )
}
