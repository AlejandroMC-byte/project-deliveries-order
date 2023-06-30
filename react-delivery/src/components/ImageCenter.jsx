import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageCenter = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
      <img className='img-fluid' src="https://www.advotics.com/wp-content/uploads/2022/02/surat-jalan-01-1-4-1024x656.png" alt="Imagen" />
    </div>
  );
};

export default ImageCenter;