import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkedForm from './Components/ImageLinkedForm/ImageLinkedForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Rank from './Components/Rank/Rank';
import './App.css';

// const Clarifai = require('clarifai');

// const app = new Clarifai.App({
//   apiKey: '3dd2e7bcc29f4e918eaeb9209eebc5b0'
// });

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
    app.models.predict('ethnicity-demographics-recognition', '');
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
