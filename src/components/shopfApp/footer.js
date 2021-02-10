import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

class Footer extends Component {
    handleClick = () => {
        console.log('yes in::');
        this.props.openAddMeeting();
    }
    render() {

        return(
            <>
                <div style={{width: '96%', marginLeft: '20px', marginTop: '15px'}}>
                    <Button variant="primary" size="lg" block onClick={this.handleClick}>
                        Add a Meeting
                    </Button>
                </div>
            </>
        )
    }
}

export default Footer;