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
                .from('cars')
                .select('name, company')
            setData(data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (search.trim() === '') {
            setFilteredCars([]);
        } else {
            const results = cars.filter((car) =>
                car.name.toLowerCase().includes(search.toLowerCase()) || car.company.toLowerCase().includes(search.toLowerCase())
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
                    <li className='search-list-item' key={car.id} onClick={() => {searchCar(car.name)} }>{car.company}: {car.name}</li>
                ))}
            </ul>
        </div>
    )
}