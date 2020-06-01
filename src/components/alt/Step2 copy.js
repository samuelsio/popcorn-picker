import React, { Component } from 'react';
import AsyncSelect from 'react-select/async'

class ReactSelectExample extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        selectedOption: {}
    }
  }

fetchData = (inputValue, callback) => {
    if (!inputValue) {
      callback([]);
    } else {
        setTimeout(() => {
  fetch("https://api.themoviedb.org/3/search/keyword?api_key=5182153b17469d911b976b64bf7912c3&query=" + inputValue, {
    method: "GET",
  })
      .then((resp) => {
    return resp.json()
  }) 
      .then((data) => {
      
      console.log(data)
      const tempArray = [];
     data.results.forEach((element) => {
            tempArray.push({ label: `${element.name}`, value: element.email });
     });
     callback(tempArray);            
  })
  .catch((error) => {
    console.log(error, "catch the hoop")
  });
});
}
}

 onSearchChange = (selectedOption) => {
    if (selectedOption) {

    this.setState({
        selectedOption
       });
    }
  };
  render() {
      return ( <div>
           <AsyncSelect
                value={this.state.selectedOption}
                loadOptions={this.fetchData}
                placeholder="Admin Name"
                onChange={(e) => {
                    this.onSearchChange(e);
                }}
                defaultOptions={false}
            />
      </div>)
  }

}

export default ReactSelectExample;
