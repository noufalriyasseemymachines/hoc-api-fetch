import React, { useContext } from 'react'
import WithLoading from './Components/WithLoading/WithLoading'
import ItemList from './Components/ItemList/ItemList'
import {FetchApi} from './Components/FetchApi/FetchApi.jsx'
import Button from './Components/Button/Button.jsx'
import { UserContext } from './Components/Context/Context.jsx'
import './App.css'

export const ItemListWithLoading=WithLoading(ItemList,FetchApi)

const App = () => {
  const value=useContext(UserContext)
  console.log(value.theme)


  return (
    <div className={value.theme? "dark-container":"light-container"}>
      <Button></Button>
      <ItemListWithLoading ></ItemListWithLoading>
    </div>
  )
}

export default App

