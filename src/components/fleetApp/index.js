import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import Header from './header';
import AppContent from './content';
import Footer from './footer';

class FleetApp extends Component {

    render() {
        return(
            <Grid container alignItems='flex-start'>
                <Grid container direction="column">
                    <Grid item ><Header /></Grid>
                    <Grid item style={{height: '30px', background: '#141212'}}></Grid>
                    <Grid item  ><AppContent /></Grid>
                    <Grid item  ><Footer /></Grid>
                </Grid>
            </Grid>
        )
    }
}

export default FleetApp;