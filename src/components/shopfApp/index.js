import React, { Component } from 'react';

import Select from 'react-select';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import BuildingInfo from '../shopfApp/buildings';
import AddMeeting from '../shopfApp/addMeeting';
import Finalize from '../shopfApp/finalizeRoom';

const options = [
    { value: 'Building 1', label: 'Building 1' },
    { value: 'Building 2', label: 'Building 2' },
    { value: 'Building 3', label: 'Building 3' },
    { value: 'Building 4', label: 'Building 4' },
  ];

class ShopfApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps,87);
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    render() {
        const { selectedOption } = this.state;
        const  currentPath = this.props.history.location.pathname;
        const page = currentPath.split('/');
        console.log('in index');
        return(
            <div>
                {page[page.length-1] && page[[page.length-1]] === 'buildingsInfo' && 
                    <div id="options" style={{marginTop: '40px', marginLeft: '41%', width: '200px'}}>
                    <Select
                        // styles={}
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />
                    </div>
                }
                <div id="container" style={{width: '70%', height: '570px', marginLeft: '15%', marginTop: '4%', borderRadius: '6px', background: '#dbd0d6'}}>
                    <Switch>
                        <Redirect exact from="/" to="/shopf/buildingsInfo" />
                        <Redirect exact from="/shopf" to="/shopf/buildingsInfo" />
                        <Route exact path="/shopf/buildingsInfo" component={BuildingInfo}/>
                        <Route exact path="/shopf/addMeeting" component={AddMeeting}/>
                        <Route exact path="/shopf/submit" component={Finalize}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default ShopfApp;