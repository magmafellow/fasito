export default function DefaultWrapper ({children}: {children: any}) {
  return (
    <div className='min-h-screen py-2 px-4 bg-slate-800 text-slate-200'>
      {children}
    </div>
  )
}