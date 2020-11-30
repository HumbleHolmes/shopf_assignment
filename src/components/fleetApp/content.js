import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import SearchIcon from '@material-ui/icons/Search';
import DriveEta from '@material-ui/icons/DriveEta';
import Subscriptions from '@material-ui/icons/Subscriptions';
import DraftsTwoTone from '@material-ui/icons/DraftsTwoTone';
import Person from '@material-ui/icons/Person';
import Star from '@material-ui/icons/Star';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import UserChat from '../fleetApp/userChat';


class AppContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openProfileItems: false,
            selectedIndex: 3,
            hoverActive: 0
        }
    }

    handleListItemClick = (event, index) => {
        console.log(index,'index is::');
        this.setState({
            selectedIndex: index
        })
    };

    handleHover = (event, index) => {
        this.setState({
            hoverActive: index
        })
    }
//d14ee8 823c8e
    render() {
        const { openProfileItems, selectedIndex, hoverActive } = this.state;
        return(
            <Grid container sm={12}>
                <Grid sm={2} style={{background: '#a832bc', color: '#ffffff'}} >
                    <div style={{height: '250px'}}>
                        <List
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItem
                                button
                                selected={selectedIndex === 0 ? true : false}
                                onClick={(event) => this.handleListItemClick(event, 0)}
                                onFocus={(event) => this.handleHover(event,0)}
                                style={(selectedIndex === 0) ? 
                                    {
                                        background: '#ffffff',
                                        color: '#000000',
                                        marginTop: '10px', 
                                        marginBottom: '5px',
                                    } : (hoverActive === 1) ? 
                                    {
                                        background: '#82868f',
                                        color: '#000000',
                                        marginTop: '10px', 
                                        marginBottom: '5px', 
                                    }
                                    : {
                                        marginTop: '10px', 
                                        marginBottom: '5px',
                                    }
                                }
                                    
                            >
                                    <ListItemIcon
                                        style={(selectedIndex === 0) ? {color: '#000000'} : {color: '#ffffff'}}
                                    >
                                        <Person />
                                    </ListItemIcon>
                                    <ListItemText primary="Employer Profile" />
                                    {openProfileItems ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <ListItem 
                                button
                                selected={selectedIndex === 1 ? true : false}
                                onClick={(event) => this.handleListItemClick(event, 1)}
                                style={(selectedIndex === 1) ? 
                                    {
                                        background: '#ffffff',
                                        color: '#000000',
                                        marginTop: '10px', 
                                        marginBottom: '5px',
                                    } : {
                                        marginTop: '10px', 
                                        marginBottom: '5px',
                                    }
                                }
                                >
                                    <ListItemIcon
                                            style={(selectedIndex === 1) ? {color: '#000000'} : {color: '#ffffff'}}
                                        >
                                        <DriveEta />
                                    </ListItemIcon>
                                    <ListItemText primary="Onboar Your Vehicles" />
                            </ListItem>
                            <ListItem 
                                button
                                selected={selectedIndex === 2 ? true : false}
                                onClick={(event) => this.handleListItemClick(event, 2)}
                                style={(selectedIndex === 2) ? 
                                    {
                                        background: '#ffffff',
                                        color: '#000000',
                                        marginTop: '10px', 
                                        marginBottom: '5px',
                                    } : {
                                        marginTop: '10px', 
                                        marginBottom: '5px',
                                    }
                                    }
                            >
                                <ListItemIcon style={(selectedIndex === 2) ? {color: '#000000'} : {color: '#ffffff'}}>
                                    <SearchIcon />
                                </ListItemIcon>
                                <ListItemText primary="Search & Hire Drivers" />
                            </ListItem>
                            <ListItem 
                                button
                                selected={selectedIndex === 3 ? true : false}
                                onClick={(event) => this.handleListItemClick(event, 3)}
                                style={(selectedIndex === 3) ? 
                                    {
                                        background: '#ffffff',
                                        color: '#000000',
                                        marginTop: '10px', 
                                        marginBottom: '5px',
                                    } : {
                                        marginTop: '10px', 
                                        marginBottom: '5px',
                                    }
                                }
                                >
                                <ListItemIcon style={(selectedIndex === 3) ? {color: '#000000'} : {color: '#ffffff'}}>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItem>
                            <ListItem 
                                button
                                selected={selectedIndex === 4 ? true :  false}
                                onClick={(event) => this.handleListItemClick(event, 4)}
                                style={(selectedIndex === 4) ? 
                                    {
                                        background: '#ffffff',
                                        color: '#000000',
                                        marginTop: '10px', 
                                        marginBottom: '5px',
                                    } : {
                                        marginTop: '10px', 
                                        marginBottom: '5px',
                                    }
                                }
                                >
                                <ListItemIcon style={(selectedIndex === 4) ? {color: '#000000'} : {color: '#ffffff'}}>
                                    <DriveEta />
                                </ListItemIcon>
                                <ListItemText primary="Recruitment" />
                            </ListItem>
                            <ListItem 
                                button 
                                selected={selectedIndex === 5 ? true : false}
                                onClick={(event) => this.handleListItemClick(event, 5)}
                                style={(selectedIndex === 5) ? 
                                    {
                                        background: '#ffffff',
                                        color: '#000000',
                                        marginTop: '10px', 
                                        marginBottom: '5px',
                                    } : {
                                        marginTop: '10px', 
                                        marginBottom: '5px',
                                    }
                                }
                                >
                                <ListItemIcon style={(selectedIndex === 5) ? {color: '#000000'} : {color: '#ffffff'}}>
                                    <DraftsTwoTone />
                                </ListItemIcon>
                                <ListItemText primary="My Organisations" />
                            </ListItem>
                            <ListItem 
                                button
                                selected={selectedIndex === 6 ? true : false}
                                onClick={(event) => this.handleListItemClick(event, 6)}
                                style={(selectedIndex === 6) ? 
                                    {
                                        background: '#ffffff',
                                        color: '#000000',
                                        marginTop: '10px', 
                                        marginBottom: '5px',
                                    } : {
                                        marginTop: '10px', 
                                        marginBottom: '5px',
                                    }
                                }
                            >
                                <ListItemIcon style={(selectedIndex === 6) ? {color: '#000000'} : {color: '#ffffff'}}>
                                    <Star />
                                </ListItemIcon>
                                <ListItemText primary="Rate A Driver" />
                            </ListItem>
                            <ListItem
                                button
                                selected={selectedIndex === 7 ? true : false}
                                onClick={(event) => this.handleListItemClick(event, 7)}
                                selected={3}
                                style={(selectedIndex === 7) ? 
                                    {
                                        background: '#ffffff',
                                        color: '#000000',
                                        marginTop: '10px', 
                                        marginBottom: '10px',
                                    } : {
                                        marginTop: '10px', 
                                        marginBottom: '10px',
                                    }
                                }
                                >
                                <ListItemIcon style={(selectedIndex === 7) ? {color: '#000000'} : {color: '#ffffff'}}>
                                    <Subscriptions />
                                </ListItemIcon>
                                <ListItemText primary="My Subscription" />
                            </ListItem>
                        </List>
                    </div>
                </Grid>
                <Grid sm={8} style={{paddingLeft: '20px'}}>
                    <UserChat/>
                </Grid>
            </Grid>
        )
    }
}

export default AppContent;