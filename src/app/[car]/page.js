import React from 'react'
import CarSearch from '@/components/CarSearch'
const page = async ( {params} ) => {
  const slug = await (params)
  return (
    <>
      <p>{slug.car}</p>
    </>
  )
}

export default page
