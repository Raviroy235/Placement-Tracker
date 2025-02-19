import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Navbar/nav.jsx';
import Home from './Components/Home/Home.jsx';
import MyUserProfile from './Components/Myprofile/Myprofile.jsx';
import BusinessEntity from './Components/BusinessEntity/BusinessEntity.jsx';
import UserReviews from './Components/UserReviews/UserReviews.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route
            path="/"
            element={
              <div className="Home">
                <Nav />
                <Home />
              </div>
            }
          />

          <Route
            path="/myprofile"
            element={
              <div className='prof'>
                <Nav />
                <MyUserProfile />
              </div>
            }
          />

          <Route
          path='/company'
          element={
            <div className='company'>
              <Nav />
              <BusinessEntity />
            </div>
          }/>

          <Route
          path='/feedback'
          element={
            <div className='feedback'>
              <Nav />
              <UserReviews />
            </div>
          }/>

          <Route
            path="*"
            element={
              <div>
                <p>kya bhai i am confused to route</p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
