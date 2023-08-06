import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import LoginForm from './Login/LoginForm';
import RegistrationForm from './Registration/Registration';
import TableComponent from './Table/Table';

const TableRoute = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Route changed:', location.pathname);
  }, [location]);

  const isAuthenticated = localStorage.getItem('authToken') !== null;
  return isAuthenticated ? <TableComponent /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<LoginForm />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/RegistrationForm" element={<RegistrationForm />} />
          <Route exact path="/TableComponent" element={<TableRoute />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
