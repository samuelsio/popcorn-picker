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
        providers: [],
        genres: [],
        contentType: ""
    }

    getRequest = () => {
        return 'https://apis.justwatch.com/content/titles/en_GB/popular?body={"age_certifications":[],"content_types":["' + this.state.contentType + '"],"genres":["' + this.state.genres.map(genre => (genre.value >= 2 ? genre.value + ',' : genre.value)) + '"],"languages":null,"min_price":null,"matching_offers_only":null,"max_price":null,"monetization_types":[],"presentation_types":[],"providers":["' + this.state.providers.toString() + '"],"release_year_from":null,"release_year_until":null,"scoring_filter_types":null,"timeline_type":null,"sort_by":null,"sort_asc":null,"page":1,"page_size":30}'
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

    setContType = (input) => {
        this.setState({ contentType: input})
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    handleStep2InputChange = (newValue) => {
        this.setState({ platforms: newValue });
    };

    handleStep3InputChange = (newValue) => {
        this.setState({ genres: newValue });
    };

    onToggleArray = item => {
        const arr = this.state.providers;
        let newArr = []

        if (arr.includes(item)) {
            this.setState({ providers: arr.filter(i => i !== item) });
            console.log("Removed");
        }

        else {
            newArr = [ ...arr, item ];
            this.setState({ providers: newArr });
            console.log("Added");
        }
    }

    

    render() {

        const { currentStep, genre, type, keyword, age, minrating, withcast } = this.state;
        const values = { genre, type, keyword, age, minrating, withcast };

        switch (currentStep) {
            case 1:
                return (
                    <div>
                    <ProgressBar style={{ marginTop: "2em", borderBottomLeftRadius: 0, borderBottomRightRadius: 0, backgroundColor: "#d9dde1" }} now={this.state.currentStep / this.state.totalSteps * 100} />  
                        <Step1 nextStep={this.nextStep} handleChange={this.handleChange} setContType={this.setContType} contentType={this.state.contentType} />
                    </div>
                )
            case 2:
                return (
                    <div>
                    <ProgressBar style={{ marginTop: "2em", borderBottomLeftRadius: 0, borderBottomRightRadius: 0, backgroundColor: "#d9dde1" }} now={this.state.currentStep / this.state.totalSteps * 100} />  
                    <Step2 nextStep={this.nextStep} providers={this.state.providers} onToggleArray={this.onToggleArray} value={this.state.platforms} prevStep={this.prevStep} />
                    </div>
                )
            case 3:
                return (
                    <div>
                    <ProgressBar style={{ marginTop: "2em", borderBottomLeftRadius: 0, borderBottomRightRadius: 0, backgroundColor: "#d9dde1" }} now={this.state.currentStep / this.state.totalSteps * 100} />  
                    <Step3 nextStep={this.nextStep} handleChange={this.handleChange} handleStep3InputChange={this.handleStep3InputChange} value={this.state.genres} prevStep={this.prevStep} />
                    </div>
                )
            case 4:
                return (
                    <div>
                    <ProgressBar style={{ marginTop: "2em", borderBottomLeftRadius: 0, borderBottomRightRadius: 0, backgroundColor: "#d9dde1" }} now={this.state.currentStep / this.state.totalSteps * 100} />  
                    <Step4 nextStep={this.nextStep} handleChange={this.handleChange} request={this.getRequest} values={values} prevStep={this.prevStep} providers={this.state.providers} genres={this.state.genres} />
                    </div>
                )
            //no default
        }
    }
}
