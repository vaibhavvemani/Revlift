'use client'
import React from 'react'
import { createClient } from '@/utils/supabase/client'
import { useState, useEffect} from 'react'

const CarSearch = () => {
    const [search_tag, setTag] = useState()
    const [search_results, setResults] = useState()


    useEffect(() => {
        const searchCar = async () => {
            const {data, error} = await createClient()
                .from('testloader')
                .select('car_name')
                .ilike('car_name', `%${search_tag}%`)
            setResults(data || [])
            console.log(search_results)
        }

        searchCar()
    }, [search_tag])

    return (
        <div>
            <input type="text" name="car_name" id="search_tag" onInput={(e) => {setTag(e.target.value)}} />
        </div>
    )
}
export default CarSearch