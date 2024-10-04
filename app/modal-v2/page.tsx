import Link from "next/link"

export const metadata = {
  title: 'Modal v 02'
}

export default function Page() {
  return (
    <div className='pt-8 pl-12'>
      <h1 className='bg-gray-400 mb-2 border-gray-300 border-2 text-gray-800 inline-block py-3 px-10 rounded-xl font-bold text-3xl'>Modal 2</h1>
      <p className='text-sm mb-5 text-gray-500'>modal v.2 component docs</p>
      <h3 className='text-2xl font-bold'>Use cases:</h3>
      <ul className='ml-4 text-xl mb-2 list-disc'>
        <li className='ml-4 text-blue-300'><Link className='hover:underline underline-offset-4' href='#'>Base</Link></li>
      </ul>
      
    </div>
  )
}
