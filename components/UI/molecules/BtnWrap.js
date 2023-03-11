import React, { useState } from 'react';
import Button, {OkButton, CancelButton} from '../atoms/Button';

// * 유기체 단위의 Button Wrap Box 정의

// * 기본 Button Wrap Box
export default function BtnWrap(props) {

    //@ Box Style : 배열
    //  - Button Wrap Box 에 디자인을 적용 할 수 있는 클래스명을 배열로 전달
    const boxStyle = props.boxStyle;
    
    //@ Buttons : 배열
    //  - Button Wrap Box 안에 들어갈 버튼 요소들의 옵션을 배열로 전달               
    //  - 배열 안에는 각각의 버튼 컴포넌트를 호출 할 수 있는 옵션이 객체로 존재             
    const Buttons = props.Buttons;

    return (
    <>  
        <div className={`btn-wrap ${boxStyle && boxStyle.map((item)=>("item"))}`}>
        {
          Buttons ? 
            Buttons.map((item)=>(
              {item} 
            ))
            : 
            ""
        }
        </div>
    </>
  );
}



// * 확인 & 취소 Button Wrap Box
export function OkCancelBtnWrap(props) {

  //@ className : string
  //  - Button Wrap Box 에 디자인을 적용 할 수 있는 클래스명을 배열로 전달
  const className = props.className;
  
  //@ btnFunArr : []
  //  - 배열 안의 각 항목 타입은 function
  //  - Button Wrap Box 안에 있는 버튼들 할당할 함수 모음 배열
  const btnFunArr = props.btnFunArr;

  // btnTextArr : []
  //  - 배열 안의 각 항목 타입은 string
  //  - Button Wrap Box 안에 있는 버튼에 보이고자 하는 글씨 모음 배열
  const btnTextArr = props.btnTextArr;

  return (
  <>  
      <div className={`btn-wrap ${className ? className : ""}`}>
        <CancelButton 
          btnText = {btnTextArr ? btnTextArr[0]: "취소"}
          onClick = {btnFunArr ? btnFunArr[0] : null}
        />
        <OkButton 
          btnText = {btnTextArr ? btnTextArr[1] : "확인"}
          onClick = {btnFunArr ? btnFunArr[1] : null}
        />
      </div>
  </>
);
}




