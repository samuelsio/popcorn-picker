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
                    <h1>Your results</h1>
                    
                    <p>Here's a list we've made for you</p>
                    
                <Results request={this.props.request} />
                    
                </Jumbotron>
            </>
        )
    }
}
