import React from 'react';
import Header from './assets/Header';
import Footer from './assets/Footer';
import {Routes,Route} from 'react-router-dom'
import Home from './assets/Home';
import AllStudent from './assets/AllStudent';
import AddStudent from './assets/AddStudent';
import Help from './assets/Help';
import EditStudent from './assets/EditStudent';

const App = () => {
  return (
    <>
            <Header/>
           <Routes>
             <Route path="" element={<Home></Home>}></Route>
             <Route path="allstudent" element={<AllStudent></AllStudent>}></Route>
             <Route path="addstudent" element={<AddStudent></AddStudent>}></Route>
             <Route path="help" element={<Help></Help>}></Route>
             <Route path="edit/:id" element={<EditStudent></EditStudent>}></Route>
           </Routes>
           <Footer/>
    </>
  );
};

export default App;
