'use client'
import React from 'react'
import { createClient } from '@/utils/supabase/client'
import { useState, useEffect} from 'react'
import '../styles/carsearch.css'

export default function CarSearch() {
    const [search, setSearch] = useState('')
    const [cars, setData] = useState([])
    const [filteredCars, setFilteredCars] = useState([])

    useEffect(() => {
        async function fetchData() {
            const {data, error} = await createClient()
                .from('testloader')
                .select('car_name, car_brand')
            setData(data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (search.trim() === '') {
            setFilteredCars([]);
        } else {
            const results = cars.filter((car) =>
                car.car_name.toLowerCase().includes(search.toLowerCase()) || car.car_brand.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredCars(results);
        }
    }, [search, cars]);

    function searchCar(car) {
        window.open(`/${car}`, '_blank')
    }

    return (
        <div>
            <input type="text" placeholder="Search for a car" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
            <ul className="search-list">
                {filteredCars.map((car) => (
                    <li className='search-list-item' key={car.id} onClick={() => {searchCar(car.car_name)} }>{car.car_brand}: {car.car_name}</li>
                ))}
            </ul>
        </div>
    )
}