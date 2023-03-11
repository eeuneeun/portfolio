import React ,{useState, useEffect} from 'react';
import {useRouter} from 'next/router'
import BreadScrumb from '../molecules/BreadScrumb';

// * 상수 선언부 *
//const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function PageHeader(props) {

    //@ 페이지 경로 : []
    //  - 현재위치를 string 배열로 받음
    const pageRouteInfo = props.pageRouteInfo

    //@ 아이콘 이름 : string
    const iconName = props.iconName

    return (
        <>
        <section className="section-wrap page-header">
            <BreadScrumb 
                iconName = {iconName}
                pageRouteInfo = {pageRouteInfo}
            />
            <h3>{pageRouteInfo ? pageRouteInfo[pageRouteInfo.length-1] : "현재 페이지 타이틀"}</h3>
        </section>
        </>    
    );
}
