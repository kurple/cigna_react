import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>The Cigna-Infosys Gradebook</h1>
      <Link style={linkStyle} to="/">Home</Link> |&nbsp;
      <Link style={linkStyle} to="/students">Students</Link> |&nbsp;
      <Link style={linkStyle} to="/courses">Courses</Link> |&nbsp;
      <Link style={linkStyle} to="/enrollments">Enrollments</Link>
    </header>
  );
}

const headerStyle = {
  background: '#333',
  backgroundImage: 'linear-gradient(to bottom right, blue, red)',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;
