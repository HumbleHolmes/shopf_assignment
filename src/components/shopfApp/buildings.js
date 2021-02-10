import React, { Component } from 'react';

import { Link, Switch, Route, Redirect } from 'react-router-dom';

import history from '../../history';

import Content from '../shopfApp/content';
import Footer from '../shopfApp/footer';

class BuildingInfo extends Component {

    handleOpenMeet = () => {
        console.log('yes i am here');
        history.push('/shopf/addMeeting');
        // this.props.handleMeetPage();
    }
    render() {
        return(
            <div style={{paddingTop: '15px'}}>
                <div style={{width: '97%', height: '545px',border: '2px solid green', marginLeft: '15px'}}>
                    <Content/>
                    <Footer openAddMeeting={this.handleOpenMeet}/>
                </div>
            </div>
        )
    }
}

export default BuildingInfo;