import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResumeShell extends Component {
  render() {
    return (
      <div>
        <h1>Resume Shell</h1>
        <h2>{ this.props.resume.name }</h2>
      </div>
    )
  }
};

ResumeShell.propTypes = {
  resume: PropTypes.object.isRequired
};

export default ResumeShell;
