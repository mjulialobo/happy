import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './screens/Landing';
import SheltersMap from './screens/SheltersMap';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={SheltersMap}/>
             </Switch>
        </BrowserRouter>
    );
}

export default Routes;
