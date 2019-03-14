import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Student extends Component {
  render() {
    const { id, name } = this.props.student;
    return (
      <div>
        <hr />
        <div style={portraitStyle}></div>
        <p>{ name } (ID: { id })</p>
      </div>
    );
  }
}

export default Student;

const portraitStyle = {
  background: '#333',
  borderRadius: '50%',
  width: '100px',
  height: '100px',
  margin: '0 auto'
}
