import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'
class Finalize extends Component { 
    render() {
        return(
            <div style={{paddingTop: '15px'}}>
                <div style={{width: '97%', height: '545px',border: '2px solid green', marginLeft: '15px'}}>
                    <div style={{marginLeft: '23%', marginTop: '15px'}}>
                        <h2> Please select one of the Free rooms</h2>
                    </div>
                    <div style={{ width: '98%', height: '130px', border: '2px solid black', marginLeft: '10px', marginTop: '10px'}}>
                        <div style={{ marginLeft: '10px', marginTop: '10px'}}>
                            <h3>Punjab</h3>
                            <p>Building 4</p>
                            <p>Floor 5</p>
                        </div>
                    </div>
                    <div style={{ width: '98%', height: '130px', border: '2px solid black', marginLeft: '10px', marginTop: '10px'}}>
                        <div style={{ marginLeft: '10px', marginTop: '10px'}}>
                            <h3>Punjab</h3>
                            <p>Building 4</p>
                            <p>Floor 2</p>
                        </div>
                    </div>
                    <div style={{ width: '98%', height: '130px', border: '2px solid black', marginLeft: '10px', marginTop: '10px'}}>
                        <div style={{ marginLeft: '10px', marginTop: '10px'}}>
                            <h3>Punjab</h3>
                            <p>Building 4</p>
                            <p>Floor 8</p>
                        </div>
                    </div>
                    <div style={{width: '50%', marginLeft: '24%', marginTop: '10px'}}>
                        <Button variant="primary" size="lg" block>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Finalize;