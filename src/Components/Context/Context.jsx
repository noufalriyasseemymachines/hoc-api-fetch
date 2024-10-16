import React, { createContext, useState } from 'react'
import App from '../../App'



export const UserContext=createContext()
const Context = () => {
    const [theme,setTheme]=useState(false)
  return (
    <div>
    <UserContext.Provider value={{theme,setTheme}}>
        <App></App>
    </UserContext.Provider>
    </div>
  )
}

export default Context
