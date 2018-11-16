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
          console.log("+++ log: ", responseJson['baseTemperature']);
          console.log("+++ log: ", responseJson['monthlyVariance']);
          this.setState({
            data: responseJson['monthlyVariance']
          });
        })
        .catch(error => {
          console.error("+++ catch exception: ", error);
        });
    }

    render() { 
        let thing = this.state.data;
        // let block = thing.data;
        //
        // you have to map over thing
        // then map over the array
        return ( <div>{JSON.stringify(thing)}</div> );
        // return ( <div>{thing.data["monthlyVariance"]}</div> );
    }
}
 
export default DataLoader;