import React, { createContext } from 'react'

export const appcontext = createContext()

function Context({children}) {
  return (
    <appcontext.Provider value={{

    }}>
        {children}
    </appcontext.Provider>
  )
}

export default Context