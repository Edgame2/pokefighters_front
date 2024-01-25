import logo from './medias/pokemon-logo.png';
import './App.css';

import SigninForm from './pages/SigninForm';
import SignupForm from './pages/SignupForm';
import Teams from './pages/Teams';
import Users from './pages/Users';
import Fights from './pages/Fights';
import Fighting from './pages/Fighting';
import Leaderboard from './pages/Leaderboard';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MyNavBar from './components/MyNavBar';

function App() {

  //TODO: Chapter 5 : Make it your own
  //TODO: Change the design of the app, add a logo, change the colors, etc...
  //TODO: Add a new page, add a new feature, etc...
  //TODO: Have fun, be creative, and show us what you can do!
  //TODO: Look at the API Code

  return (
    <div className="App main-font pokefighter">
      <ToastContainer />
      <div className='row'>
        <div className='col-12'>
          <MyNavBar />
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/fights" element={<Fights />} />
          <Route path="/fighting/:defenser_id" element={<Fighting />} />
          <Route path="/leaderboard" element={<Leaderboard />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
