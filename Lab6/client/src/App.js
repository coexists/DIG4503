import React from 'react';
import IdSearch from './components/IdSearch/';
import NameSearch from './components/NameSearch/';
import "./index.css";

class App extends React.Component {
  render(){
  return (
<div>
  <IdSearch />
  <NameSearch />
  <h2>Pokemon Name Appears here!</h2>
  <div id="reportingArea"></div>
</div>

  );
}
}
export default App; 