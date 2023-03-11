/* React */
import React ,{useState, useEffect} from 'react';

/* Next Js */
import {useRouter} from 'next/router';
import Link from 'next/link';

import { Icon } from 'semantic-ui-react';

/* Redux */
import { useSelector, useDispatch } from 'react-redux'

// * 상수 선언부 *
//const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Gnb(props) {

    // * state 선언부 *
    const [nowPage, setNowPage] = useState("Main"); 


    // * Object *
    // 로그인 여부에 따른 강제 페이지 이동을 위한 객체
    const router = useRouter();

    // * Function *
    // GNB UI : 초록색 Active 라인 적용 이벤트
    function gnbUIHandler(e, type){
        e.stopPropagation()
        let nowClickedEl = null; 
        const sblingEls = Object.entries(document.getElementsByClassName("parents")[0].children).map((el)=>{return el[1]});

        if(type === "parents"){
            nowClickedEl = e.currentTarget; 
        }
        else if(type == "children"){
            const selectedMenuName = (e.currentTarget.children[0].getAttribute("href")).split('/');

            sblingEls.map((el, idx)=>{
                if(el.classList.contains(selectedMenuName[1])){
                    nowClickedEl = el;
                }
            });
                
            // console.log(nowClickedEl); 
        }

        sblingEls.map((el, idx)=>{
            el.classList.remove("active");
        });
            
        nowClickedEl.classList.add("active");
    }

    /* Redux */
    const { isWhiteMode, isGnbOpen } = useSelector(state => ({
        // 테마 색상
        isWhiteMode: state.themeSlice.isWhiteMode,
        // GNB 열렸는지
        isGnbOpen: state.themeSlice.isGnbOpen
    }));


    useEffect(() =>{
       
    },[]);
    
    return (
        <> 
        <div className={`gnb ${isGnbOpen ? "active" : ""} ${isWhiteMode ? "white" : ""}`} >
            <ul className="parents flex-center">
                <li className="home active" onClick={(e)=>gnbUIHandler(e, "parents")}>
                    <Link href="/">
                    <a>
                        <Icon name='home' inverted color='grey' />
                        홈

                    </a> 
                    </Link>
                </li>
                <li className="info" onClick={(e)=>gnbUIHandler(e, "parents")}>
                    <Link href="/info/power">
                    <a>
                        <Icon name='bell' inverted color='grey' />
                        정보
                    </a>
                    </Link>
                </li>
                <li className="manage" onClick={(e)=>gnbUIHandler(e, "parents")}>
                    <Link href="/manage">
                    <a>
                        <Icon name='chart pie' inverted color='grey' />
                        관리
                    </a>
                    </Link>
                </li>
                <li className="settings" onClick={(e)=>gnbUIHandler(e, "parents")}>
                    <Link href="/settings">
                    <a>
                        <Icon name='setting' inverted color='grey' />
                        설정
                    </a>
                    </Link>
                </li>
            </ul>
            <div className="child flex-center">
                <ul></ul>
                <ul>
                    <li onClick={(e)=>gnbUIHandler(e, "children")}>
                        <Link href="/info/power">
                            <a>발전 정보</a>
                        </Link>
                    </li>
                    <li onClick={(e)=>gnbUIHandler(e, "children")}>
                        <Link href="/info/profit">
                            <a>수익 정보</a>
                        </Link>
                    </li>
                    <li onClick={(e)=>gnbUIHandler(e, "children")}>
                        <Link href="/info/profit">
                            <a>예측 정보</a>
                        </Link>
                    </li>
                    <li onClick={(e)=>gnbUIHandler(e, "children")}>
                        <Link href="/info/equipment">
                            <a>장비 정보</a>
                        </Link>
                    </li>
                    <li onClick={(e)=>gnbUIHandler(e, "children")}>
                        <Link href="/info/alert">
                            <a>알림 정보</a>
                        </Link>
                    </li>
                </ul>

                <ul>
                    <li onClick={(e)=>gnbUIHandler(e, "children")}>
                        <Link href="/manage">
                            <a>발전소 정보</a>
                        </Link>
                    </li>
                    <li onClick={(e)=>gnbUIHandler(e, "children")}>
                        <Link href="/manage">
                            <a>발전소 관리</a>
                        </Link>
                    </li>
                    <li onClick={(e)=>gnbUIHandler(e, "children")}>
                        <Link href="/manage/report">
                            <a>비교 분석</a>
                        </Link>
                    </li>
                    <li onClick={(e)=>gnbUIHandler(e, "children")}>
                        <Link href="/manage/report">
                            <a>발전량 보고서</a>
                        </Link>
                    </li>
                </ul>

                <ul>
                    <li onClick={(e)=>gnbUIHandler(e, "children")}>
                        <Link href="/settings">
                            <a>내 정보</a>
                        </Link>
                    </li>
                    <li onClick={(e)=>gnbUIHandler(e, "children")}>
                        <Link href="/settings">
                            <a>계정 관리</a>
                        </Link>
                    </li>
                    <li onClick={(e)=>gnbUIHandler(e, "children")}>
                        <Link href="/settings/cs">
                            <a>고객센터</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </>    
    );
}
