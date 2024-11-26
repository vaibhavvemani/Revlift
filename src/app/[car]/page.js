import { CarDisplay } from '@/components/CarDisplay'
const page = async ( {params} ) => {
  const slug = await (params)
  return (
    <>
      <CarDisplay car={decodeURI(slug.car)} />
    </>
  )
}

export default page
