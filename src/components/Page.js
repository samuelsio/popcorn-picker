import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import popcornPic from '../images/popcorn-picker.png';
import Formstepper from './Formstepper';

export let progress = 0

export default class Search extends Component {
    render() {
        return (
            <>
                <Row className="flex-column flex-md-row">
                    <Col xs={6} md={3} className="mt-4 align-self-center"><img src={popcornPic} alt="Popcorn Picker" style={{ width: '100%' }}/></Col>
                    <Col xs={12} md={9} style={{justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                    <h1 style={{ color: '#fff', margin: '0.6em 0', fontSize: '2.5em' }}>Netflix? <span style={{fontFamily: "Yesteryear, sans-serif", whiteSpace: "nowrap"}}>Completed it mate</span></h1>
                    <p style={{color: '#fff'}}>Get a tailored watch list based on what you're actually subscribed to</p>
                    </Col>
                </Row>

                <Formstepper />
                

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
