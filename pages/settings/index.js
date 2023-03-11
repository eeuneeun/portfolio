

import React, { Component, useRef, useEffect, useState } from "react";



export default function index(props) {
    // * props 선언부 *
    const isLogin = props.isLogin;
    const setIsLogin = props.setIsLogin;

    function login(){
        setIsLogin(true);
    };

    useEffect(()=>{
        
    },[]);

    return (
        <>
        <div className="signin flex-center">
            <div className="pannel flex-col-center">
                    <h2>H-PHM</h2>
                    <div className="input-wrap flex-col-center">
                        <input type="text" name="id" placeholder="id" />
                        <input type="password" name="password" placeholder="password"/>
                        <button className="btn login theme-color-bg">그룹웨어 로그인</button>
                        <button className="btn login theme-color-bg" onClick={login}>로그인</button>
                    </div>
                </div>
        </div>
        </>
    )
}
