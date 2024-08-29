import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-black pt-5 pl-3 text-white">
      <h1 className="font-bold text-[64px] mb-2">Modal component</h1>
      <h2 className="text-xl font-medium">
        Welcome to &lt;Modal&#47;&gt; component
      </h2>
      <p className="pl-2 mb-4">check out different use cases</p>
      <div className="pl-4 flex flex-col gap-2 mb-7">
        <div className="text-purple-400 flex items-center gap-2 text-lg">
          <div className="text-2xl font-bold">base</div>
          <Link
            className="hover:text-blue-300 hover:underline underline-offset-0"
            href="/modal_test/base"
          >
            /modal_test/base
          </Link>
        </div>
      </div>
      <div className="pl-2 flex gap-2">
        <Link
          className="bg-slate-600 text-neutral-50 text-base py-1 px-1.5 rounded-md hover:bg-slate-700 transition"
          href="/framework/modal/modal.tsx"
        >
          install tsx
        </Link>
        <Link
          className="bg-blue-600 saturate-[.58] text-neutral-50 text-base py-1 px-1.5 rounded-md hover:bg-blue-700 transition"
          href="/framework/modal/css/modal.css"
        >
          install css
        </Link>
      </div>
    </div>
  )
}
