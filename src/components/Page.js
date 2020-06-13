import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import popcornPic from '../images/popcorn-picker.png';
import Formstepper from './Formstepper';

export let progress = 0

export default class Search extends Component {
    render() {
        return (
            <>
                <Row className="flex-md-row">
                    <Col xs={4} md={3} className="mt-4 px-0"><img src={popcornPic} alt="Popcorn Picker" style={{ width: '100%' }} /></Col>
                    <h1 className="col-8 mt-5" style={{ color: '#fff', margin: '0.6em 0', fontSize:' 2.2em', fontWeight: '600', lineHeight: '1em', alignSelf: "center" }}>Netflix? <span style={{fontFamily: "Yesteryear, sans-serif", whiteSpace: "nowrap", fontWeight: 100}}>Completed it mate</span></h1>
                    
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
