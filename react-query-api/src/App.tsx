import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <LandingPage />
    </QueryClientProvider>
  )
}


export default App
