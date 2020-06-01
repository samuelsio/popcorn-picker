import React, { Component } from 'react';
import { Card, Col, Row, Button, ProgressBar } from 'react-bootstrap';
import popcornPic from '../images/popcorn-picker.png';
import { BrowserRouter, Route } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';

export let progress = 0

export default class Search extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col xs={3} className="mt-5"><img src={popcornPic} alt="Popcorn Picker" style={{ width: '100%' }}/></Col>
                    <Col xs={9} style={{justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                    <h1 style={{ color: '#fff', marginTop: '1em', fontSize: '3em' }}>What should I watch?</h1>
                    <p style={{color: '#fff', fontSize: '1.25em'}}>Tell us what you like watching and we'll find something new that you'll like.</p>
                    </Col>
                </Row>
            
                <ProgressBar style={{ marginTop: "5em", borderBottomLeftRadius: 0, borderBottomRightRadius: 0, backgroundColor: "#d9dde1" }} now={10} />
                <BrowserRouter>
                    <Route path="/" component={Step1} exact />
                    <Route path="/step2" component={ Step2 } />
                </BrowserRouter>
                

                <Row>
                    <Col>
            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/286x160?text=Card" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk ofthe card's content.</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
                    </Col>
                    <Col>
            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/286x160?text=Card" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk ofthe card's content.</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
                    </Col>
                    <Col>
            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/286x160?text=Card" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk ofthe card's content.</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
                    </Col>
            </Row>
            </>
        )
    }
}
