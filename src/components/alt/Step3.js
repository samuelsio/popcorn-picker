import React, { Component } from 'react';
import { Button, Jumbotron, Form } from 'react-bootstrap';
import CreatableMulti from './CreatableMulti';
import axios from 'axios';

export default class Step1 extends Component {

    state = {
        actors: [],
        isSelected: false,
        value: undefined
    }

    handleOnchange = () => {
    this.setState({ isSelected: true });
    console.log(this.isSelected);
  };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({
                    actors: res.data
                });
            });
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <>

                <Jumbotron style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                <h1>Now, who are some of your favourite actors</h1>
                    <p>For example Jesse Eisenburg, Tom Cruise, Will Ferrel</p>
                    
                    <Form.Group>
                        <CreatableMulti handleOnChange={this.handleOnChange} options={this.state.actors.map(actor => ({ value:  actor.email , label:  actor.email  }))} value={this.props.value} handleInputChange={this.props.handleStep3InputChange} />
                    </Form.Group>
                <p>
                        <Button onClick={ this.continue } variant="primary" className="float-right">Finish</Button>    
                        <Button onClick={this.back} variant="primary" className="float-left">Back</Button>
                </p>
                </Jumbotron>
            </>
        )
    }
}
