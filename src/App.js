import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { SearchImage } from './pages'


const App = () => {
  const routes = [    
    
  ]

  const RouteWithSubRoutes = (route) =>{
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }

  return (
    <div>       
        <Router>
        <Route path="/" render={(props)=>(
            <>
               <SearchImage/>
            </>
            )} />
          <Switch>            
            {
              routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))
            } 
          </Switch>
         
        </Router>     
    </div>
  )
}

export default App
