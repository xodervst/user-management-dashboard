import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UserDetails from './Components/UserDetails';
import AccountCreation from './Components/AccountCreation';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        

        <nav className="bg-green-500 p-4 mb-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
            <ul className="flex space-x-4">
            <li>
              <Link to="/user-details" className="text-white font-bold text-xl hover:text-blue-700">
                User Details
              </Link>
            </li>
            <li>
              <Link to="/account-creation" className="text-white font-bold text-xl hover:text-blue-700">
                Account Creation
              </Link>
            </li>
          </ul>
            </div>
          </div>
        </nav>

        

        <Routes>
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/account-creation" element={<AccountCreation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
