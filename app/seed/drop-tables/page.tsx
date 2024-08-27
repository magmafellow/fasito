import { dropTables } from "@/seed/drop_table"

export default async function Page() {
  const res = await dropTables()
  
  return (
    <div className='min-h-screen text-emerald-300 flex justify-center items-center'>
      All tables have been dropped :|
    </div>
  )
}
