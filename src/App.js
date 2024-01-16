import logo from './medias/pokemon-logo.png';
import './App.css';

import SigninForm from './pages/SigninForm';
import SignupForm from './pages/SignupForm';
import Teams from './pages/Teams';
import Users from './pages/Users';
import Fights from './pages/Fights';
import Fighting from './pages/Fighting';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MyNavBar from './components/MyNavBar';

function App() {
  return (
    <div className="App main-font pokefighter">

      <div className='row'>
        <div className='col-12'>
          <MyNavBar color="warning" />
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/fights" element={<Fights />} />
          <Route path="/fighting" element={<Fighting />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
