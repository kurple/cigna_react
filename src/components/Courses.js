import React, { Component } from 'react';
import Course from './Course';
import PropTypes from 'prop-types';

class Courses extends Component {
  render() {
    return this.props.courses.map((course) => (
      <Course key={course.id} course={course} />
    ));
  }
}

// PropTypes
Courses.propTypes = {
  students: PropTypes.array.isRequired
};

export default Courses;
