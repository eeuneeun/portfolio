import React, { useState } from 'react';
import {SearchButton} from '../atoms/Button';
import { BasicTextInput, Chkbox } from '../atoms/Input'; 

/* 분자 단위의 Input Group 을 감싸는 Input Wrap 정의 */

/* 기본 Wrap Box */
export default function DefaultInputWrap(props) {
    
    //@ className : string
    //  - wrapper 가 어떤 스타일이 될 것인지 class 로 정의하여 주입
    const className = props.className;
    
    //@ wrapTitle : string
    //  - dt 자리에 들어갈 타이틀
    //  - 해당 input 그룹의 이름     
    const wrapTitle = props.wrapTitle;

    //@ wrapCont : string
    //  - dd 자리에 들어갈 컨텐츠
    //  - 특정 Input 컴포넌트, 혹은 Input 컴포넌트의 그룹
    const wrapCont = props.wrapCont;

    //@ onChange : function 
    const onChange= props.onChange

    return (
    <>  
        <dl className={`input-wrap text ${className ? className : ""}`}>
            <dt className={`input-wrap-title`}>
                {wrapTitle ? wrapTitle : "검색"}
            </dt>   
            <dd className={`input-wrap-cont`}>
                { wrapCont ?
                    wrapCont
                    :(
                    <BasicTextInput 
                        className="width-40"
                        label={wrapTitle ? wrapTitle : "검색"}
                        onChange={onChange ? onChange : ""}
                    />
                )}
                <SearchButton 
                    btnText="검색"
                />
            </dd>    
        </dl>
    </>
  );
}


/* BasicTextInput Wrap Box */
export function TextInputWrap(props) {
    
    //@ className : string
    //  - wrapper 가 어떤 스타일이 될 것인지 class 로 정의하여 주입
    const className = props.className;
    
    //@ wrapTitle : string
    //  - dt 자리에 들어갈 타이틀
    //  - 해당 input 그룹의 이름     
    const wrapTitle = props.wrapTitle;

    //@ wrapCont : string
    //  - dd 자리에 들어갈 컨텐츠
    //  - 특정 Input 컴포넌트, 혹은 Input 컴포넌트의 그룹
    const wrapCont = props.wrapCont;

    //@ onChange : function 
    const onChange= props.onChange

    return (
    <>  
        <dl className={`input-wrap text ${className ? className : ""}`}>
            <dt className={`input-wrap-title`}>
                {wrapTitle ? wrapTitle : "검색"}
            </dt>   
            <dd className={`input-wrap-cont`}>
                { wrapCont ?
                    wrapCont
                    :(
                    <BasicTextInput 
                        className="width-80"
                        label={wrapTitle ? wrapTitle : "검색"}
                        onChange={onChange ? onChange : ""}
                    />
                )}
            </dd>    
        </dl>
    </>
  );
}





/* Checkbox Wrap Box */
export function ChkBoxInputWrap(props) {
    
    //@ className : string
    //  - wrapper 가 어떤 스타일이 될 것인지 class 로 정의하여 주입
    const className = props.className;
    
    //@ wrapTitle : string
    //  - dt 자리에 들어갈 타이틀
    //  - 해당 input 그룹의 이름     
    const wrapTitle = props.wrapTitle;

    //@ wrapCont : []
    //  - 배열안 각각의 아이템들은 json 객체 : {}
    //  - dd 자리에 들어갈 체크박스 리스트
    const wrapCont = props.wrapCont;

    return (
        <>  
        <dl className={`input-wrap chkbox ${className ? className : ""}`}>
            <dt className={`input-wrap-title`}>
                {wrapTitle ? wrapTitle : "검색"}
            </dt>   
            <dd className={`input-wrap-cont`}>
                { wrapCont ?
                    wrapCont.map((item)=>(
                        <Chkbox
                            key={item.id}     
                            label={item.label ? item.label : ""}
                            icon={item.icon ? item.icon : ""}
                            checkedIcon={item.checkedIcon ? item.checkedIcon : ""}
                        />
                    ))
                    :(
                    <Chkbox 
                        label={"전체"}
                        checked={true}
                        onChange={()=>console.log("ok! 체크박스 인풋입니다!")}
                    />
                )}
            </dd>    
        </dl>
    </>
  );
}



/* Customer Info Register Setup Input Wrap Box*/
export function SetupInputWrap(props){
    
    const onChange = props.onChange

    return(
        <>
            <TextInputWrap
                wrapTitle="용량(kW)"
                wrapCont={
                <BasicTextInput 
                    name="kW"
                    className="width-100"
                    label="용량(kW)"
                    onChange = {onChange}
                />    
                }
            /> 
            <TextInputWrap
                wrapTitle="가동여부"
                wrapCont={
                <BasicTextInput 
                    name="useAble"
                    className="width-100"
                    label="가동여부"
                    onChange = {onChange}
                />    
                }
            /> 
            <TextInputWrap
                wrapTitle="설치형태"
                wrapCont={
                <BasicTextInput 
                    name="contractTerm"
                    className="width-100"
                    label="설치형태"
                    onChange = {onChange}
                />    
                }
            />
        </>
    )
}