import React, { Component } from 'react';
import { Button, Jumbotron, Form } from 'react-bootstrap';
import CreatableMulti from './CreatableMulti';
import { providerData } from './data/searchData';
import axios from 'axios';

const keywordOptions = [
    { value: 'apocalypse', label: 'Apocalypse' },
    { value: 'zombies', label: 'Zombies' },
    { value: 'space', label: 'Space' },
    { value: 'comedy', label: 'Comedy' }
];

export default class Step2 extends Component {

    state = {
        platforms: [{short_name: 'Allo', label: 'Allo'}]
}

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
                    platforms: res.data
                });
            });
    }

    render() {
        return (
            <>

                <Jumbotron style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                <h1>Tell us your favourite types of movie</h1>
                    <p>For example Apocalypse, zombies, space, comedy...</p>
                    
                    <Form.Group>
                        <CreatableMulti options={providerData.map(platform => ({ value:  platform.short_name , label:  platform.clear_name  }))} value={this.props.value} handleInputChange={this.props.handleStep2InputChange} />
                    </Form.Group>
                <p>
                        <Button onClick={ this.continue } variant="primary" className="float-right">Next</Button>    
                        <Button onClick={this.back} variant="primary" className="float-left">Back</Button>
                </p>
                </Jumbotron>
            </>
        )
    }
}
