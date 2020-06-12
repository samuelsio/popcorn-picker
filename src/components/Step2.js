import React, { Component } from 'react';
import { Row, Col, Card, Button, Jumbotron } from 'react-bootstrap';
import { providerData } from './data/searchData';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

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

                <Jumbotron style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                    <h3>What are you subscribed to?</h3>
                    
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
                                        src={`https://images.justwatch.com${ platform.icon_url.slice(0, platform.icon_url.length - 9) }s100 `}
                                    />
                                    
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    
                    <div class="d-flex flex-grow-1 justify-content-between">
                        <Button onClick={ this.continue } variant="primary" className="btn btn-next px-5">Next &rsaquo;</Button>    
                        <Button onClick={this.back} variant="primary" className="btn btn-back float-left px-5">&lsaquo; Back</Button>
                    </div>
                </Jumbotron>
            </>
        )
    }
}
