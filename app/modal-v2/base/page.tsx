import ModalV2, { ModalV2Activator } from '@/app/ui/modal-v2/modal-v2'
import { FaXmark } from 'react-icons/fa6'

export default function Page() {
  return (
    <div className="pt-8 pl-12">
      <h1 className="text-[56px] font-semibold mb-5">
        Best Waterfalls in the world!
      </h1>
      <p className="mb-5">
        Today we will explore water falls that deserve your attention.
      </p>
      <ul className="ml-8 mb-5 list-disc">
        <li className="">Linkoln waterfall</li>
        <li className="">Russian Siberian waterfall</li>
        <li className="">China waterfall</li>
      </ul>
      <div>
        <ModalV2Activator id="modal-01" />
      </div>
      <div></div>

      <ModalV2 id="modal-01">
        <div className="modal bg-slate-800 relative h-[370px] px-4 pt-4 pb-2 w-[300px] rounded-md border border-gray-600">
          <h2 className="font-bold text-2xl mb-3">Title</h2>
          <p>Info paragraph 01</p>
          <p>Info paragraph 02</p>

          <FaXmark
            className="modal-closer absolute top-4 right-4 text-2xl text-white hover:text-sky-300 cursor-pointer"
          />
        </div>
      </ModalV2>
    </div>
  )
}
