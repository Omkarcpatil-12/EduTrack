import React from 'react'


function Home() {
  return (
    
    <div>
      

      <div className="container my-5">
        <div class="jumbotron bg-warning">
          <h1 class="display-5 text-center font-weight-bold text-success">Welcome to my CRUD Application</h1>
          <p class="lead text-center font-weight-bold">This project is a full-stack web application that implements basic CRUD operations (Create, Read, Update, Delete). It is built using React for the frontend and Java Spring Boot for the backend.</p>
          <hr class="my-4" />
          <p className='text-center'>Implementing this Functionalities ensures that user have full control over there data,leading to a dynamic and user-friendly application.</p><br />
          <p class="lead">
            <div className='container text-center'>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></div>
          </p>
        </div>
      </div>

     
    </div>
  )
}

export default Home