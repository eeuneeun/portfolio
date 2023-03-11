/* React */
import React, { useRef, useState } from "react";

/* Next Js */
import { useRouter } from 'next/router'

/* Redux */
import { useSelector, useDispatch } from 'react-redux';
import { setIsLogin, setIsAdmin } from '../../store/reducers/authSlice'; 
import { setAccToken, setRefToken } from '../../store/reducers/tokenSlice'; 

/* Library */
import axios from "axios";
import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";
import qs from 'qs';

/* Component */
import { LoginButton } from "../../components/UI/atoms/Button";



/* .Env Var 선언부 */
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;

// Login API Params
let loginApiParams = {
    url : AUTH_URL+"token",
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    method : "post",
    withCredentials : true,
};



export default function SignIn(props) {
  
    /* Util Objects 선언부 */
    // 1. 라우팅용 라우터
    const router = useRouter();

    // 2. 리덕스 컨트롤용 디스패치
    const dispatch = useDispatch()



    /* Redux : authSlice 관련 선언부 */
    // 1. 로그인이 되었는지 & 관리자인지 여부
    const { isLogin, isAdmin } = useSelector(state => ({
        isLogin: state.authSlice.isLogin,
        isAdmin: state.authSlice.isAdmin
    }));

    
    /* usestate 선언부 */
    // 1. 팝업창 오픈 여부
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // 3. 로그인 폼 세트
    const [loginIputs, setInputs] = useState({
        email: '',
        password: ''
    });   
    
    // 4. 각각의 폼
    const emailInput = useRef();
    const passwordInput = useRef();


    // 6. 아이디 기억 여부
    const [isRemember, setIsRemember] = useState(false);

   
    /* function 선언부 */
    // 1. 로그인
    function login(e){

        const email = loginIputs.email;
        const password = loginIputs.password;
        
        // 입력 값에 대한 유효성 검사
        if(email == null || email == ""){
            alert("이메일 주소를 입력해주세요!")
            emailInput.current.focus();
            return false;

        }else if(password == null || password == ""){
            alert("비밀번호를 입력해주세요!")
            passwordInput.current.focus();
            return false;
        }
                            
        auth(email, password);
        
        //관리자
        if(e.target.parentElement.id == "admin"){
            dispatch(setIsAdmin(true))
            // dispatch(login())
        }
        
    };


    // 2. 로그인 폼 핸들러
    function loginIputOnChangeHandler(e){
        const {value, name } = e.target;
        setInputs({
            ...loginIputs,
            [name]: value
        });
    }

    // 3. 서버로 로그인 시도
    function auth(email, password){
        loginApiParams = {
            ...loginApiParams,
            data: qs.stringify({
                client_id : "web",
                grant_type : "password",
                username : email,
                password : password
            })
        };

        axios(loginApiParams).then((res)=>{

            if(res.status == 200){

                //토큰 내용 Decoding
                const accToken = jwt_decode(res.data.access_token);
                const refToken = jwt_decode(res.data.refresh_token);

                const cookieData = {
                    refToken : res.data.refresh_token,
                    name : accToken.name,
                    provider : accToken.provider,
                    roles : accToken.realm_access.roles
                }


                const expires = new Date();
                expires.setDate(Date.now() + refToken.exp)


                //쿠키 객체 생성
                const cookies = new Cookies();

                cookies.set(
                    'userInfo',
                    cookieData,
                    {   
                        path: '/',
                        expires,
                        maxAge: 1000,
                        // httpOnly: true
                        // secure: true,
                    }
                );
                
                // AccToken 저장
                dispatch(setAccToken(res.data.access_token));

                // 로그인 상태 변경
                dispatch(setIsLogin(true));
                
                // 관리자 권한 부여
                if(cookieData.roles.includes("PROVIDER_ADMIN")){
                    dispatch(setIsAdmin(true));
                }
            }

        }).catch((err)=> {

            if(err.response.status == 401 || err.response.status == 400){
                alert("로그인 정보를 확인해주세요!")
            }else{
                alert("로그인 하는데에 문제가 발생했습니다. 관리자에게 문의해주세요!")
            }
        
        });

    }

    return (
        <>
        <div className="signin flex-center">
            <div className="pannel flex-col-center">
                <h2>KPP</h2>

                <div className="input-wrap flex-col-center">
                    <input type="email" name="email" id="email" placeholder="e-mail" onChange={loginIputOnChangeHandler} ref={emailInput} />
                    <input type="password" id="password" name="password" placeholder="password" onChange={loginIputOnChangeHandler} ref={passwordInput}/>

                    <LoginButton
                        onClick={login}
                        isAdminLogin={false}
                    />
                
                    <button className="btn login theme-color-bg">회원가입</button>
                </div>
            </div>
        </div>
        </>
    )
}
