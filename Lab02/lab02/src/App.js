import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage";

class App extends React.Component {
  render() {
  return (
    <HomePage firstName= "Vicky" />
            /* this becomes class Name with this.props.firstName inside*/
  );
}

}

export default App;
