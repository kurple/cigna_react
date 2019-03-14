import React, { Component } from 'react';
import Enrollment from './Enrollment';
import PropTypes from 'prop-types';

class Enrollments extends Component {
  render() {
    return this.props.enrollments.map((enrollment) => (
      <Enrollment key={enrollment.id} enrollment={enrollment} />
    ));
  }
}

// PropTypes
Enrollments.propTypes = {
  enrollments: PropTypes.array.isRequired
};

export default Enrollments;
