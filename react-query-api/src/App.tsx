import { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
      
    </QueryClientProvider>
  )
}

export default App
