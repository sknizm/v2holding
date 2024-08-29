import React, { useEffect, useState } from 'react'
import './AllPropertyList.css'
import {awardList2, base_url} from '../../data'
import { Link } from 'react-router-dom';

const AllPropertyList = ({setMenu}) => {
    
  const [property, setProperty] = useState([]);

  const deleteProperty = async (propertyid)=>{
    try {
        // Make a DELETE request to the backend
        const response = await fetch(`${base_url}/property/deleteById`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ propertyid:propertyid }),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        getAllProperty();
        // Optionally, you can add additional logic here to update the UI
      } catch (error) {
        console.error('Error deleting property:', error);
        alert('Failed to delete property');
      }
  }

  const getAllProperty = async () => {
    try {
      const response = await fetch(`${base_url}/property`);
      if (response.ok) {
        const data = await response.json();
        setProperty(data);
      } else {
        console.error('Failed to fetch latest properties');
      }
    } catch (error) {
      console.error('Error fetching latest properties:', error);
    }
  };

  useEffect(() => {
    getAllProperty();
  }, []);
  return (
    <div className='all-property-list'>
        <div className="upper-section">
            <button onClick={()=>{setMenu('add-property')}}>Add Property</button>
        </div>
        <h1 className='title'>All Property List</h1>
        <div className="property-list">
            {
                property?.map((e)=>{
                    return <div  className="list">
                        <img src={e.propertyImage[0]} alt="" />
                        <h4>{e.projectTitle}</h4>
                        <div className="actions">
                            <Link to={`/property-details/${e.propertyid}`}>Open</Link>
                            <button onClick={()=>{deleteProperty(e.propertyid)}}>Delete</button>
                        </div>
                    </div>
                })
            }

        </div>
    </div>
  )
}

export default AllPropertyList