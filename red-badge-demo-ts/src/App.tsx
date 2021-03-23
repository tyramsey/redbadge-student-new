import React from "react";
import PropsExample from "./components/PropsExample";
import PropsMapping from './components/PropsMapping'

function App() {
  const visitedPlaces = ['Joshua Tree', 'New River Gorge', 'Zion', 'Arches', 'Red River Gorge', 'Chattanooga']
  return (
    <div>
      <PropsExample name="Tom" business="Myspace" />
      <PropsMapping visited={visitedPlaces}/>
    </div>
  );
}

export default App;
