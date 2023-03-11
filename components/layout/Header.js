/* React */
import React ,{useState, useEffect} from 'react';

/* Next Js */
import {useRouter} from 'next/router';
import Link from 'next/link';

/* Redux */
import { useSelector, useDispatch } from 'react-redux'
import { setIsLogin, setIsAdmin } from '../../store/reducers/authSlice';
import { setIsWhiteMode, setIsGnbOpen } from '../../store/reducers/themeSlice';

/* Library */
import moment from 'moment';
import 'moment/locale/ko';
import { useInterval } from 'react-use';
import Cookies from 'universal-cookie';
import axios from "axios";
import qs from 'qs';

/* UI COMPONENTS */
import Gnb from './Gnb';

import DehazeRoundedIcon from '@material-ui/icons/DehazeRounded';

import { SearchInput } from '../UI/atoms/Input'; 
import { LogoutButton } from '../UI/atoms/Button'
import BasicChip from '../UI/atoms/Chip';
import { MuiModal } from '../UI/organisms/Modal';
import { BasicSwitch } from '../UI/atoms/Switch';
import { PlantSearch } from '../UI/organisms/SearchSelect';



/*  선언부 */
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;

// Logout API Params
let logoutApiParams = {
    url : AUTH_URL+"auth/realms/kpp/protocol/openid-connect/logout",
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    method : "post",
    withCredentials : true,
};

export default function Header(props) {

    // * Util Objects 선언부 *
    // 1. 라우팅용 라우터
    const router = useRouter();

    // 2. 리덕스 컨트롤용 디스패치
    const dispatch = useDispatch()

    // 3. 쿠키 객체 생성
    const cookies = new Cookies();


    // * props 선언부 *
    // 0. Access Token
    const accToken = props.accToken;
    const setAccToken = props.setAccToken;

    

    /* state */
    const [isOpen, setIsOpen] = useState(false);
    
    /* Redux : authSlice 관련 선언부 */
    const { isLogin, isAdmin, isWhiteMode, isGnbOpen } = useSelector(state => ({
        // 로그인이 되었는지
        isLogin: state.authSlice.isLogin,
        // 관리자인지 여부
        isAdmin: state.authSlice.isAdmin,
        // 테마 색상
        isWhiteMode: state.themeSlice.isWhiteMode,
        // GNB 열렸는지
        isGnbOpen: state.themeSlice.isGnbOpen
    }));


    /* Function */
    // Gnb 열고 닫기
    function toggleGnb(){
        isGnbOpen ? 
            dispatch(setIsGnbOpen(false))
            : 
            dispatch(setIsGnbOpen(true))
    }

    // 테마 선택
    function toggleTheme(){
        isWhiteMode ? 
            dispatch(setIsWhiteMode(false))
            :
            dispatch(setIsWhiteMode(true))
    }

    
    // ★ 로그아웃 
    function logout(){

        const userInfo = cookies.get('userInfo');
        const refToken = userInfo ? userInfo.refToken : ""
    

        // API 호출하여 Access Token 파괴
        logoutApiParams = {
            ...logoutApiParams,
            data : qs.stringify({
                client_id : "web",
                refresh_token : refToken,
            })
        } 

        axios(logoutApiParams).then((res)=>{

            if(res.status == 204){
                // 로그인 정보가 담겨있는 쿠키 삭제
                cookies.remove(
                    "userInfo",
                    {
                        path: "/", 
                        //domain: ".example.com"
                    }
                );
            
                // 로그인 && 관리자 권한 State 제거
                dispatch(setIsLogin(false))
                dispatch(setIsAdmin(false))
            }

        }).catch((err)=>{
              console.log(err);
        });

    }

    useEffect(()=>{
        console.log(isWhiteMode)
    },[])

    return (
        <>
        <div className={`header flex-center ${isWhiteMode ? "white" : ""}`}> 
            <div className="left flex-center">
                <span id="gnbBtn" onClick={toggleGnb} className="gnb-btn">
                    <DehazeRoundedIcon />
                    {/* <img src="/img/menu-icon.svg" alt="메뉴 버튼" /> */}
                </span>
                <h1 className="flex-center">
                    <Link href="/">
                        <a><img src="/img/logo-type.svg" alt="KPP" /></a>
                    </Link>
                </h1>
                <div className="select-ui flex-center">
                    { isWhiteMode ? 
                        <img src="/img/icon/sun-icon.png" alt="화이트 모드" />
                        :
                        <img src="/img/icon/moon-icon.svg" alt="다크 모드" />
                    }
                    <BasicSwitch 
                        onChange={()=>toggleTheme()}
                    />
                </div>
            </div>


            <div className="right flex-center">
                <button className="realtime-info" onClick={()=>setIsOpen(true)}>
                    <img src="/img/icon/gen-icon.svg" alt="실시간 발전 정보 보기" />
                </button>
                <div className={`dimmer ${isOpen && "display-on"}`}  onClick={()=>setIsOpen(false)}></div>
                <div id="realtimeInfoWrap" className={isOpen && "display-on"}>
                    <dl>
                        <dt>실시간 발전량</dt>
                        <dd>
                            <ul>
                                <li>8.14 kWh </li>
                                <li className="increase">▲ 0.1 kWh</li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>금일 누적 발전량</dt>
                        <dd>
                            <ul>
                                <li>60.14 kWh </li>
                                <li className="decrease">▼ 3.0 kWh</li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>전일 최종 발전량/전일 예측 발전량</dt>
                        <dd>
                            <ul>
                                <li>290 kWh/300 kWh </li>
                                <li className="increase">▲ 0.1 kWh</li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                
                <div className="search-input-wrap">
                    <PlantSearch />
                </div>

                <LogoutButton 
                    btnText="LOGOUT"
                    onClick={logout}
                />
            </div>
        </div>
        <Gnb
            isGnbOpen={isGnbOpen}
        />
        </>    
    );
}
