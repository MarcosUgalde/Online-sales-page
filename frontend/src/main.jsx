import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './pages/Landing/index..jsx'

const Main = () => {
  return (
    <Landing />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
