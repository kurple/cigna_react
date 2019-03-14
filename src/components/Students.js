import React, { Component } from 'react';
import Student from './Student';
import PropTypes from 'prop-types';

class Students extends Component {
  render() {
    return this.props.students.map((student) => (
      <Student key={student.id} student={student} />
    ));
  }
}

// PropTypes
Students.propTypes = {
  students: PropTypes.array.isRequired
};

export default Students;
