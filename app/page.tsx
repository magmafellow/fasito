import Link from "next/link";

export default function Fasito() {
  return (
    <div className='min-h-screen bg-black text-white flex flex-col justify-center items-center'>
      <div className='font-bold text-[72px] text-purple-500'>Fasito</div>
      <div className='font-medium text-3xl'>Framework you do not need to install.</div>
      <div>just copy a file with desired component and follow an embed guide</div>
      <div className='pt-4 flex flex-col gap-4'>
        <div className='flex gap-4 items-center text-lg text-blue-400'>
          <div className='text-2xl font-bold'>Toast</div>
          <Link className='hover:text-blue-300 hover:underline underline-offset-1 cursor-pointer' href='/toast_test'>/toast_test</Link>
        </div>
        <div className='flex gap-4 items-center text-lg text-blue-400'>
          <div className='text-2xl font-bold'>Modal</div>
          <Link className='hover:text-blue-300 hover:underline underline-offset-1 cursor-pointer' href='/modal_test'>/modal_test</Link>
        </div>
      </div>
    </div>
  )
}