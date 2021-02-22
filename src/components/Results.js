import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import spinner from '../images/3d-glasses.svg';

export default class Results extends Component {


    state = {
        items: [],
        isLoaded: false
    };

    componentDidMount() {
        const h = new Headers();
        h.append('X-Requested-With', 'XMLHttpRequest');

        let req = new Request(this.props.request(), {
            method: 'GET',
            headers: h,
            mode: 'cors'
        });

        fetch(req)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: [json]
            })
        })
            .then( this.state.items.items > 1 ? console.log("success" + this.state.items.length) : console.log("failed" + this.state.items.length))
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded) {
            return (
                <>
                    <div className="my-5" style={{ textAlign: 'center' }}>
                        <img src={spinner} class="spinner" alt="Popcorn Picker" />
                        <h2 style={{marginTop: "-1em"}}>Loading...</h2>
                    </div>
                </>

            )
        }

        else {
            return (
                <>
                    <button className="edit-options" onClick={ this.props.reset }>Edit options</button> 
                    <h1 class="section-heading">Here's a list made for you</h1>
                    <Row> 
                        {items[0].items.map(item => (
                            <>  
                                <Col xs={4} className="px-0" key={item.id}>
                                    <Card className="result mb-3">
                                        <Card.Img variant="top" src={"https://images.justwatch.com" + item.poster.slice(0, item.poster.length - 9) + "s592"} />
                                        <Card.Body className="p-2">{item.title}</Card.Body>
                                    </Card>
                                </Col>
                            </>
                        ))}
                    </Row>
                </>
            )
        }
        
    }
}
