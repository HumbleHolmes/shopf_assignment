import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownCircleOutlined from '@material-ui/icons/ArrowDropDownCircleOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
import MoreVert from '@material-ui/icons/MoreVert';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


class UserChat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openFilter: false,
            anchorEl: null,
            showContactInfo: false,
            contactAnchorEl: null,
        }
        this.getInqueriesContent = this.getInqueriesContent.bind(this);
        this.getInqueries = this.getInqueries.bind(this);
    }

    handleClickFilter = (event) => {
        this.setState({
            openFilter: true,
            anchorEl: event.currentTarget
        })
    }

    handleClose = () => {
        this.setState({
            openFilter: false,
            anchorEl: null
        })
    }

    getInqueries = () => {
        let ele = [];
        for(let i=0; i<15; i++){
            ele.push(
                <div style={{marginLeft: '20px', marginTop: '20px', marginBottom: '20px'}}>
                    <div id='elements'>
                        <paper
                            variant="outlined" 
                            elevation={3}    
                        >
                            <div 
                                style={{
                                    width: '350px',
                                    background: '#afebed',
                                    paddingTop:'10px',
                                    paddingLeft: '10px',
                                    paddingBottom: '10px'
                                }}
                            > 
                                <p>
                                    Vacancy ads helps you attractpotential hires who are...
                                </p>
                            </div>
                        </paper>
                    </div>
                </div>
            )
        }
        return ele;
    }

    getInqueriesContent = () => {
        let ele = [];
        for(let i=0; i<15; i++){
            ele.push(
                <div style={{marginLeft: '20px', marginTop: '20px', marginBottom: '20px'}}>
                    <div id='elements'>
                        <paper
                            variant="outlined" 
                            elevation={3}    
                        >
                            <div 
                                style={{
                                    width: '350px',
                                    background: '#afebed',
                                    paddingTop:'10px',
                                    paddingLeft: '10px',
                                    paddingBottom: '10px',
                                    paddingRight:'10px'
                                }}
                            > 
                                <p>
                                    The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found. From his home in Spain he journeys to the markets of Tangiers and across the Egyptian desert to a fateful encounter with the alchemist.
                                </p>
                            </div>
                        </paper>
                    </div>
                </div>
            )
        }
        return ele;
    }

    showContact = (event) => {
        this.setState({
            showContactInfo: true,
            contactAnchorEl: event.currentTarget,
        })
    }

    handleContactClose = () => {
        this.setState({
            showContactInfo: false,
            contactAnchorEl: null,
        })
    }

    render() {
        const  { openFilter, anchorEl, showContactInfo, contactAnchorEl } = this.state;
        return(
            <Grid conatiner>
                {/* <Grid item>
                    <Grid container direction="row" alignItems="center" xs={12} sm={12} md={12} lg={12} style={{marginTop: '20px', marginBottom: '20px'}}>
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <TextField
                                id="outlined-secondary"
                                variant="outlined"
                                color="secondary"

                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                    ),
                                }}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={1} sm={1} style={{ marginTop: '10px', marginLeft: '20px'}} onClick={(e) => this.handleClickFilter(e)}>
                            <ArrowDropDownCircleOutlined/>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2}>

                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Button
                                variant="outlined"
                                style={
                                    {background: '#e8a635', color: '#ffffff'}
                                }
                            >
                                + Start a new chat
                            </Button>
                        </Grid>
                        {openFilter && 
                            <Popover
                                id='filter-popover'
                                open={openFilter}
                                anchorEl={anchorEl}
                                onClose={this.handleClose}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                                }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                                }}
                            >
                                <div style={{
                                        width: '280px',
                                        height: '270px'
                                    }}>
                                        <div style={{background: '#82868f', colore: '#ffffff', paddingLeft: '100px', paddingTop: '10px', paddingBottom: '10px', fontWeight: '500'}}>
                                            Filters
                                        </div>
                                        <div style={{marginTop: '20px', marginLeft: '30px', marginRight: '20px'}}>
                                            <div style={{marginTop: '20px', marginBottom: '20px'}}>
                                                <Dropdown options={['read', 'unread messages', 'Opened but not responded', 'Ongoing', 'Ended']} onChange={() => {}} value={''} placeholder="Message Statuses"/>
                                            </div>
                                            <div style={{ marginBottom: '20px'}}>
                                                <Dropdown options={['Last hour', '15 hrs ago', 'Today', 'This week', 'This month', 'This year']} onChange={() => {}} value={''} placeholder="Time Of Messages"/>
                                            </div>
                                            <div>
                                                <Button
                                                    variant="outlined"
                                                    style={
                                                        {background: '#E8A63E', color: '#ffffff'}
                                                    }
                                                    >
                                                        Apply Filters
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                            </Popover>
                        }
                    </Grid>
                </Grid> */}
                <Grid item style={{marginTop: '30px'}}>
                    <Grid container direction="row" xs={12} sm={12} md={10} lg={12} spacing={2}>
                        <Grid item xs={10} sm={8} md={5} lg={5} >
                            <Paper 
                                variant="outlined" 
                                elevation={3}
                                style={{
                                    maxHeight: '550px',
                                    minWidth: '400px',
                                    overflow: 'auto'
                                }}
                            >
                                <div id="content">{this.getInqueries()}</div>
                            </Paper>
                        </Grid>
                        <Grid item xs={10} sm={10} md={7} lg={7} style={{paddingLeft: '30px'}}>
                            <Paper 
                                variant="outlined" 
                                elevation={3}
                                style={{
                                    height: '650px',
                                    minWidth: '550px',
                                }}
                            >
                                <div id="head" style={{height: '40px', background: "#afebed", color: "#161613"}}>
                                    <span style={{paddingLeft: '30px'}}>Inquiry about relocation from nairobi</span>
                                    <span style={{marginRight: '10px'}}>
                                        <Button
                                            variant="outlined"
                                            style={
                                                {background: '#82868f', color: '#ffffff'}
                                            }
                                        >
                                            Contact Info
                                        </Button>
                                    </span>
                                    <span style={{marginRight: '10px', paddingTop: '5px', alignItems: 'center'}} onClick={(e) => this.showContact(e)}><MoreVert /></span>
                                    {showContactInfo &&
                                        <Popover
                                            id='contact_popover'
                                            open={showContactInfo}
                                            anchorEl={contactAnchorEl}
                                            onClose={this.handleContactClose}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                            transformOrigin={{
                                                vertical: 'right',
                                                horizontal: 'left',
                                            }}
                                        >
                                            <div style={{
                                                width: '350px',
                                                height: '180px'
                                            }}>
                                                <div style={{background: '#82868f', colore: '#ffffff', paddingLeft: '120px', paddingTop: '10px', paddingBottom: '10px'}}>
                                                    Contact Info
                                                </div>
                                                <div style={{marginTop: '20px', marginLeft: '30px'}}>
                                                    <div style={{marginTop: '20px', marginBottom: '20px'}}>
                                                        Mobile Number
                                                        <span style={{marginLeft: '20px'}}>
                                                            <Button 
                                                                variant="outlined"
                                                                style={
                                                                    {background: '#9ea1a8', color: '#ffffff'}
                                                                }
                                                            >
                                                                7567999000
                                                            </Button>
                                                        </span>
                                                    </div>
                                                    <div style={{ marginBottom: '20px'}}>
                                                        Email Address
                                                        <span style={{marginLeft: '28px'}}>
                                                            <Button
                                                                variant="outlined"
                                                                style={
                                                                    {background: '#9ea1a8', color: '#ffffff'}
                                                                }
                                                            >
                                                                mani@gmail.com
                                                            </Button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover>
                                    }
                                </div>
                                <div id="content"
                                    style={{
                                        maxHeight: '600px',
                                        // minWidth:'380px',
                                        // width: '680px',
                                        overflow: 'auto'
                                    }}
                                >
                                {this.getInqueriesContent()}
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default UserChat;