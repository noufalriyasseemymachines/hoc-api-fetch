import React, { useContext } from 'react'
import { UserContext } from '../Context/Context'

const Button = () => {
    const value=useContext(UserContext)

    const toggleTheme=()=>{
      value.theme=!value.theme
      value.setTheme(value.theme)
    }
    
  return (
    <div>
      <button onClick={toggleTheme}>{value.theme? "Light Mode":"Dark Mode"}</button>
    </div>
  )
}

export default Button
