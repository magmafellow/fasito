import { Toast, ToastBox, ToastButton, ToastHire } from "../ui/toast";
import { MdOutlineMessage } from "react-icons/md";


export default function Page() {
  return (
    <div className="min-h-screen pt-10 pl-20 bg-neutral-950 text-neutral-200">
      <ToastButton id='toast-01' timeDisappear={1500} />
      <ToastButton id='toast-02' timeDisappear={10000} />
      
      <ToastBox>
        <Toast className='outline outline-1 outline-neutral-600 bg-neutral-950 text-neutral-300' id='toast-01'>
          <div>hey there</div>
        </Toast>
        <Toast close id='toast-02' className='outline outline-1 outline-sky-300 text-sky-300 bg-sky-800'>
          <div className='flex items-center gap-4'>
            <MdOutlineMessage />
            <div>You got it.</div>
          </div>
        </Toast>
      </ToastBox>
    </div>
  )
}
