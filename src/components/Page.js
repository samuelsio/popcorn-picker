import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import jayPic from '../images/jay.svg';
import Formstepper from './Formstepper';

export let progress = 0

export default class Search extends Component {
    render() {
        return (
            <>
                <Row className="flex-md-row">
                    <Col xs={4} md={2} className="ml-4 ml-sm-0 mt-4 px-0 aside"><img src={jayPic} style={{ width: '100%' }} className="hero-img" alt="Popcorn Picker" /></Col>
                    <h1 className="hero col flex-shrink-1 mt-5">Netflix? <span style={{fontFamily: "Yesteryear, sans-serif", whiteSpace: "nowrap", fontWeight: 100}}>Completed it mate</span></h1>
                    
                    <Col xs={12} md={9} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                        <p style={{ marginTop: '1em', color: '#fff'}}>Get a tailored watch list based on what you're actually subscribed to</p>
                    </Col>
                </Row>

                <Formstepper />
                <a href="https://github.com/samuelsio" target="_blank" rel="noopener noreferrer" className="author"><span class="author-avatar"></span>by <strong>@samuelsio</strong></a>
            </>
        )
    }
}
