import React from 'react'
import { Layout } from './components/'
import { Dashboard } from './pages/'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const LayoutRoute = ({Component, ...rest}) => {
     return(
        <Route 
            {...rest}
            render={(props)=> ( 
                <Layout>
                    <Component props={props} />
                </Layout>
      ) }
        />
    )
}

const Approute  = () => {
    return(    
        <Router>
            <Switch>
                <LayoutRoute 
                    path={"/dashboard"}
                    exact={true}
                    Component={Dashboard}
                />
                
            </Switch>
        </Router>     
    )
}
export default Approute;