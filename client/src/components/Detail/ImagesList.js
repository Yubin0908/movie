import React from 'react';
import { Row } from 'antd';
import AntCard from "../common/AntCard";
import { IMAGE_BASE_URL } from "../Config";

const ImagesList = props => {

  return (
    <>
      <Row gutter={[10, 10]}>
        {props.target.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {item.profile_path &&
                <AntCard
                  path={`${IMAGE_BASE_URL}w400${item.profile_path}`}
                  name={item.name}
                  id={item.id}
                />
              }
            </React.Fragment>
          )
        })}
      </Row>
    </>
  );
};

export default ImagesList;
