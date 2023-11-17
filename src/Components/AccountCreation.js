// src/AccountCreation.js
import React, { useState } from 'react';

function AccountCreation() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!username || !password) {
        alert('Please fill in both username and password.');
        return;
      }
    // Dummy request handling
    //console.log('Submitted:', { username, password });
    // Add actual request handling logic here
    alert('Account created successfully');

    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div class="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <h2 class="text-2xl font-bold mb-4">Account Creation</h2>
        <form class="space-y-4" onSubmit={handleSubmit}>
            <div class="flex flex-col">
            <label for="username" class="mb-1 text-sm">Username:</label>
            <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="py-2 px-3 border border-gray-300 rounded-md"
            />
            </div>
            <div class="flex flex-col">
            <label for="password" class="mb-1 text-sm">Password:</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-2 px-3 border border-gray-300 rounded-md"
            />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-black py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                Create Account
            </button>
        </form>
        </div>

  );
}

export default AccountCreation;