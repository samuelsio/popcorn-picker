import React, { Component } from 'react';
import { Row, Col, Card, Button, Jumbotron } from 'react-bootstrap';
import { providerData } from './data/searchData';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
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

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({
                    platforms: res.data
                });
            });
    }

    render() {
        return (
            <>

                <Jumbotron className="step2" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                    <h1 class="section-heading">Which apps do you use?</h1>
                    
                    <Row className="mb-5">
                        {providerData.map(platform => (

                            <Col xs={3} md={2} className="p-1">
                                <Card
                                    key={platform.id}
                                    className={"provider " + (this.props.providers.includes(platform.short_name) ? "selected" : null)}
                                    onClick={() => { this.props.onToggleArray(platform.short_name) }}
                                    onKeyPress={(e) => { if (e.charCode === 32) { e.preventDefault(); this.props.onToggleArray(platform.short_name) }}}
                                    style={{ cursor: "pointer" }}
                                    tabIndex={0}
                                >
                                    <FontAwesomeIcon className={"fa-selected"} icon={faCheck} />
                                    <Card.Img
                                        variant="top"
                                        className="provider-img"
                                        src={`https://images.justwatch.com${ platform.icon_url.slice(0, platform.icon_url.length - 9) }s100 `}
                                    />
                                    
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    
                    <div class="d-flex flex-grow-1 justify-content-between">
                        <Button onClick={ this.continue } variant="primary" className="btn btn-next px-5">Next <img src={arrow} alt="" width="9" height="13" /></Button>    
                        <Button onClick={this.back} variant="primary" className="btn btn-back float-left px-4 px-sm-5"><img src={arrow} alt="" width="9" height="13" /> Back</Button>
                    </div>
                </Jumbotron>
            </>
        )
    }
}
