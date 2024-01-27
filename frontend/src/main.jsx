import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Switch, Redirect } from 'wouter'
import Guard from './components/Guard/index.jsx'
import Provider from './context/Provider.jsx'
import Landing from './pages/Landing/index..jsx'
import Login from './pages/Login/index.jsx'
import ProductInfo from './pages/Productinfo/index.jsx'
import InsertProduct from './pages/Insertproduct/index.jsx'
import Update from './pages/Updateproduct/index.jsx'

const Main = () => {
  return (
    <Provider>
      <Switch>
        <Route path='/' component={Landing}/>
        <Route path='/product-info/:id' component={ProductInfo} />
        <Route path='/login' component={Login} />
        <Route path='/auth/insert-product'>
          <Guard component={InsertProduct} />
        </Route>
        <Route path='/auth/update/:id'>
          <Guard component={Update} />
        </Route>
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
