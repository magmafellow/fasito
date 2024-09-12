export default function DefaultWrapperCenter({ children }: { children: any }) {
  return (
    <div className="min-h-screen bg-slate-800 text-slate-200 flex justify-center items-center">
      {children}
    </div>
  )
}