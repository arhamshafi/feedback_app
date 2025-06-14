import React, { createContext, useState } from 'react'

export const appcontext = createContext()

function Context({children}) {

  let [sign_up , setsign_up] = useState(false) 

  return (
    <appcontext.Provider value={{
        sign_up , setsign_up
    }}>
        {children}
    </appcontext.Provider>
  )
}

export default Context