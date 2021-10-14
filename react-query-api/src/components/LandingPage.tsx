import React, { useEffect } from 'react'
import axios from 'axios'

const LandingPage = () => {

  const API = 'https://jsonplaceholder.typicode.com/todos/1'

  const fetchTodo = async () => {
    try {
      const result = await axios.get(API)
      console.log(result)
      return result
    } catch (error) {
      console.log(error)
      throw Error
    }

  }
  
  useEffect(() => {
    fetchTodo()
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default LandingPage
