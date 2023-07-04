import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@aws-amplify/ui-react/styles.css';

import SiteNav from './components/common/SiteNav';
import SiteFooter from './components/common/SiteFooter';
import HomePage from './components/home/HomePage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import ValidatePage from './components/auth/ValidatePage';
import Contacts from './components/contacts/Contacts';

Amplify.configure(awsExports);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function updateAuthStatus(authStatus) {
    setIsAuthenticated(authStatus)
  }

  return (
    <div>
      <SiteNav isAuthenticated={isAuthenticated} updateAuthStatus={updateAuthStatus} />
      <Routes>
        <Route path='*' element={<HomePage isAuthenticated={isAuthenticated} />} />
        <Route path='/' exact={true} element={<HomePage isAuthenticated={isAuthenticated} />} />
        <Route path='/login' element={<LoginPage updateAuthStatus={updateAuthStatus} />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/validate' element={<ValidatePage />} />
        <Route path='/contacts' element={<Contacts isAuthenticated={isAuthenticated} />} />
      </Routes>
      <SiteFooter />
    </div>
  )
};

export default App;
