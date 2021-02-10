import React, { Component } from 'react';


class Content extends Component {

    render() {
        return(
            <>
                <div style={{width: '98%', marginLeft: '10px', marginTop: '25px'}}>
                    <div style={{ width: '98%', height: '130px', border: '2px solid black', marginLeft: '10px', marginTop: '15px'}}>
                        <div style={{ marginLeft: '10px', marginTop: '10px'}}>
                            <h3>Buildings</h3>
                            <p>Total 4</p>
                        </div>
                    </div>
                    <div style={{ width: '98%', height: '130px', border: '2px solid black', marginLeft: '10px', marginTop: '15px'}}>
                        <div style={{ marginLeft: '10px', marginTop: '10px'}}>
                            <h3>Rooms</h3>
                            <p>Total 4</p>
                            <p>Free Now 43</p>
                        </div>
                    </div>
                    <div style={{ width: '98%', height: '130px', border: '2px solid black', marginLeft: '10px', marginTop: '15px'}}>
                        <div style={{ marginLeft: '10px', marginTop: '10px'}}>
                            <h3>Meetings</h3>
                            <p>Total 50 Today</p>
                            <p>Total 30 Going on now</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Content;