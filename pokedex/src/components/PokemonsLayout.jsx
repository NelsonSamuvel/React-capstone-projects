import React, { useState } from 'react'


function PokemonsLayout({children}) {



  return (
    <div className='flex'>
      {children}
    </div>
  )
}

export default PokemonsLayout