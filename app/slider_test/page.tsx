import Slider from "@/app/ui/slider";

export default function Page() {
  return (
    <div className='min-h-screen bg-slate-800 text-slate-400'>
      <div className='w-[700px] mx-auto pt-44'>
        <Slider images={['/slider/01.png', '/slider/02.png', '/slider/03.png']} />
      </div>
    </div>
  )
}
