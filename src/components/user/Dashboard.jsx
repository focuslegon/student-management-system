import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  // Dummy student data
  const students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Michael Johnson' },
    // Add more student data as needed
  ];

  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>
      <div className="student-list">
        {students.map(student => (
          <Link key={student.id} to={`/student/${student.id}`} className="student-link">
            {student.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
