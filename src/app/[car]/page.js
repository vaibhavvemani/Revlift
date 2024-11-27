import { CarDisplay } from '@/components/CarDisplay'
const page = async ( {params} ) => {
  const slug = await (params)
  return (
    <>
      {/* <CarDisplay car={decodeURI(slug.car)} /> */}
      <CarDisplay />
    </>
  )
}

export default page
