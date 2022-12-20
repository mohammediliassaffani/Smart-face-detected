import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkedForm from './Components/ImageLinkedForm/ImageLinkedForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Rank from './Components/Rank/Rank';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }
  onInputChange = (e) => {
    console.log(e.target.value);
  };

  onButtonSabmit = () => {
    console.log('click');
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkedForm onInputChange={this.onInputChange} onButtonSabmit={this.onButtonSabmit} />
        <FaceRecognition />
        <Rank />
      </div>
    );
  }
}

export default App;
