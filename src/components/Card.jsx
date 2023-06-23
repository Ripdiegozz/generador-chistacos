import React from 'react'

const Card = ({ objetoChiste, changeJoke }) => {

  const { id, chiste } = objetoChiste
  
  return (
    <div className='h-40 w-[250px] flex flex-col items-center'>
        <h2 className='text-xl font-bold'>Chiste <span className='text-[#9888e8]'>#{id}</span></h2>
        <p className='mt-4 w-90 text-xl font-bold'>{chiste}</p>
    </div>
  )
}

export default Card