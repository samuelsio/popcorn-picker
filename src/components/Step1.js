import React, { Component } from 'react';
import { Row, Col, Card, Button, Jumbotron } from 'react-bootstrap';

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

                <Jumbotron style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                <h3 className="mb-3">What are you looking for?</h3>
                    
                    <Row className="step1 mb-5">
                        <Col xs={12} className="d-flex flex-row justify-content-center text-center">
                            <Card
                                onClick={() => { this.props.setContType("movie") }}
                                className={"col col-lg-3 justify-content-center " + (this.props.contentType.includes("movie") ? "selected" : "")}
                                onKeyPress={(e) => { if (e.charCode === 32) { e.preventDefault(); this.props.setContType("movie") }}}
                                style={{ cursor: "pointer" }}
                                tabIndex={0}
                            >
                                <span role="img" aria-label="Movies">🎬</span>Movies
                            </Card>
                            <Card
                                onClick={() => { this.props.setContType("show") }}
                                className={"col col-lg-3 justify-content-center " + (this.props.contentType.includes("show") ? "selected" : "")}
                                onKeyPress={(e) => { if (e.charCode === 32) { e.preventDefault(); this.props.setContType("show") }}}
                                style={{ cursor: "pointer" }}
                                tabIndex={0}
                            >
                                <span role="img" aria-label="TV Series">📺</span>TV Series
                            </Card>
                        </Col>
                    </Row>
                <p>
                        <Button onClick={ this.continue } variant="primary" className="float-right px-5">Start</Button>
                </p>
                </Jumbotron>
            </>
        )
    }
}
