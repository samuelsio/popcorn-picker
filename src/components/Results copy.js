import React, { Component } from 'react';
import {Card, Spinner, Row, Col} from 'react-bootstrap';

export default class Results extends Component {


    state = {
        items: [],
        isLoaded: false
    };

    componentDidMount() {
        fetch(this.props.request(), {
                method: 'post',
                headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' })
            })
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: [json]
            })
        })
    }

    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded) {
            return (
                <>
                    <div class="mt-5" style={{ textAlign: 'center' }}>
                        <Spinner animation="border" variant="primary" />
                        <h2>Loading</h2>
                    </div>
                </>

            )
        }

        else {
            return (
                <>
                    <Row> 
                        {items[0].items.map(item => (
                            <>  
                                
                                
                                        <Col xs={12} s={6} md={4}>
                                            <Card className="result mb-4">
                                                <Card.Img variant="top" src={"https://images.justwatch.com" + item.poster.slice(0, item.poster.length - 9) + "s592"} />
                                                <Card.Body>
                                                    <Card.Title>{item.title}</Card.Title>
                                                        {/*<Card.Text style={{WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden', display:' -webkit-box'}}>{result.overview}</Card.Text>*/}
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                


                                <div style={{display: 'flex', flexWrap: 'wrap' }} className="resultsContainer">
                                    
                                </div>
                            </>
                        ))}
                    </Row>
                </>
            )
        }
        
    }
}
