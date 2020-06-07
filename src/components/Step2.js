import React, { Component } from 'react';
import { Row, Col, Card, Button, Jumbotron, Form } from 'react-bootstrap';
import CreatableMulti from './CreatableMulti';
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
                <h1>Which platforms do you have access to?</h1>
                    <p>Or you could just choose one</p>
                    
                    <Row>
                        {providerData.map(platform => (

                            <Col xs={6} s={4} md={2}>
                                <Card
                                    key={platform.id}
                                    className={"provider mb-4 " + (this.props.providers.includes(platform.short_name) ? "selected" : null)}
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
                            
                            
                            /*<div key={platform.id}>
                                <img className="provider" alt="" src={`https://images.justwatch.com${ platform.icon_url.slice(0, platform.icon_url.length - 9) }s100 `} />
                                <button onClick={() => { this.props.onToggleArray(platform.short_name) }}>hello</button>
                                <p>{platform.clear_name}</p>
                            </div>*/
                        ))}
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
