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
      <div className='title-container'>
        <Image className='logo' src="/porsche-logo.png" alt="Porsche Logo" width={860} height={992} />
        <div className='title-text'>
          <h1>{car?.company}</h1>
          <h3>{car?.name}</h3>
        </div>
      </div>
      <div className='info-container'>
        <div className="left-container">
          <img className='car-image' src="/911_GT3_RS.jpg" alt={car?.name}/>
          <p className='description'>{car?.description}</p>
        </div>
        <div className="right-container">
          <h2>Price: {car?.price}$</h2>
          <section className='car-info'>
            <div className="info-box">
              <div className='info-tile'>
                <p>{car?.horsepower}</p>
              </div>
              <p>Power</p>
            </div>
            <div className='info-box'>
              <div className='info-tile'>
                <p>{car?.torque}</p>
              </div>
              <p>Torque</p>
            </div>
            <div className='info-box'>
              <div className='info-tile'>
                <p>{car?.engine}</p>
              </div>
              <p>Engine</p>
            </div>
          </section>
          <section className='car-info'>
            <div className="info-box">
              <div className='info-tile'>
                <p>{car?.top_speed}</p>
              </div>
              <p>Speed</p>
            </div>
            <div className='info-box'>
              <div className='info-tile'>
                <p>{car?.acceleration}</p>
              </div>
              <p>0-60</p>
            </div>
            <div className='info-box'>
              <div className='info-tile'>
                <p>{car?.weight}</p>
              </div>
              <p>Weight</p>
            </div>
          </section>
          <section className='car-info'>
            <div className="info-box">
              <div className='info-tile'>
                <p>{car?.width}</p>
              </div>
              <p>width</p>
            </div>
            <div className='info-box'>
              <div className='info-tile'>
                <p>{car?.height}</p>
              </div>
              <p>height</p>
            </div>
            <div className='info-box'>
              <div className='info-tile'>
                <p>{car?.length}</p>
              </div>
              <p>Length</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
