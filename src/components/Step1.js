import React, { Component } from 'react';
import { Row, Col, Card, Button, Jumbotron } from 'react-bootstrap';
import { providerData } from './data/searchData';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default class Step2 extends Component {

    /*constructor(props) {
        super(props);
        this.onToggleArray.add = this.onToggleArray.bind(this)
    }
    }*/

    state = {
        toggledProviders: []
}

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <>

                <Jumbotron style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                <h1>I want to watch a...</h1>
                    
                    <Row>

                            <Col xs={12}>
                                <Card
                                    onClick={() => { this.props.setContType("movie") }}
                                    className={(this.props.contentType.includes("movie") ? "selected" : null)}
                                    onKeyPress={(e) => { if (e.charCode === 32) { e.preventDefault(); this.props.setContType("movie") }}}
                                    style={{ cursor: "pointer" }}
                                    tabIndex={0}
                                >
                                    Movie
                                </Card>
                                <Card
                                    onClick={() => { this.props.setContType("show") }}
                                    className={(this.props.contentType.includes("show") ? "selected" : null)}
                                    onKeyPress={(e) => { if (e.charCode === 32) { e.preventDefault(); this.props.setContType("show") }}}
                                    style={{ cursor: "pointer" }}
                                    tabIndex={0}
                                >
                                    TV Series
                                </Card>
                            </Col>
                    </Row>
                <p>
                        <Button onClick={ this.continue } variant="primary" className="float-right">Next</Button>    
                        <Button onClick={this.back} variant="primary" className="float-left">Back</Button>
                </p>
                </Jumbotron>
            </>
        )
    }
}
