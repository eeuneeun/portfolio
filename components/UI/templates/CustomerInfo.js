/* REACT */
import React, { useState } from 'react'

/* NEXT JS */
import router from 'next/router'

/* COMPONENTS */
import { MiddleTitleH5} from "../molecules/MiddleTitle";
import { ChkBoxInputWrap } from "../molecules/InputWrap";

import BasicFilter from "../organisms/Filter";
import { ThumbNailSlider, PagerSlider } from "../organisms/Slider"
import { useEffect } from 'react';



export default function CustomerInfo(props){

    const isAdmin = props.isAdmin;


    /* useState */

    // 1. 슬라이더 영역
    const [mainSlider, SetMainSlider] = useState(null)
    const [pagerSlider, SetPagerSlider] = useState(null)

    
    
    /* function */
    function mainSliderClickHandler(e){
        console.log(e)
    }
    function pagerSliderClickHandler(e){
        console.log(e)
    }

    /* useEffect */
    useEffect(()=>{
        // console.log("mainSlider => ", mainSlider)
        // console.log("pagerSlider => ", pagerSlider)
    },[mainSlider, pagerSlider])





    return(<>
    <div className="customer-info">

        <MiddleTitleH5
            titleText="업체 기본 정보" 
            isAdmin={isAdmin}
        />
        <div className="defualt">
            <div className="flex-center">

                <div className="width-50">
                    <dl>
                        <dt>고객 관리 번호</dt>
                        <dd>S1</dd>
                    </dl>

                    <dl>
                        <dt>상호</dt>
                        <dd>홍길동 발전소</dd>
                    </dl>

                    <dl>
                        <dt>대표자</dt>
                        <dd>홍길동</dd>
                    </dl>
                
                    <dl>
                        <dt>사업자 등록번호</dt>
                        <dd>120-88-00767</dd>
                    </dl>

                    <dl>
                        <dt>발전소 소재지</dt>
                        <dd>강원도 춘천시 온의동 33-5</dd>
                    </dl>

                    <dl>
                        <dt>대표자 전화번호</dt>
                        <dd>010-3334-3333</dd>
                    </dl>

                    <dl>
                        <dt>업종구분</dt>
                        <dd>N/A</dd>
                    </dl>

                    <dl>
                        <dt>설비규모</dt>
                        <dd>총 3000kW</dd>
                    </dl>

                    <dl>
                        <dt>kW당 설치 단가</dt>
                        <dd>200만원</dd>
                    </dl>

                    <dl>
                        <dt>발전소 개시일</dt>
                        <dd>2020-01-01</dd>
                    </dl>
                </div>
                    
                <div className="img-area">
                    업체 대표 이미지 영역
                    <ThumbNailSlider
                        pagerSlider = {pagerSlider}
                        SetMainSlider = {SetMainSlider}
                        slideClickHandler={pagerSliderClickHandler}
                    />  
                </div>
            </div>

            <PagerSlider
                mainSlider = {mainSlider}
                SetPagerSlider = {SetPagerSlider}
                slideClickHandler={mainSliderClickHandler}
            />
        </div>

        <MiddleTitleH5
            titleText={"설치 정보"} 
            isAdmin={isAdmin}
        />
        <div className="put-in">
            <div className="flex-center">
            
                <dl>
                <dt>용량 (kW)</dt>
                <dd>5000 kW</dd>
                </dl>

                <dl>
                <dt>가동 여부</dt>
                <dd>가동중</dd>
                </dl>

                <dl>
                <dt>설치 형태</dt>
                <dd>일반 지상형</dd>
                </dl>

            </div>  
        </div>  

        <MiddleTitleH5
            titleText={"유지보수 이력 요약 정보"} 
            isAdmin={isAdmin}
        />
        <div className="equip-summary">
            <div className="flex-center">
            
                <dl>
                    <dt>유지보수 정기 점검 시행 횟수</dt>
                    <dd>3/10</dd>
                </dl>

                <dl>
                    <dt>유지보수 장애 수리 시행 횟수</dt>
                    <dd>가동중</dd>
                </dl>

                <dl>
                    <dt>다음 정기점검 날짜</dt>
                    <dd>2021.06.28</dd>
                </dl>

            </div>  
        </div>  

        <MiddleTitleH5
            titleText={"장비 요약 정보"} 
            isAdmin={isAdmin}
        />
        <div className="equip-summary">
            <div className="flex-center">
            
                <dl>
                <dt>모듈</dt>
                <dd>106개</dd>
                </dl>

                <dl>
                <dt>인버터</dt>
                <dd>가동중</dd>
                </dl>

                <dl>
                <dt>ESS</dt>
                <dd>일반 지상형</dd>
                </dl>

                <dl>
                <dt>접속함</dt>
                <dd>일반 지상형</dd>
                </dl>

                <dl>
                <dt>RTU</dt>
                <dd>일반 지상형</dd>
                </dl>

            </div>  
        </div>  


        {/*
        <MiddleTitleH5
            titleText={"장비 세부 정보"} 
            isAdmin={isAdmin}
        />
        <div className="equip-info">
            <BasicFilter 
                title = "장비 검색"
                cont = {[
                    <ChkBoxInputWrap
                        wrapTitle = "설치유형"
                        wrapCont={[
                            {
                            id : 1,
                            label : "전체",
                            checked : true,
                            },
                            {
                            id : 2,
                            label : "일반 지상형",
                            checked : true,
                            },
                            {
                            id : 3,
                            label : "산지형",
                            checked : true,
                            },
                            {
                            id : 4,
                            label : "농지형",
                            checked : true,
                            },
                        ]}
                    />,
                    <ChkBoxInputWrap
                        wrapTitle = " "
                        wrapCont = {[
                            {
                            id:1,
                            label : "건물 설치형",
                            checked : true,
                            },
                            {
                            id:2,
                            label : "건물 부착형",
                            checked : true,
                            },
                            {
                            id:3,
                            label : "건물 일체형",
                            checked : true,
                            },
                            {
                            id:4,
                            label : "수상형",
                            checked : true,
                            },
                        ]}
                    />
                ]}      
            />

        <ul className="equip-info-list">
            <li>
            <ul className="equip-info-list-col">
                <li>장비명</li>
                <li>총중량</li>
                <li>길이</li>
                <li>높이</li>
                <li>폭</li>
                <li>정격 출력</li>
                <li>효율</li>
                <li>최대 전압</li>
                <li>풍설 하중</li>
                <li>관리 대장</li>
            </ul>
            </li>
            <li>
            <ul className="equip-info-list-item">
                <li>모듈</li>
                <li>25.5kg</li>
                <li>2163mm</li>
                <li>1030mm</li>
                <li>35mm</li>
                <li>440 - 460Wp</li>
                <li>20.90%</li>
                <li>1500V</li>
                <li>2400/5400Pa</li>
                <li><button className="btn">보기</button></li>
            </ul>
            </li>
            <li>
            <ul className="equip-info-list-item">
                <li>모듈</li>
                <li>25.5kg</li>
                <li>2163mm</li>
                <li>1030mm</li>
                <li>35mm</li>
                <li>440 - 460Wp</li>
                <li>20.90%</li>
                <li>1500V</li>
                <li>2400/5400Pa</li>
                <li><button className="btn">보기</button></li>
            </ul>
            </li>
            <li>
            <ul className="equip-info-list-item">
                <li>모듈</li>
                <li>25.5kg</li>
                <li>2163mm</li>
                <li>1030mm</li>
                <li>35mm</li>
                <li>440 - 460Wp</li>
                <li>20.90%</li>
                <li>1500V</li>
                <li>2400/5400Pa</li>
                <li><button className="btn">보기</button></li>
            </ul>
            </li>
            <li>
            <ul className="equip-info-list-item">
                <li>모듈</li>
                <li>25.5kg</li>
                <li>2163mm</li>
                <li>1030mm</li>
                <li>35mm</li>
                <li>440 - 460Wp</li>
                <li>20.90%</li>
                <li>1500V</li>
                <li>2400/5400Pa</li>
                <li><button className="btn">보기</button></li>
            </ul>
            </li>
            <li>
            <ul className="equip-info-list-item">
                <li>모듈</li>
                <li>25.5kg</li>
                <li>2163mm</li>
                <li>1030mm</li>
                <li>35mm</li>
                <li>440 - 460Wp</li>
                <li>20.90%</li>
                <li>1500V</li>
                <li>2400/5400Pa</li>
                <li><button className="btn">보기</button></li>
            </ul>
            </li>
            <li>
            <ul className="equip-info-list-item">
                <li>모듈</li>
                <li>25.5kg</li>
                <li>2163mm</li>
                <li>1030mm</li>
                <li>35mm</li>
                <li>440 - 460Wp</li>
                <li>20.90%</li>
                <li>1500V</li>
                <li>2400/5400Pa</li>
                <li><button className="btn">보기</button></li>
            </ul>
            </li>
            <li>
            <ul className="equip-info-list-item">
                <li>모듈</li>
                <li>25.5kg</li>
                <li>2163mm</li>
                <li>1030mm</li>
                <li>35mm</li>
                <li>440 - 460Wp</li>
                <li>20.90%</li>
                <li>1500V</li>
                <li>2400/5400Pa</li>
                <li><button className="btn">보기</button></li>
            </ul>
            </li>
            <li>
            <ul className="equip-info-list-item">
                <li>모듈</li>
                <li>25.5kg</li>
                <li>2163mm</li>
                <li>1030mm</li>
                <li>35mm</li>
                <li>440 - 460Wp</li>
                <li>20.90%</li>
                <li>1500V</li>
                <li>2400/5400Pa</li>
                <li><button className="btn">보기</button></li>
            </ul>
            </li>
        </ul>

        </div>
        
        */}
        </div>

    </>);
}