import Link from "next/link";

export default function Page() {
  return (
    <div className='min-h-screen flex justify-center items-center bg-neutral-950 text-zinc-300'>
      <ul className='flex flex-col gap-4'>
        <li className='flex items-center gap-2'>
          <div className='text-red-400'>drop all tables</div>
          <div>
            <Link className='underline text-lg hover:text-zinc-500' href='/seed/drop-tables'>/seed/drop-tables</Link>
          </div>
        </li>
        <li className='flex items-center gap-2'>
          <div className='text-green-400'>seed all data</div>
          <div>
            <Link className='underline text-lg hover:text-zinc-500' href='/seed/seed-all-data'>/seed/seed-all-data</Link>
          </div>
        </li>
        <li className='flex items-center gap-2'>
          <div className='text-rose-400'>clear all tables</div>
          <div>
            <Link className='underline text-lg hover:text-zinc-500' href='/seed/clear-tables'>/seed/clear-tables</Link>
          </div>
        </li>
      </ul>
    </div>
  )
}
