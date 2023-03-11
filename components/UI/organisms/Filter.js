/* REACT */
import React, { useState } from 'react';

/* UI COMPONENTS */
import BasicButton from '../atoms/Button';
import { DateSelectInput } from "../atoms/Input";

import DefaultInputWrap from '../molecules/InputWrap';


//필터 박스의 모양을 다 갖춘 기본 컴포넌트
export default function BasicFilter(props) {

    //@ 필터 영역의 타이틀 : string
    const title = props.title;
    
    //@ 필터 조건의 각 Row 별 내용 : 배열 > 객체 
    const cont = props.cont;

    

    return (
    <>
        <div className="filter flex-col-center ">
            <h4 className="title">{title? title : "검색" }</h4>

            <DefaultInputWrap 
               
            />
            
            { cont && cont.map((item)=>(<>
               {item}
            </>))}
           
        </div>
    </>
  );
}




export function DateFilter(props){

    return(
        <div className="date-picker-wrap flex-center">

            <DateSelectInput />

            <ul className="btn-date-group flex-center">
                <li>
                    <BasicButton
                        btnText="실시간"
                        className="rectangle active"
                        onClick={()=>console.log('1')}
                    />
                </li>
                <li>
                    <BasicButton
                        btnText="일"
                        className="rectangle"
                        onClick={()=>console.log('1')}
                    />
                </li>
                <li>
                    <BasicButton
                        btnText="월"
                        className="rectangle"
                        onClick={()=>console.log('1')}
                    />
                </li>
                <li>
                    <BasicButton
                        btnText="년"
                        className="rectangle"
                        onClick={()=>console.log('1')}
                    />
                </li>
            </ul>

        </div>
    )
    
} 
