import React, { Component } from 'react';
import _ from 'lodash';
import HeatMap from 'react-heatmap-grid';

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
            // data: responseJson['monthlyVariance']
            data: responseJson
          });
        })
        .catch(error => {
          console.error("+++ catch exception: ", error);
        });
    }

    getMinY(hash) {
      // let data = _.get(hash, 'variance');
      return _.reduce(hash, function(min, n) {
        return min < n['variance'] ? min : n['variance'];
      }, 0);
    }

    /**
     * 
     * @param {*} hash 
     * 
     * Long hand writting
     * 
     */
    getMaxY(hash) {
      return _.reduce(hash, function(max, n) {
        return max > n['variance'] ? max : n['variance'];
      }, 0);
    }

    getMin(hash) {
      return _.reduce(hash, (min, x) => min < x['variance'] ? min : x['variance']);
    }

    getMax(hash) {
      return _.reduce(hash, (max, x) => max > x['variance'] ? max : x['variance']);
    }

    render() { 

        let xLabelsVisibility = new Array(12)
        .fill(0)
        .map((_, i) => (i % 2 === 0
            ? true
            : false));

        let xLabels = new Array(12)
        .fill(0)
        .map((_, i) => `${i+1}`);

        let data = this.state.data;
        // you have to map over thing
        // then map over the array
        // return ( <div>{JSON.stringify(data)}</div> );
        // console.log("+++ data: ", data);
        let base = _.get(data, "baseTemperature");
        let variance = _.get(data, 'monthlyVariance');
        // console.log("+++ base: ", base);

        let yLabels = _.map(variance, x => x['year']);
        let yLabelsUniq = _.uniq(yLabels);

        console.log("+++ xLabelsVisibility: ", xLabelsVisibility);
        console.log("+++ xLabels: ", xLabels);
        console.log("+++ yLables: ", yLabels);
        console.log("+++ yLables: ", yLabelsUniq);
        // map over the hash, since this has has only two keys
        // baseTemperature and monthlyVariance, it will display
        // these two items, right now, as a string.
        // but if we map over the returned values, we can display
        // their contents as well.
        return ( 
          // _.map(data, x => <div>{JSON.stringify(x)}</div>)
          // { _.map(data, x => <div>{ _.map(x, y => <div>{JSON.stringify(y)}</div>) }</div>) }
          // { _.map(data, x => _.map(x, y => <div>{JSON.stringify(_.get(y, 'variance'))}</div>)) }
          // { _.map(data, x => _.map(x, y => _.get(y, 'variance'))) }
          //  { _.map(data, x => _.map(x, y => <div>{JSON.stringify(y)}</div>)) }
          <div>
            <div>{JSON.stringify(base)}</div>
            <div>{ this.getMinY(variance) }</div>
            <div>{ this.getMaxY(variance) }</div>
            <div>{ this.getMin(variance) }</div>
            <div>{ this.getMax(variance) }</div>

            { _.map(variance, x => <div>{JSON.stringify(x)}</div>)}

            {/* <HeatMap
            xLabels={xLabels}
            yLabels={yLabels}
            xLabelsLocation={"bottom"}
            xLabelsVisibility={xLabelsVisibility}
            xLabelWidth={50}
            data={data}
            squares
            onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
            cellStyle={(background, value, min, max, data, x, y) => ({
              background: `rgb(66, 86, 244, ${ 1 - (max - value) / (max - min)})`,
              fontSize: "11px"
            })}
            cellRender={value => value && `${value}%`}/> */}

          </div>




        );
    }
}
 
export default DataLoader;