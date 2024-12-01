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
        .from('cars')
        .select()
        .eq('name', props.car)
      setData(fetchedData)
    }
    fetchData()
  }, [props.car])


  return (
    <>
      <ul>
        {data.map((car, index) => (
          <li key={index}>
            <h2>{car.name}</h2>
            <p>{car.description}</p>
            <img src={car.car_image} alt={car.name} />
          </li>
        ))}
      </ul>
    </>
  )
}
