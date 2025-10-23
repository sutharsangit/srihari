import React from 'react';
import { Link } from 'react-router-dom';

const Sem7 = () => {
  return (
    <div>
      <h1>Semester 7</h1>
      <p>Select a subject to view class notes:</p>
      <ul>
        <li><Link to="/semesters/sem7/subject1">Subject 1</Link></li>
        <li><Link to="/semesters/sem7/subject2">Subject 2</Link></li>
        {/* Add more subjects as necessary */}
      </ul>
    </div>
  );
};

export default Sem7;