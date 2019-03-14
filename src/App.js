import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Students from './components/Students';
import Courses from './components/Courses';
import Enrollments from './components/Enrollments';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    students: [],
    courses: [],
    enrollments: []
  };

  componentDidMount() {
    axios.get('http://localhost:8000/api/students')
      .then(res => this.setState({ students: res.data }));

    axios.get('http://localhost:8000/api/courses')
      .then(res => this.setState({ courses: res.data }));

    axios.get('http://localhost:8000/api/enrollments')
      .then(res => this.setState({ enrollments: res.data }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <h2>Home</h2>
                <p>
                  This web app showcases the many-to-many relationships among
                  students and courses. A third model, enrollment, allows such
                  relationships and the presence of a shared property of grade.
                </p>
              </React.Fragment>
            )} />
            <Route exact path="/students" render={props => (
              <React.Fragment>
                <h2>Students</h2>
                <Students students={this.state.students} />
              </React.Fragment>
            )} />
            <Route exact path="/courses" render={props => (
              <React.Fragment>
                <h2>Courses</h2>
                <Courses courses={this.state.courses} />
              </React.Fragment>
            )} />
            <Route exact path="/enrollments" render={props => (
              <React.Fragment>
                <h2>Enrollments</h2>
                <Enrollments enrollments={this.state.enrollments} />
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
