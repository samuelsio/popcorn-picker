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
                <h1>What kind of mood?</h1>
                    <p>Pick one or a few</p>
                    
                    <Form.Group>
                        <CreatableMulti handleOnChange={this.handleOnChange} placeholder={"Search..."} options={genreData.map(genre => ({ value:  genre.short_name , label:  genre.translation  }))} value={this.props.value} handleInputChange={this.props.handleStep3InputChange} />
                    </Form.Group>
                <div class="d-flex flex-grow-1 justify-content-between">
                        <Button onClick={ this.continue } variant="primary" className="btn btn-next px-5">Finish &rsaquo;</Button>    
                        <Button onClick={this.back} variant="primary" className="btn btn-back float-left px-5">&lsaquo; Back</Button>
                    </div>
                </Jumbotron>
            </>
        )
    }
}
