'use client'
import React from 'react'
import { createClient } from '@/utils/supabase/client'
import { useState, useEffect} from 'react'

export default function CarSearch() {
    const [search, setSearch] = useState('')
    const [cars, setData] = useState([])
    const [filteredCars, setFilteredCars] = useState([])

    useEffect(() => {
        async function fetchData() {
            const {data, error} = await createClient()
                .from('testloader')
                .select('car_name')
            setData(data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (search.trim() === '') {
            setFilteredCars([]);
        } else {
            const results = cars.filter((car) =>
                car.car_name.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredCars(results);
        }
    }, [search, cars]);

    return (
        <div>
            <input type="text" placeholder="Search for a car" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
            <ul>
                {filteredCars.map((car) => (
                    <li key={car.id} onClick={() => alert(`You selected ${car.car_name}`)}>{car.car_name}</li>
                ))}
            </ul>
        </div>
    )
}