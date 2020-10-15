import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './screens/Landing';
import SheltersMap from './screens/SheltersMap';
import Shelter from './screens/Shelter';
import CreateShelters from './screens/CreateShelter';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={SheltersMap}/>

                <Route path="/shelters/create" component={CreateShelters}/>
                <Route path="/shelters/:id" component={Shelter}/>
             </Switch>
        </BrowserRouter>
    );
}

export default Routes;
