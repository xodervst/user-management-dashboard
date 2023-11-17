import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UserDetails from './Components/UserDetails';
import AccountCreation from './Components/AccountCreation';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className="h-screen flex bg-gray-100">
        {/* Sidebar/Vertical Navigation */}
        <div className="bg-gray-800 text-white w-1/6 p-4 flex-shrink-0 pt-10">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <ul>
            <li className="flex items-center mb-2">
              <Link to="/" className="block p-2 hover:bg-gray-600">
                <span className="mr-2" role="img" aria-label="Home">
                  🏠
                </span>
                Home
              </Link>
            </li>
            <li className="flex items-center mb-2">
              <Link to="/user-details" className="block p-2 hover:bg-gray-600">
                <span className="mr-2" role="img" aria-label="User Details">
                  👤
                </span>
                User Details
              </Link>
            </li>
            <li className="flex items-center mb-2">
              <Link to="/account-creation" className="block p-2 hover:bg-gray-600">
                <span className="mr-2" role="img" aria-label="Account Creation">
                  🛠️
                </span>
                Account Creation
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4">
          {/* Top Bar */}
          <div className="bg-gray-700 p-4 mb-4">
            <div className="container mx-auto">
              <div className="flex items-center justify-between">
                <h1 className="text-white text-2xl font-bold">User Management Dashboard</h1>
              </div>
            </div>
          </div>

          {/* Content based on selected route */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-details" element={<UserDetails />} />
            <Route path="/account-creation" element={<AccountCreation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
