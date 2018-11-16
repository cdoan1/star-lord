import React, { Component } from 'react';

const dataSource = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json';

/**
 * Load Data from the data source endpoint
 * then return the results as a string
 * to be displayed simply in a div block
 */
class DataLoader extends Component {
    state = { data: null }
    componentDidMount() {
        fetch(`${dataSource}`)
        .then(response => response.json())
        .then(responseJson => {
          console.log("+++ log: ", responseJson);
          this.setState({
            data: responseJson
          });
        })
        .catch(error => {
          console.error("+++ catch exception: ", error);
        });
    }

    render() { 
        let thing = this.state;
        return ( <div>{JSON.stringify(thing.data)}</div> );
    }
}
 
export default DataLoader;