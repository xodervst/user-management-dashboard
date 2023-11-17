import React, { useState, useEffect } from 'react';

function UserDetails() {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null); // New state for the selected user

  useEffect(() => {
    // Fetch user data from the placeholder CSV
    // For simplicity, we'll use a hardcoded CSV string instead of an actual fetch
    const csvData = `Username,Email,Phone,ID,CreationDate
    user1,email1@example.com,123-456-7890,1,2023-01-01
    user2,email2@example.com,234-567-8901,2,2023-01-02
    user3,email3@example.com,345-678-9012,3,2023-01-03
    user4,email4@example.com,456-789-0123,4,2023-01-04
    user5,email5@example.com,567-890-1234,5,2023-01-05`;

    const rows = csvData.split('\n').slice(1); // Skip header
    const data = rows.map(row => {
      const [username, email, phone, id, creationDate] = row.split(',');
      return { username, email, phone, id, creationDate };
    });

    setUserData(data);
  }, []);

  const filteredData = userData.filter(user =>
    Object.values(user).some(value =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const handleGenerateReport = () => {
    // Implement the logic to generate a report for the selected user
    console.log(`Generating report for user: ${selectedUser.username}`);
    // Add your logic to generate a report here
    handleCloseModal(); // Close the modal after generating the report
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Username</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">ID</th>
            <th className="border p-2">Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.id} className="border" onClick={() => handleUserClick(user)}>
              <td className="border p-2">{user.username}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.phone}</td>
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.creationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for generating a report */}
      {selectedUser && (
        <div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">


          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Generate Report for {selectedUser.username}</h2>
            {/* Add additional content or buttons as needed */}
            <button onClick={handleGenerateReport}>Generate Report</button>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default UserDetails;
