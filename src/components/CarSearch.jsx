import React from 'react'
import { createClient } from '@/utils/supabase/client'


export default async function CarSearch() {
    const {data, error} = await createClient()
        .from('testloader')
        .select()

    return (
        <div>
            <input type="text" placeholder="Search for a car" />
        </div>
    )
}