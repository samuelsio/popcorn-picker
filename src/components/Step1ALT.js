import React, { Component } from 'react';
import { Button, Jumbotron, Form } from 'react-bootstrap';
import Results from './Results';

export default class Step1 extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <>

                <Jumbotron style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                <h1>Let's get started</h1>
                    <p>We'll ask you a few questions in 3 short steps.</p>
                <p>
                        <Button onClick={this.continue} variant="primary" className="float-right">Get started</Button>
                </p>
                </Jumbotron>
            </>
        )
    }
}
