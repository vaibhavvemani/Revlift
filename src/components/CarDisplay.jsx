"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'

export const CarDisplay = ( props ) => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data: fetchedData, error } = await createClient()
        .from('testloader')
        .select()
        // .eq('car_name', props.car)
      setData(fetchedData)
    }
    fetchData()
  }, [props.car])

  console.log(data)

  return (
    <>
      <p>{props.car}</p>
      <p>Car: {data.length > 0 ? data[0].car_name : 'No data found'}</p>
    </>
  )
}
