import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Course extends Component {
  render() {
    const { id, name, students } = this.props.course;
    return (
      <div>
        <hr />
        <h3>{ name } (ID: { id })</h3>
          {this.props.course.students.map(student => {
            return <p>{student.name} (ID: { student.id })</p>;
          })}
      </div>
    );
  }
}

export default Course;
