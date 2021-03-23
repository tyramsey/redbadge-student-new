import React from "react";

export default class PropsMapping extends React.Component {
  render() {
      const visitedPlaces = () => this.props.visited.map(place => <li>{place}</li>)
    return <div>
        <h2>Places I've been</h2>
        <ul>{visitedPlaces()}</ul>
    </div>;
  }
}
