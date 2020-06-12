import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Results from './Results';

export default class Step4 extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        return (
            <>

                <Jumbotron style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                    <h1>Here's what we've got for you</h1>
                    
                    <p>Have fun!</p>
                    
                <Results request={this.props.request} />
                    
                </Jumbotron>
            </>
        )
    }
}
