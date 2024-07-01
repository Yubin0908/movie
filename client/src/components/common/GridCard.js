import React from 'react';
import { Col } from 'antd';

const GridCard = (props) => {

  // console.log(props);
  // console.log('props.landingPage : ', props.landingPage);

  if (props.landingPage) {
    // Landing Page
    return (
      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          <a href={`movie/${props.id}`}>
            <img src={props.path}
                 alt={props.title}
                 width="100%"
            />
          </a>
        </div>
      </Col>
    );
  } else {
    // Detail Page
    return (
      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          <img src={props.path}
               alt={props.castName}
               width="100%"
          />
        </div>
      </Col>
    );
  }

};

export default GridCard;