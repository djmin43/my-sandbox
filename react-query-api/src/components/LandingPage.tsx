import React, { useEffect } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

type Params<T> = {

}

const LandingPage = () => {

  const API = `https://jsonplaceholder.typicode.com/todos/1`

  const fetchTodo = async <T, _>(params: T): Promise<T> => {
    
    const result = await axios.get(API)
    console.log('params', params)
    console.log('result', result)
    return params
  }
  
  useQuery('todos', fetchTodo)

  return (
    <div>
      
    </div>
  )
}

export default LandingPage
