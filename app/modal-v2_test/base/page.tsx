import ModalV2 from '@/app/ui/modal-v2'

export default function Page() {
  const modal = {
    css2wrapper: 'bg-rose-950',
    css2modal:
      'bg-amber-700 py-3 px-4 text-amber-500 min-h-[300px] rounded-2xl mx-4',
    css2button:
      'py-2 px-4 bg-stone-700 text-stone-400 hover:text-stone-300 rounded',
    css2close: 'text-2xl text-stone-300 hover:text-stone-400 transition',
    btnText: 'click',
  }

  return (
    <div className="min-h-screen bg-slate-800 text-slate-300 flex justify-center items-center">
      <ModalV2 {...modal}>
        {/* content in modal box goes here below */}
        <div className="flex flex-col">
          <h2 className="text-3xl text-amber-300 font-medium mb-4">Action</h2>
          <div className="h-[1px] w-full bg-amber-500 mb-2.5"></div>
          <p className="mb-4 min-h-[150px]">
            It makes it more strong when you're taking action.
          </p>
          <div className="flex justify-around uppercase text-4xl font-black group/we ">
            <div className='group-hover/we:text-stone-900 transition'>x</div>
            <div className='group-hover/we:text-stone-900 transition'>y</div>
            <div className='group-hover/we:text-stone-900 transition'>z</div>
          </div>
        </div>
      </ModalV2>
    </div>
  )
}
