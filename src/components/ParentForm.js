import React from 'react';
import Button from '@material-ui/core/Button';
import InputEmailField from './InputEmailField';
import { NavLink, Link } from 'react-router-dom';

export default class ParentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isValidEmail: false,
        };
        this.handleEmailChange.bind(this);
    }
    
    handleEmailChange = (value, isValid) => {      
        this.setState({ email: value, isValidEmail: isValid});                                         
        console.log(`${value} ${isValid}`);
    }
     
    handleSubmitForm = (event) => {
        console.log('handleSubmitForm  ', event);
    }

    render() {
        return (
            <div style={{ marginTop: '10px', marginLeft:'42%' }}>
                
                <InputEmailField
                    helperText="(Required)"
                    // label="Email"
                    fieldName="Email"
                    placeholder="Emial"
                    handleChange={this.handleEmailChange}
                />

                <div>By Continuing this i confirm to the terms and serivce and privacy policy <a href='#'>digio</a> </div>

                {this.state.isValidEmail ?
                   <Button style={{width:'200px'}} variant="contained" color="primary" onClick={this.handleSubmitForm}>
                       <Link to="/otppage">
                        Submit
                        </Link>
                    </Button>
                :
                    <Button style={{width:'200px'}} variant="contained" color="primary" disabled>
                        Submit
                    </Button>
                }


            </div>
        );
    }
}