import React, { useState, useEffect } from 'react';
import Modal from './Modal';
// Modal component



function UserDetails() {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

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

  const openModal = user => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const generateReport = (userId) => {
    // Simulating report generation
    alert(`Generating report for user with ID: ${userId}`);
    // You can replace this with your actual report generation logic
    // For example, make an API call to fetch and generate the report
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />
      <table className="w-full border border-separate">
        {/* ... (unchanged table header) */}
        <tbody>
          {filteredData.map(user => (
            <tr key={user.id} className="border" onClick={() => openModal(user)}>
              <td className="border p-2 bg-gray-200">{user.username}</td>
              <td className="border p-2 bg-gray-200">{user.email}</td>
              <td className="border p-2 bg-gray-200">{user.phone}</td>
              <td className="border p-2 bg-gray-200">{user.id}</td>
              <td className="border p-2 bg-gray-200">{user.creationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && <Modal user={selectedUser} closeModal={closeModal} generateReport={generateReport} />}
    </div>
  );
}

export default UserDetails;
