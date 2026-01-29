import { useEffect, useState } from 'react'
import Splash from './components/Splash'
import Home from './pages/Home'
import Header from './components/Header/Header'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Splash />
  }

  return (
    <div className="app visible">
      <Header />
      <Home />
    </div>
  )
}

export default App