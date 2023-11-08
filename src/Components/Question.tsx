import React from 'react'
import Button from './Button'

export default function Question() {
  return (
    <figure className='border-b-2 border-border pb-6 mb-8 '>
        <p className='text-xl text-darkBlue font-bold mb-4'>How would one say goodbye in Spanish?</p>
        <div className="flex ga-4 justify-between">
            <Button status='unselected'>Adios</Button>
            <Button status='unselected'>Hola</Button>
            <Button status='unselected'>Au Revoir</Button>
            <Button status='unselected'>Salir</Button>
        </div>
    </figure>
  )
}
