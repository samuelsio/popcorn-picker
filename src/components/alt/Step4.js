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
                    <h1>Here's what we've got for you</h1>
                    <p> https://api.themoviedb.org/3/discover/movie?api_key=5182153b17469d911b976b64bf7912c3&language=en-US&sort_by=revenue.desc&page=1&with_people={this.props.actors.map(actor => (actor.label + ','))}&with_keywords={this.props.keywords.map(keyword => (keyword.label + ','))}</p>
                    
                    <p>Have fun!</p>
                    
                <Results />
                    
                </Jumbotron>
            </>
        )
    }
}
