import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from './Login/LoginForm';
import RegistrationForm from './Registration/Registration'; 
import TableComponent from './Table/Table';

const App = () => {
  return (
    <div>
      {/* <TableComponent/> */}
       <Router>
          <Routes>
          <Route index element={<LoginForm/>}/>
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/RegistrationForm" element={<RegistrationForm />} />
          <Route exact path="/TableComponent" element={<TableComponent />} />

          </Routes>
      </Router>
    </div>
  );
};

export default App;
