import React, { useState } from 'react'
import Card from './components/Card'
import Chistes from './db/Chistes.js'

const App = () => {

  const [chiste, setChiste] = useState(Chistes[0])

  return (  
    <main className='pt-16'>
      <h1 className='font-bold pb-12'>GFUN</h1>

      <div className='h-[55vh] md:h-[50vh] bg-[#313954] p-12 flex flex-col items-center justify-center gap-8 rounded-lg shadow-lg w-[90vw] md:w-[35vw]'>
        <Card objetoChiste={chiste} />
     </div>

     <button onClick={() => setChiste(Chistes[Math.floor(Math.random() * Chistes.length)])} className='relative top-[-30px] shadow-md hover:shadow-[#387b389b]'>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" />
        </svg>
      </button>
    </main>
  )
}

export default App