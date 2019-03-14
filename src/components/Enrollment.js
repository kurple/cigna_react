import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Enrollment extends Component {
  render() {
    const { id, course_id, student_id, grade } = this.props.enrollment;
    return (
      <div>
        <hr />
        <p>Course ID: { course_id }</p>
        <p>Student ID: { student_id }</p>
        <p>Grade: { grade }</p>
      </div>
    );
  }
}

export default Enrollment;
