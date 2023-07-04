import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';

import SiteFooter from './components/common/SiteFooter';
import SiteNav from './components/common/SiteNav';

import HomePage from './components/home/HomePage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from "./components/auth/RegisterPage";

function App() {
  return (
    <div>
      <header>
        <SiteNav />
        <Routes>
          <Route path='*' element={<HomePage />} />
          <Route path='/' exact={true} element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
        <SiteFooter />        
      </header>
    </div>
  );
}

export default App;
