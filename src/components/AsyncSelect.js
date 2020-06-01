import React, { Component } from 'react';

import CreatableSelect from 'react-select/creatable';
import { colourOptions } from './data/multiSelectData';

export default class CreatableMulti extends Component {

  

  render() {
    return (
      <>
      <CreatableSelect
        isMulti
        options={this.props.options}
        onChange={this.props.handleInputChange}
        value={this.props.value}
        />
      </>
    );
  }
}
