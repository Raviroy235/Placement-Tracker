import { Routes, Route } from 'react-router-dom';  
import Nav from './Components/Navbar/nav.jsx';
import Home from './Components/Home/Home.jsx';
import MyUserProfile from './Components/Myprofile/Myprofile.jsx';
import Opportunities from './Components/Opportunities/Opportunities.jsx';
import UserReviews from './Components/UserReviews/UserReviews.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import { UserProvider } from './Components/Context/UserContext';
import Contact from './Components/Contact/Contact.jsx';
import './App.css';

function App() {
  return (
    <UserProvider>
      <Nav />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myprofile" element={<MyUserProfile />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/feedback" element={<UserReviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </UserProvider>
  );
}

export default App;
