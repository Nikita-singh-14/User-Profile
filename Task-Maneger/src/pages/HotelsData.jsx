import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HotelsData = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/hotels'); 
        setHotels(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch hotels data.");
        setLoading(false);
      }
    };

    fetchHotels();
  }, []); 

  if (loading) {
    return <div>Loading popular homes...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div className='hotel'>
      <h4>Popular homes in india</h4>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}} >
        {hotels.map((hotel) => (
          <div 
            key={hotel.id} 
            style={{ 
              border: '1px solid #ccc', 
              padding: '15px', 
              width: '500px',
              borderRadius: '8px' 
            }}
            className='hover:opacity-50'
          >
            <img src={hotel.imageUrl} alt="" style={{ width: '100%', height: 'auto', borderRadius: '4px' }}/>
            <h5 style={{ margin: '10px 0 5px 0' }}>{hotel.name}</h5>
            <p style={{ margin: '0', color: '#666' }}>📍 {hotel.location}</p>
            <p style={{ margin: '5px 0 0 0', fontWeight: 'bold' }}>
              ⭐ {hotel.rating} | ₹{hotel.price.toLocaleString('en-IN')}{" "}
              <span style={{ fontWeight: 'normal' }}>/ night</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelsData;