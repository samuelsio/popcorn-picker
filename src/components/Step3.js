import React, { Component } from 'react';
import { Button, Jumbotron, Form } from 'react-bootstrap';
import CreatableMulti from './CreatableMulti';
import { genreData } from './data/searchData';

export default class Step3 extends Component {

    state = {
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

    /*componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({
                    genres: res.data
                });
            });
    }*/

    render() {
        return (
            <>

                <Jumbotron style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                <h1>Now, what's your favourite genre's</h1>
                    <p>For example crime, drama and thrillers</p>
                    
                    <Form.Group>
                        <CreatableMulti handleOnChange={this.handleOnChange} placeholder={"Search..."} options={genreData.map(genre => ({ value:  genre.short_name , label:  genre.translation  }))} value={this.props.value} handleInputChange={this.props.handleStep3InputChange} />
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
