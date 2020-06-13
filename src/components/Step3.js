import React, { Component } from 'react';
import { Button, Jumbotron, Form } from 'react-bootstrap';
import CreatableMulti from './CreatableMulti';
import { genreData } from './data/searchData';
import arrow from '../images/arrow.svg';

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
                <h1 class="section-heading">What kind of show are you looking for?</h1>
                    <Form.Group>
                        <CreatableMulti handleOnChange={this.handleOnChange} placeholder={"Search..."} options={genreData.map(genre => ({ value:  genre.short_name , label:  genre.translation  }))} value={this.props.value} handleInputChange={this.props.handleStep3InputChange} />
                    </Form.Group>
                <div class="d-flex flex-grow-1 justify-content-between">
                        <Button onClick={ this.continue } variant="primary" className="btn btn-next px-5">Get results <img src={arrow} alt="" width="9" height="13" /></Button>    
                        <Button onClick={this.back} variant="primary" className="btn btn-back float-left px-4 px-sm-5"><img src={arrow} alt="" width="9" height="13" /> Back</Button>
                    </div>
                </Jumbotron>
            </>
        )
    }
}
