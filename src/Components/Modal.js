import React from "react";


const Modal = ({ user, closeModal, generateReport }) => {
    const handleGenerateReport = () => {
      // Call the function to generate the report
      generateReport(user.id);
    };
  
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/* Background overlay */}
          <div
            className="fixed inset-0 transition-opacity"
            onClick={closeModal}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
  
          {/* Modal panel */}
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              {/* <span
                className="absolute top-0 right-0 cursor-pointer p-4"
                onClick={closeModal}
              >
                &times;
              </span> */}
  
              <button
                className="bg-gray-500 absolute top-2 right-2 text-white rounded-full p-2 hover:bg-gray-600"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
  
              <h2 className="text-2xl font-bold mb-4">User Details</h2>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>ID:</strong> {user.id}
              </p>
              <p>
                <strong>Creation Date:</strong> {user.creationDate}
              </p>
  
              {/* Button to generate report */}
              <button
                className="bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4 center"
                onClick={handleGenerateReport}
              >
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Modal;
