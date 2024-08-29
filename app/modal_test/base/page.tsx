import { Modal, ModalButton } from '@/app/ui/modal'

export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen pl-7 pt-10">
      <ModalButton message='soccer' id='modal-soccer' />
      <ModalButton message='grid' id='modal-grid' />

      <Modal id="modal-soccer">
        <h3 className="text-2xl font-bold">Soccer</h3>
        <p className="mb-2">I love this kind of sport.</p>
        <p className="mb-28">So I am glad to invite you too.</p>
        <div className='text-center'>
          <button className="bg-green-700 py-1 px-2 text-green-200 rounded">
            Accept
          </button>
        </div>
      </Modal>
      <Modal id="modal-grid">
        <h3 className='font-bold text-3xl text-center text-indigo-600 -mb-2'>Grid</h3>
        <div className='grid w-80 h-80 px-8 py-4 gap-4 grid-cols-2 grid-rows-2'>
          <div className='bg-indigo-400 hover:bg-indigo-700 rounded-lg'></div>
          <div className='bg-indigo-400 hover:bg-indigo-700 rounded-lg'></div>
          <div className='bg-indigo-400 hover:bg-indigo-700 rounded-lg'></div>
          <div className='bg-indigo-400 hover:bg-indigo-700 rounded-lg'></div>
        </div>
        <p className='text-center mb-3'>You can put to modal what you want</p>
      </Modal>
    </div>
  )
}
