import React from 'react';

function MainImage (props) {
 return (
  <div style={{
    backgroundImage: `url(${props.image})`,
    width: '100%',
    height: '500px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'relative',
  }}>
    <div style={{
      position: 'absolute',
      maxWidth: '500px',
      bottom: '25px',
      color: '#fff',
      left: '25px',
    }}>
      <h2>{props.title}</h2>
      <p>{props.overview}</p>
    </div>

  </div>
 );
};

export default MainImage;