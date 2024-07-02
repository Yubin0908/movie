import React from 'react';
import { Col, Card } from "antd";
import {Link} from "react-router-dom";

const AntCard = props => {

  const { Meta } = Card;

  if (props.landingPage) {
    // Landing Page
    return (
      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          <Link to={`movie/${props.id}`}>
            <Card hoverable
                  style={{width:'100%'}}
                  cover={
                    <img src={props.path}
                         alt={props.title}
                    />
                  }
            >
              <Meta title={props.title}></Meta>
            </Card>
          </Link>
        </div>
      </Col>
    );
  } else {
    // Detail Page
    return (

      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          <Card hoverable
                style={{width:'100%'}}
                cover={
                  <img src={props.path}
                       alt={props.name}
                  />
                }
          >
            <Meta title={props.name}></Meta>
          </Card>
        </div>
      </Col>
    );
  }
};

export default AntCard;
