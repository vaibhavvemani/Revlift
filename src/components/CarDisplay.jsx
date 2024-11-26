"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'

export const CarDisplay = ( props ) => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const {data, error} = await createClient()
        .from('testloader')
        .select()
        .eq('car_name', props.car)

      setData(data)
    }
    fetchData()
  }, [])

  console.log(data)

  return (
    <>
      <p>{props.car}</p>
      <p>Car: {data.car_name}</p>

    </>
  )
}
