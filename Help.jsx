import React from 'react';

function Help() {
  return (
    <div className="container mt-5 text-center">
      <h2 className="text-primary mb-4 ">Help & Support</h2>
      
      <div className="card p-4 shadow-sm bg-warning ">
        <h5 className='font-weight-bold'>How to Add a Student?</h5>
        <p>Go to the "Add Student" page, fill in the name, branch, and score, then click the Submit button.</p>
              <hr />
        <h5 className='font-weight-bold'>How to View Students?</h5>
        <p>Visit the "All Students" page to see a list of all students in the database.</p>

        <hr />

        <h5 className='font-weight-bold'>Contact</h5>
        <p>Email: support@example.com</p>
      </div>
    </div>
  );
}

export default Help;
