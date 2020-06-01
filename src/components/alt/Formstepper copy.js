import React, { Component } from 'react';

import { ProgressBar } from 'react-bootstrap';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

export let progress = 0

export default class Formstepper extends Component {

    state = {
        totalSteps: 4,
        currentStep: 1,
        step: 1,
        genre: '',
        type: '',
        keyword: '',
        age: '',
        minrating: '',
        withcast: '',
        keywords: undefined,
        actors: undefined
    }

    nextStep = () => {
        const { currentStep } = this.state;
        this.setState({
            currentStep: currentStep + 1,
        });
    }

    prevStep = () => {
        const { currentStep } = this.state;
        this.setState({
            currentStep: currentStep - 1,
        });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    handleStep2InputChange = (newValue, actionMeta) => {
        this.setState({ keywords: newValue });
    };

    handleStep3InputChange = (newValue, actionMeta) => {
        this.setState({ actors: newValue });
    };

    

    render() {

        const { currentStep, genre, type, keyword, age, minrating, withcast } = this.state;
        const values = { genre, type, keyword, age, minrating, withcast };

        switch (currentStep) {
            case 1:
                return (
                    <div>
                    <ProgressBar style={{ marginTop: "2em", borderBottomLeftRadius: 0, borderBottomRightRadius: 0, backgroundColor: "#d9dde1" }} now={this.state.currentStep / this.state.totalSteps * 100} />  
                        <Step1 nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                    </div>
                )
            case 2:
                return (
                    <div>
                    <ProgressBar style={{ marginTop: "2em", borderBottomLeftRadius: 0, borderBottomRightRadius: 0, backgroundColor: "#d9dde1" }} now={this.state.currentStep / this.state.totalSteps * 100} />  
                    <Step2 nextStep={this.nextStep} handleChange={this.handleChange} handleStep2InputChange={this.handleStep2InputChange} value={this.state.keywords} prevStep={this.prevStep} />
                    </div>
                )
            case 3:
                return (
                    <div>
                    <ProgressBar style={{ marginTop: "2em", borderBottomLeftRadius: 0, borderBottomRightRadius: 0, backgroundColor: "#d9dde1" }} now={this.state.currentStep / this.state.totalSteps * 100} />  
                    <Step3 nextStep={this.nextStep} handleChange={this.handleChange} handleStep3InputChange={this.handleStep3InputChange} value={this.state.actors} prevStep={this.prevStep} />
                    </div>
                )
            case 4:
                return (
                    <div>
                    <ProgressBar style={{ marginTop: "2em", borderBottomLeftRadius: 0, borderBottomRightRadius: 0, backgroundColor: "#d9dde1" }} now={this.state.currentStep / this.state.totalSteps * 100} />  
                    <Step4 nextStep={this.nextStep} handleChange={this.handleChange} values={values} prevStep={this.prevStep} keywords={this.state.keywords} actors={this.state.actors} />
                    </div>
                )
            //no default
        }
    }
}
