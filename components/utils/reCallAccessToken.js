/* React */
import React, { Component, useRef, useEffect, useState } from "react";

/* Library */
import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";
import axios from "axios";
import qs from 'qs';


/* .Env Var 선언부 */
const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;

// Login API Params
let loginApiParams = {
    url : AUTH_URL+"token",
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    method : "post",
    withCredentials : true,
};


/* AccessToken 갱신  */
export default async function reCallAccessToken(){


    //쿠키 객체 생성
    const cookies = new Cookies();
    const userInfo = cookies.get('userInfo');
    
    const refToken = userInfo ? userInfo.refToken : ""
        
    // REST API 호출 Params
    loginApiParams = {
        ...loginApiParams,
        data: qs.stringify({
            client_id : "web",
            grant_type : "refresh_token",
            refresh_token : refToken,
        })
    };



    /* Redux Dispatch 를 Pages Context 범위 내에서 사용하기 위한 임시 변수 */
    let isLogin = false;
    let isAdmin = false;
    
    // REST API 호출로 Access Token 재발급
    const result = await axios(loginApiParams).then((res)=>{
        
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

        
            isLogin = true;
             
            // 관리자 권한 부여
            if(cookieData.roles.includes("PROVIDER_ADMIN")){
                isAdmin = true;
            }

            return {
                isLogin : isLogin,
                isAdmin : isAdmin,
                accToken : res.data.access_token
            };
        }
        
    }).catch((err)=>{

        if (err.response) {
            // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
            // console.log(err.response.data);
            // console.log(err.response.status);
            // console.log(err.response.headers);
          }
          else if (err.request) {
            // 요청이 이루어 졌으나 응답을 받지 못했습니다.
            // `err.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
            // Node.js의 http.ClientRequest 인스턴스입니다.
            // console.log(err.request);
          }
          else {
            // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
            // console.log('Error', err.message);
          }
          
        console.log(err.config);
    });
    
    return result;
}
