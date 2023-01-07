import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Clarifai from 'clarifai';
import Logo from './Components/Logo/Logo';
import ImageLinkedForm from './Components/ImageLinkedForm/ImageLinkedForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Rank from './Components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: '26923c3cb6214ee3891d65311018e723'
});

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
    // App.models.predict('ethnicity-demographics-recognition', '');
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
