/* React */
import React, { useState } from 'react';

/* Next JS */
import Link from "next/link";


//@ 대쉬보드 패널
//  - 메인 대쉬보드에서 사용되는 유형의 패널 컴포넌트
export function DashBoardPannel(props) {

    //@ 패널 ID : string
    const id = props.id;

    //@ 패널 클래스 : string
    const className = props.className;

    //@ 패널 타이틀 : string
    const pannelTitle = props.pannelTitle;

    //@ 패널 타이틀 우측 내용 : string, object
    const pannelTitleRightCont = props.pannelTitleRightCont;
    
    //@ 패널 링크 : string
    const pannelLink = props.pannelLink;
    
    //@ 패널 컨텐츠 내용 : string, object
    const pannelCont = props.pannelCont


    return (
        <>
        <div 
            id={id && id}
            className={`dashboard pannel ${className?className : ""}`}
        >
            <PannelHeader
                pannelTitle={pannelTitle}
                pannelTitleRightCont={pannelTitleRightCont} 
                pannelLink={pannelLink}
            />

            <div className="pannel-container">
                {pannelCont && pannelCont}
            </div>
        </div>
        </>
    );
}


export function PannelHeader(props) {

    //@ 패널 타이틀 : string
    const pannelTitle = props.pannelTitle;
   
    //@ 패널 타이틀 우측 내용 : string, object
    const pannelTitleRightCont = props.pannelTitleRightCont;
    
    //@ 패널 링크 : string
    const pannelLink = props.pannelLink;

    return (
        <>
            <h3 className="pannel-title">
                <span>{pannelTitle ? pannelTitle : "타이틀"}</span>
                
                {pannelTitleRightCont &&
                    <span>{pannelTitleRightCont}</span>
                }
                
                {pannelLink &&
                    <Link href={pannelLink}><a>더보기</a></Link>
                } 
            </h3>
        </>
    );
}