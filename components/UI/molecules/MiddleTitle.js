import React, { useState } from 'react';
import { useEffect } from 'react';
import { AddButton, ModButton } from '../atoms/Button';

/** <h> + <button> **/



// * 각 페이지에 구역별로 쓰이는 중간 타이틀
export function MiddleTitleH3(props) {

  //@ 타이틀에 부여할 Class : string
  const className = props.className;

  //@ 타이틀 내용 : string
  const titleText = props.titleText;

  //@ 관리자 여부 : boolean
  const isAdmin = props.isAdmin;

  //@ 보여주고자 하는 버튼의 Class : string
  const btnClass = props.btnClass;

  //@ 보여주고자 하는 버튼의 텍스트 : string
  const btnText = props.btnText;

  //@ 버튼에 바인딩 될 함수 : function
  const onClick=props.onClick


  return (
  <>
    <h3 className={`middle-title ${className ? className : ""}`}>
        {titleText? titleText : "중간제목 h3"}
    </h3 >
  </>
  );
}

// * 각 페이지에 구역별로 쓰이는 중간 타이틀
export function MiddleTitleH4(props) {

  //@ 타이틀에 부여할 Class : string
  const className = props.className;

  //@ 타이틀 내용 : string
  const titleText = props.titleText;

  //@ 관리자 여부 : boolean
  const isAdmin = props.isAdmin;

  //@ 보여주고자 하는 버튼의 Class : string
  const btnClass = props.btnClass;

  //@ 보여주고자 하는 버튼의 텍스트 : string
  const btnText = props.btnText;

  //@ 버튼에 바인딩 될 함수 : function
  const onClick=props.onClick


  return (
  <>
    <h4 className={`middle-title ${className ? className : ""}`}>
        {titleText? titleText : "중간제목 h4"}
        {isAdmin &&
          <AddButton
            btnClass={btnClass ? btnClass : ""}
            btnText={btnText ? btnText : ""}
            onClick={onClick ? onClick : ""}
          />
        }
    </h4 >
  </>
  );
}


// * 각 글의 상세내용 중간에 쓰이는 중간 타이틀
export function MiddleTitleH5(props) {

    const titleText = props.titleText;
    const className = props.className;
    const isAdmin = props.isAdmin;

    return (
    <>
      <h5 className={`middle-title ${className?className : ""}`}>
          {titleText? titleText : "중간제목 h5"}
          {isAdmin ? <ModButton /> : ""}
      </h5>
    </>
  );
}

