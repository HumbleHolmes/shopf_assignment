
import React from 'react';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';

import history from '../src/history';

import ShopfApp from '../src/components/shopfApp';
import BuildingInfo from '../src/components/shopfApp/buildings';
import AddMeeting from '../src/components/shopfApp/addMeeting';
import Finalize from '../src/components/shopfApp/finalizeRoom';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={ShopfApp}/>
            <Route path="/shopf" component={ShopfApp}/>
            <Route exact path="/shopf/buildingsInfo" component={BuildingInfo}/>
            <Route exact path="/shopf/addMeeting" component={AddMeeting}/>
            <Route exact path="/shopf/submit" component={Finalize}/>
        </Switch>
    </Router>
)

export default Routes;