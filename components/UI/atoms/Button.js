import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

/* 원자 단위의 Button 그룹 정의  */
/* @ => 시공도면, 체크리스트, 고객 목록 보기 */
export default function BasicButton(props) {

    //@ 버튼에 부여할 클래스명 : string
    const className = props.className;

    //@ 버튼에 부여할 id : string
    const id = props.id;

    //@ 버튼에 들어갈 텍스트 : string
    const btnText = props.btnText;

    //@ 버튼에 바인딩 될 클릭 이벤트 함수 : function
    const onClick = props.onClick;

    return (
    <>
        <Button
            variant="contained"
            onClick={onClick}
            className={`btn default ${className ? className : ""}`}
            id={id}
            size="small"
            disableElevation
        >
            {btnText ? btnText : "일부에 사용할 커스텀 버튼"}
        </Button>
    </>
    );
}


/** CONFIRM 버튼 그룹 **/

/* 확인 버튼 */
export function OkButton(props) {

    //@ 버튼에 들어갈 텍스트 : string
    const btnText = props.btnText;

    //@ 버튼에 바인딩 될 클릭 이벤트 함수 : function
    const onClick = props.onClick;

    return (
    <>
       <Button
            variant="contained"
            onClick={onClick}
            className={"btn ok-btn"} 
            size="small"
            disableElevation
        >
            {btnText ? btnText : "확인"}
        </Button>
    </>
  );
}

/* 취소 버튼 */
export function CancelButton(props) {

    //@ 버튼에 들어갈 텍스트 : string
    const btnText = props.btnText;

    //@ 버튼에 바인딩 될 클릭 이벤트 함수 : function
    const onClick = props.onClick;

    return (
    <>
       <Button
            variant="contained"
            onClick={onClick}
            className={"btn cancel-btn"} 
            size="small"
            disableElevation
        >
            {btnText? btnText : "취소"}
        </Button>
    </>
  );
}



/** CRUD 버튼 그룹 **/

/* 조회 버튼 */
export function SearchButton(props) {
   
    //@ 버튼에 들어갈 텍스트 : string
    const btnText = props.btnText;

    //@ 버튼에 바인딩 될 클릭 이벤트 함수 : function
    const onClick = props.onClick;

    return (
    <>
       <Button
            variant="contained"
            onClick={onClick}
            className={"btn crud-btn search-btn"} 
            size="small"
            disableElevation
        >
            {btnText ? btnText : "조회"}
        </Button> 
    </>
  );
}

/* 등록 버튼 */
export function AddButton(props) {

    //@ id : string
    const id = props.id;

    //@ className : string
    const className = props.className;

    //@ 보여주고자 하는 버튼의 텍스트 : string
    const btnText = props.btnText;

    //@ 버튼에 바인딩 될 클릭 이벤트 함수 : function
    const onClick = props.onClick;

    return (
    <>
       <Button
            className={`btn crud-btn add-btn ${className ? className : ""}`} 
            id={id ? id :""}
            onClick={onClick ? onClick : ""}
            variant="contained"
            size="small"
            disableElevation
        >
            {btnText ? btnText : "등록"}
        </Button> 
    </>
  );
}

/* 보기 버튼 */
export function ViewButton(props) {

    //@ 버튼에 바인딩 될 클릭 이벤트 함수 : function
    const onClick = props.onClick;

    return (
    <>
       <Button
            variant="contained"
            onClick={onClick}
            className={"btn crud-btn view-btn"} 
            size="small"
            disableElevation
        >
            보기
        </Button> 
    </>
  );
}

/* 수정 버튼 */
export function ModButton(props) {

    //@ 버튼에 바인딩 될 클릭 이벤트 함수 : function
    const onClick = props.onClick;

    return (
    <>
       <Button
            variant="contained"
            onClick={onClick}
            className="btn crud-btn mod-btn"
            size="small"
            disableElevation
        >
            수정
        </Button>
    </>
  );
}

/* 삭제 버튼 */
export function DelButton(props) {

    //@ 버튼에 바인딩 될 클릭 이벤트 함수 : function
    const onClick = props.onClick;

    return (
    <>
       <Button
            variant="contained"
            onClick={onClick}
            className={"btn del-btn"} 
            size="small"
            disableElevation
        >
            삭제
        </Button>
    </>
  );
}

/* 닫기 버튼 */
export function CloseButton(props) {

    //@ 버튼에 바인딩 될 클릭 이벤트 함수 : function
    const onClick = props.onClick;

    return (
    <>
       <Button
            variant="contained"
            onClick={onClick}
            className={"btn close-btn"} 
            size="small"
            disableElevation
        >
          닫기
        </Button>
    </>
  );
}


/** LOGIN 버튼 그룹 **/

/* 로그인 버튼 */
export function LoginButton(props) {

    //@ 관리자 로그인인지 여부 : boolean
    const isAdminLogin = props.isAdminLogin;

    //@ 이벤트에서 사용되는 id 값 : string
    const id = props.id;

    //@ 버튼에 바인딩 될 클릭 이벤트 함수 : function
    const onClick = props.onClick;


    return (
    <>
       <Button
            onClick={onClick}
            variant="contained"
            color="secondary"
            className={`btn ${isAdminLogin ? "admin-login-btn":"login-btn"}`}
            disableElevation
            id={id}
        >
            {isAdminLogin && "관리자 "} 로그인
        </Button>
    </>
  );
}

/*  로그아웃 & 닫기 버튼 */
export function LogoutButton(props) {

    //@ 버튼에 들어갈 텍스트 : string
    const btnText = props.btnText;
    
    //@ 버튼에 바인딩 될 클릭 이벤트 함수 : function
    const onClick = props.onClick;

    return (
    <>
       <Button
            variant="contained"
            color="secondary"
            onClick={onClick} 
            className="btn logout-btn"
            size="small"
            disableElevation
        >
            {btnText ? btnText : "로그아웃"}
        </Button>
    </>
  );
}

/* 인포 아이콘 버튼 */
export function InfoIconButton(props) {

    //@ 버튼에 추가로 부여할 ClassName : string
    const ClassName = props.ClassName;
    
    //@ 버튼에 바인딩 될 클릭 이벤트 함수 : function
    const onClick = props.onClick;

    return (
    <>
        <button
            ClassName = {`btn info-icon ${ClassName ?? ""}`}
            onClick = {onClick}
        >
            <img src="/img/icon/profit-info.svg" class="info-icon" alt="정보 더보기" />
        </button>
    </>
  );
}

