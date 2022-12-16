import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkedForm from './Components/ImageLinkedForm/ImageLinkedForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Logo />
        <ImageLinkedForm />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
