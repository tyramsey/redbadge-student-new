import React, { Component } from 'react';

class StateExample extends Component {

    constructor(props){
        super(props);
        this.state = {currentTemp: '78', location: 'Indiana'}
        // this.handleClick = this.handleClick.bind(this);
    }
    // handleClick() {
    //     this.setState({currentTemp: '48'})
    // }

    handleClick = () => {
        this.setState({currentTemp: '25'})
    }


    render() {
        return <div>Hello the current temp is {this.state.currentTemp} - {this.state.location}
        <button onClick={this.handleClick}>Click Me To Change Temp</button>
        </div>
    }
}

export default StateExample;