import React from 'react';

const Test = (props) => {
  console.log(props.hello);
  return (
    <div>
      Test Components {props.hello}
    </div>
  )
}

function Items () {
 return (
   <div>
     <div>상품 정보</div>

     {/* boolean, null, undefined는 무시됨(렌더링 되지 않음)*/}
     <div/>
     <div></div>
     <div>{false}</div>
     <div>{null}</div>
     <div>{undefined}</div>
     <div>{true}</div>

     {/* 조건부 렌더링 */}
     {true && 'Hi'}
     {true && true}
     {true && <Test hello="hello" />}
     {false && <Test />}
     {0 && <Test />}
     {<Test /> && false}
   </div>
 );
};

export default Items;