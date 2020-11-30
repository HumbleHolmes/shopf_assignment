import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'user'
        }
    }

    handleTagClick = (e, type) => {
        this.setState({
            activeTab: type
        })
    }

    render() {
        const { activeTab } = this.state;
        return(
            <Grid container direction='row' sm={12} style={{marginTop: '20px', marginLeft: '60px'}}>
                <Grid sm={4}>
                    <Button
                        variant="outlined"
                        onClick={(e) => this.handleTagClick(e, 'profile')}
                        style={(activeTab === 'profile') ?
                            {background: '#0f0c0c', color: '#ffffff'}
                            :
                            {background: '#e7e6e3', color: '#1E1E1E'}
                        }
                    >
                        InstaDriver
                    </Button>
                </Grid>
                <Grid item sm={2}>
                    <Button
                        variant="outlined"
                        onClick={(e) => this.handleTagClick(e, 'jobs')}
                        style={(activeTab === 'jobs') ?
                            {background: '#0f0c0c', color: '#ffffff'}
                            :
                            {background: '#e7e6e3', color: '#1E1E1E'}
                        }
                    >
                        Jobs
                    </Button>
                </Grid>
                <Grid item sm={2}>
                    <Button
                        variant="outlined"
                        onClick={(e) => this.handleTagClick(e, 'social')}
                        style={(activeTab === 'social') ?
                            {background: '#0f0c0c', color: '#ffffff'}
                            :
                            {background: '#e7e6e3', color: '#1E1E1E'}
                        }    
                    >
                        Get Social
                    </Button>
                </Grid>
                <Grid item sm={2} >
                    <Button 
                        variant="outlined"
                        onClick={(e) => this.handleTagClick(e, 'user')}
                        style={(activeTab === 'user') ?
                            {background: '#0f0c0c', color: '#ffffff'}
                            :
                            {background: '#e7e6e3', color: '#1E1E1E'}
                        }
                        >
                            James Keem
                        </Button>
                </Grid>
                <Grid sm={2}>
                  <Button
                    variant="outlined"
                    onClick={(e) => this.handleTagClick(e, 'menu')}
                    style={(activeTab === 'menu') ?
                        {background: '#0f0c0c', color: '#ffffff'}
                        :
                        {background: '#e7e6e3', color: '#1E1E1E'}
                    }
                >
                    Menu
                </Button>
                </Grid>
            </Grid>
        )
    }
}

export default Header;