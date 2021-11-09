import { useEffect, useState } from 'react'
import './App.css'

function GitHubUser ({ login }) {
  const [ data, setData ] = useState()
  const [ error, setError ] = useState()
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then(data => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
  }, [login])

  if (loading) return <h1>Loading...</h1>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  if (!data) return null

  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt="" />
    </div>
  )

}

function App() {

  return <GitHubUser login="moonhighway" />
}

export default App
