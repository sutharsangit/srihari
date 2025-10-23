import React from 'react';
import { Link } from 'react-router-dom';

const Semester = () => {
  return (
    <div>
      <h1>Semesters</h1>
      <ul>
        <li>Semester 1</li>
        <li>Semester 2</li>
        <li>Semester 3</li>
        <li>Semester 4</li>
        <li>Semester 5</li>
        <li>Semester 6</li>
        <li>
          <Link to="/semesters/sem7">Semester 7</Link>
        </li>
        <li>Semester 8</li>
      </ul>
    </div>
  );
};

export default Semester;