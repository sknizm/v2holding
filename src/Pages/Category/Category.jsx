import React, { useEffect, useState } from 'react';
import './Category.css';
import { useParams } from 'react-router-dom';
import Properties from '../../Components/Properties/Properties';
import Footer from '../../Components/Footer/Footer';
import { base_url, dataList } from '../../data';

const Category = () => {
  const { type } = useParams();
  const [latest, setLatest] = useState([]);

  const getPropertyByType = async () => {
    try {
      const response = await fetch(`${base_url}/property/getByType`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ propertyType: type }), // Send 'type' as 'propertyType' in the body
      });
  
      if (!response.ok) {
        // Handle specific status codes
        if (response.status === 404) {
          console.error('No properties found for the given type.');
          setLatest([]); // Set to an empty array if no properties are found
        } else {
          throw new Error('Failed to fetch properties');
        }
      } else {
        const data = await response.json();
        setLatest(data); // Assuming 'data' is an array of properties
      }
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLatest([]); // Set to an empty array if there is an error
    }
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
    getPropertyByType();
  }, [type]);

  return (
    <div className='category'>
      {latest.length === 0 ? (
        <Properties title={`No Properties Found`} property={[]} />
      ) : (
        <Properties title={`${type} Projects`} property={latest} />
      )}
      <Footer />
      
    </div>
  );
};

export default Category;
