import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Switch, Redirect } from 'wouter'
// import Guard from './components/Guard/index.jsx'
import Provider from './context/Provider.jsx'
import Landing from './pages/Landing/index..jsx'
import Login from './pages/Login/index.jsx'

const Main = () => {
  return (
    <Provider>
      <Switch>
        <Route path='/' component={Landing}/>
        <Route path='/login' component={Login} />
        <Redirect to='/' />
      </Switch>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
