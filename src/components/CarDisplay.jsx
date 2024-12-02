"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import "@/styles/cardisplay.css"
export const CarDisplay = ( props ) => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await createClient()
        .from('cars')
        .select()
        .eq('name', props.car)
      setData(data)
      console.log(data)
    }
    fetchData()
  }, [props.car])
  
  let car = data[0]

  return (
    <div className="display-container">
      <h1>{car?.name}</h1>
      <div className="left-container">
        <Image className='car-image' src="/911_GT3_RS.jpg" alt={car?.name} width={720} height={450} />
        <p className='description'>{car?.description}</p>
      </div>
      <div className="right-container">
        <h2>Price: {car?.price}$</h2>
        <section className='power-info'></section>
        <section className='speed-info'></section>
        <section className='dimention-info'></section>
      </div>
    </div>
  )
}
