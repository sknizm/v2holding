import React, { useEffect, useState } from 'react';
import './EnquiryList.css';
import { base_url, exportDate } from '../../data';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';

const EnquiryList = () => {
  const [allEnquiry, setAllEnquiry] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const getEnquiryList = async () => {
    try {
      const response = await fetch(`${base_url}/enquiry`);
      if (response.ok) {
        const data = await response.json();
        setAllEnquiry(data);
      } else {
        console.error('Failed to fetch latest enquiry');
      }
    } catch (error) {
      console.error('Error fetching latest enquiry:', error);
    }
  };
  

  const deleteEnquiry = async (enquiryId) => {
    try {
      const response = await fetch(`${base_url}/enquiry`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ enquiryId }), // Convert the object to a JSON string
      });
  
      if (response.ok) {
        // Handle successful deletion here, like updating the UI
        console.log("Enquiry deleted successfully");
        getEnquiryList();
      } else {
        console.error("Failed to delete enquiry");
      }
    } catch (error) {
      console.error("Error deleting enquiry:", error);
    }
  };
  
  useEffect(() => {
    getEnquiryList();
  }, []);

  const exportDataToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiries");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const handleExport = () => {
    exportDataToExcel(allEnquiry, "EnquiriesData");
  };

  const openModal = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEnquiry(null);
  };

  return (
    <div className='enquiry-list'>
      <h1 className='title'>All Enquiry List</h1>
      <button className='download-btn' onClick={handleExport}>Download All Enquiry (Excel Sheet)</button>
      <div className="property-list">
        {allEnquiry.map((e) => (
          <div className="list" key={e.enquiryId}>
            <div className="text">
              <h4>{e.name}</h4>
              <h4>{exportDate(e.date)}</h4>
            </div>
            <div className="actions">
              <button className='open-btn' onClick={() => openModal(e)}>Open</button>
              <button onClick={()=>deleteEnquiry(e.enquiryId)} className='delete-btn'>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedEnquiry && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>Enquiry Details</h2>
            <p><strong>Name:</strong> {selectedEnquiry.name}</p>
            <p><strong>Phone:</strong> {selectedEnquiry.phone}</p>
            <p><strong>Email:</strong> {selectedEnquiry.email}</p>
            <p><strong>Requirement:</strong> {selectedEnquiry.requirement}</p>
            <p><strong>Message:</strong> {selectedEnquiry.message}</p>
            <p><strong>Date:</strong> {exportDate(selectedEnquiry.date)}</p>
            <button className='close-btn' onClick={closeModal}>Close</button>
          </div>
          <div className='modal-overlay' onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
};

export default EnquiryList;
