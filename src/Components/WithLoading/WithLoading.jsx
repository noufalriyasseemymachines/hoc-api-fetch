import React, { useEffect, useState } from 'react'
import './WithLoading.css'

const WithLoading = (WrappedComponent,fetchData) => {
    return function WithLoadingComp(){
        const [loading,setLoading]=useState(true)
        const [data,setData]=useState()


        useEffect(()=>{
             async function fetchProductsData(){
                try {
                    const result= await fetchData()
                    setData(result)
                    setLoading(false)
                } catch (error) {
                    setLoading(false)
                }
             }
             fetchProductsData()
        },[])


        if(loading){
            return <div className='loader'>Loading...</div>
        }

        return <WrappedComponent data={data} ></WrappedComponent>
    }
}

export default WithLoading
