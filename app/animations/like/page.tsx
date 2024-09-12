import DefaultWrapper from "@/app/ui/default-wrapper";
import Link from "next/link";

export default function Page() {
  return (
    <DefaultWrapper>
      <h1 className='text-3xl font-bold mb-7'>Like component</h1>
      <p className='mb-4'>Useful to cards, posts etc.</p>
      <h3 className='text-lg font-semibold'>Variants:</h3>
      <ul className='list-disc pl-8'>
        <li><Link className='hover:underline hover:text-sky-400' href='/animations/like/base'>Base</Link></li>
      </ul>
    </DefaultWrapper>
  )
}