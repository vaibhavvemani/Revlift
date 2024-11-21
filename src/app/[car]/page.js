import React from 'react'

export default async function Car( {params} ) {
    const slug = (await params).car
    return (
        <h1>{slug}</h1>
    )
}
