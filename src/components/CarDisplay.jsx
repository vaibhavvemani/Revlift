"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'

export const CarDisplay = ( props ) => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      // const car = await props.car
      const { data: fetchedData, error } = await createClient()
        .from('testloader')
        .select()
        .eq('car_name', props.car)
      setData(fetchedData)
    }
    fetchData()
  }, [props.car])


  return (
    <>
      <h1>{props.car}</h1>
      <ul>
        {data.map((car, index) => (
          <li key={index}>
            <h2>{car.car_name}</h2>
            <p>{car.car_description}</p>
            <img src={car.car_image} alt={car.car_name} />
          </li>
        ))}
      </ul>
    </>
  )
}
