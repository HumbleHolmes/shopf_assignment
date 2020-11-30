import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Footer extends Component {

    render() {
        return(
            <Grid container>
                <Grid item style={{background: '#a08080', height: '40px', marginBottom: '0px'}}></Grid>
            </Grid>
        )
    }
}

export default Footer;