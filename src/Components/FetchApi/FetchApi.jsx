import React from 'react'

 export async function FetchApi() {
    try {
        const response=await fetch("https://fakestoreapi.com/products")
        if(!response.ok){
            throw new Error(response.statusText)
        }
        const data=await response.json()
        return data
    } catch (error) {
        throw error
    }
}
