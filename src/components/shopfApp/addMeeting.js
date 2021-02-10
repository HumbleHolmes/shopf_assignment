import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';

const options = [
    { value: 'Building 1', label: 'Building 1' },
    { value: 'Building 2', label: 'Building 2' },
    { value: 'Building 3', label: 'Building 3' },
    { value: 'Building 4', label: 'Building 4' },
  ];

class AddMeeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
        }
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    render() {
        const { selectedOption } = this.state;
        return(
            <div style={{paddingTop : '15px'}}>
                <div style={{marginLeft: '40%'}}>
                    <h2> Add Meeting</h2>
                </div>
                <div style={{ width: '98%', height: '80px', border: '2px solid white', marginLeft: '10px', marginTop: '15px'}}>
                    <div style={{ marginLeft: '20px', marginTop: '20px', display: 'block'}}>
                        <span style={{marginRight: '20px', fontWeight: '600'}}>Date</span><input type="date"></input>
                    </div>
                </div>
                <div style={{ width: '98%', height: '80px', border: '2px solid white', marginLeft: '10px', marginTop: '15px'}}>
                    <div style={{ marginLeft: '20px', marginTop: '20px'}}>
                        <span style={{marginRight: '20px', fontWeight: '600'}}>Start Time</span><input type="text"></input>
                    </div>
                </div>
                <div style={{ width: '98%', height: '80px', border: '2px solid white', marginLeft: '10px', marginTop: '15px'}}>
                    <div style={{ marginLeft: '20px', marginTop: '20px'}}>
                        <span style={{marginRight: '20px', fontWeight: '600'}}>End Time</span><input type="text"></input>
                    </div>
                </div>
                <div style={{ width: '98%', height: '80px', border: '2px solid white', marginLeft: '10px', marginTop: '15px'}}>
                    <div style={{ width: '200px',marginLeft: '20px', marginTop: '20px'}}>
                        <span style={{width: '200px'}}>
                            <Select
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={options}
                            />
                        </span>
                    </div>
                </div>
                <div style={{width: '50%', marginLeft: '24%', marginTop: '45px'}}>
                    <Button variant="primary" size="lg" block>
                        Next
                    </Button>
                </div>
            </div>
        )
    }
}

export default AddMeeting;