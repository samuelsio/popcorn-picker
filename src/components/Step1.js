import React, { Component } from 'react';
import { Row, Col, Card, Button, Jumbotron } from 'react-bootstrap';
import arrow from '../images/arrow.svg';

export default class Step2 extends Component {

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

                <Jumbotron className="step1" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                <h1 class="section-heading">What are you looking for?</h1>
                    
                    <Row className="mb-5">
                        <Col xs={12} className="d-flex flex-row justify-content-center text-center">
                            <Card
                                onClick={() => { this.props.setContType("movie") }}
                                className={"btn col col-lg-3 justify-content-center " + (this.props.contentType.includes("movie") ? "selected" : "")}
                                onKeyPress={(e) => { if (e.charCode === 32) { e.preventDefault(); this.props.setContType("movie") }}}
                                style={{ cursor: "pointer" }}
                                tabIndex={0}
                            >
                                <span class="emoji" role="img" aria-label="Movies">🎬</span>Movies
                            </Card>
                            <Card
                                onClick={() => { this.props.setContType("show") }}
                                className={"btn col col-lg-3 justify-content-center " + (this.props.contentType.includes("show") ? "selected" : "")}
                                onKeyPress={(e) => { if (e.charCode === 32) { e.preventDefault(); this.props.setContType("show") }}}
                                style={{ cursor: "pointer" }}
                                tabIndex={0}
                            >
                                <span class="emoji" role="img" aria-label="TV Series">📺</span>TV Series
                            </Card>
                        </Col>
                    </Row>
                <div class="d-flex flex-grow-1 justify-content-between">
                        <Button onClick={ this.continue } variant="primary" className="btn btn-next px-5 ml-auto">Start <img src={arrow} alt="" width="9" height="13" /></Button>
                </div>
                </Jumbotron>
            </>
        )
    }
}
