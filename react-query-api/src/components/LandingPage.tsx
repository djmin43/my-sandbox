import React, { useEffect } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const LandingPage = () => {

  const API = 'https://jsonplaceholder.typicode.com/todos/1'

  const fetchTodo = async (queryKey: any) => {
    try {
      console.log('querykey', queryKey)
      const result = await axios.get(API)
      console.log(result)
      return result
    } catch (error) {
      console.log(error)
      throw Error
    }
  }
  
  useQuery('hello', fetchTodo)

  return (
    <div>
      
    </div>
  )
}

export default LandingPage
