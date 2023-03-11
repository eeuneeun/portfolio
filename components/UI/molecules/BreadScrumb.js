import React ,{useState, useEffect} from 'react';
import {useRouter} from 'next/router'
import NavigateNext from '@material-ui/icons/NavigateNext';
// * 상수 선언부 *
//const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function BreadScrumb(props) {

    //@ 페이지 경로 : []
    //  - 현재위치를 string 배열로 받음
    const pageRouteInfo = props.pageRouteInfo

    //@ 아이콘 이름 : string
    const iconName = props.iconName
   
    return (
        <>
            <h2 className="bread-scrumb">
                { iconName ? 
                    <Icon name={iconName ? iconName : "bell"} inverted color="green" />
                    : 
                    ""
                }
                {pageRouteInfo ?
                    pageRouteInfo.map((item, index)=>{
                        if(index !== pageRouteInfo.length-1){
                            return (
                                <div key={item}>
                                    <span>{item}</span>
                                    <NavigateNext fontSize="small" />
                                </div>
                            )
                        }else{
                            return (<span key={item}>{item}</span>)
                        }
                    })
                    :   
                    (<span>현재위치 경로 표기</span>)
                }
            </h2>
        </>    
    );
}
