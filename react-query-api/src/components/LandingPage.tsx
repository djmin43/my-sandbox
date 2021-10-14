import React from 'react'
import axios from 'axios'

const LandingPage = () => {

  const API = 'https://jsonplaceholder.typicode.com/todos/1'

  const fetchTodo = async () => {
    const result = axios.get(API)
    console.log(result)
    return result
  }

  return (
    <div>
      
    </div>
  )
}

export default LandingPage
