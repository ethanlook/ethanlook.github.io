import React, { Component } from 'react';
import './App.css';
import resume from './config/resume-content';
import ResumeShell from './components/resume-shell';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ResumeShell resume={resume} />
      </div>
    );
  }
}

export default App;
