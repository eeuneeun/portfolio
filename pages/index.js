/* React */
import React, { Component, useRef, useEffect, useState } from "react";


/* Redux */
import { useSelector, useDispatch } from 'react-redux';

/* UI Components */
import { DashBoardPannel } from "../components/UI/organisms/Pannel";
import { DounutChart, CustomLineChart } from "../components/UI/organisms/Chart"; 
import { PlantSearch } from "../components/UI/organisms/SearchSelect";
import NowTime from "../components/UI/organisms/NowTime";
import GridWrap from "../components/UI/organisms/GridWrap";

import CandleGauge from "../components/UI/templates/CandleGauge";




export default function Index(props) {
  // * props 선언부 *
  const isLogin = props.isLogin;
  const setIsLogin = props.setIsLogin;



  // * 아이콘 클릭 이벤트 핸들러 *
  function euipFlowIconClickHandler(e){ 
      const nowClickedEl = e.target; 
      const sblingEl = Object.entries(nowClickedEl.parentElement.children).map((el)=>{return el[1]});
      const childrenEl = Object.entries(nowClickedEl.children).map((el)=>{return el[1]})

      sblingEl.map((el, idx)=>{
        el.classList.remove("active");
      });
      
      childrenEl.map((el, idx)=>{
        if(el.classList.contains('badge')){
          el.remove();
        } 
      });

      nowClickedEl.classList.add("active");

  }


  // * useEffect 선언부 *
  useEffect(()=>{
  
  },[]);

  return (
    <>
      <GridWrap
        className="main"
        isDraggable={true}
        isResizable={true}
        items={5}
        cols={10}
        rowHeight={155}
        layout={[
          {i: 'profit-info', x: 0, y: 0, w: 4, h: 2, minW: 4, maxW: 6, minH: 2},
          {i: 'today-pannel', x: 0, y: 4, w: 4, h:3, minW: 4, maxW: 6},
          {i: 'myplant-status', x: 4, y: 0, w: 4, h: 5, minW: 4, maxW: 4, minH: 2},
          {i: 'now-weather', x: 8, y: 0, w: 2, h: 5, minH: 2}
        ]}
        contents={[
          <div key="profit-info">
            <DashBoardPannel
              className="profit-info"
              pannelTitle="금일발전량"
              pannelLink=""
              pannelCont={(<>
                <div className="dounut-wrap flex-center">
                  <DounutChart />
                </div>
              </>)}
            />
          </div>
          
          ,
          
          <div key="today-pannel">
            <DashBoardPannel
              className="today-pannel"
              pannelTitle="마지막 업데이트 08년 09일 목요일 오후 12:34"
              pannelLink=""
              pannelCont={
                <>
                <div className="flex-center">
                  <dl>
                    <dt>금일 예측 발전량</dt>
                    <dd>300.14kWh</dd>
                  </dl>

                  <dl>
                    <dt>금일 예상수익</dt>
                    <dd>58,135원</dd>
                  </dl>           
                </div>

                <div className="line-chart">
                  <CustomLineChart />
                </div>
                </>
              }
            />
          </div>
          
          ,
          
          <div key="myplant-status">
            <DashBoardPannel
              className="myplant-status"
              pannelTitle="내 발전소 상태"
              pannelLink=""
              pannelCont={
                <> 
                  <div className="counting flex-center">
                    <dl>
                      <dt>상태이상</dt>
                      <dd className="bad-bg">3</dd>
                    </dl>
                    <dl>
                      <dt>확인필요</dt>
                      <dd className="soso-bg">1</dd>
                    </dl>
                    <dl>
                      <dt>정상작동</dt>
                      <dd className="good-bg">10</dd>
                    </dl>
                  </div>

                  <div className="equip-flow-wrap">
                    <ul className="bg-area">
                      <li onClick={euipFlowIconClickHandler}>
                        <img src="/img/equip-flow/solar-panels.svg" alt="태양광 패널 아이콘" />
                        <span className="badge">1</span>
                      </li>
                      <li onClick={euipFlowIconClickHandler}>
                        <img src="/img/equip-flow/charge-controller.svg" alt="계전기 아이콘" />
                        <span className="badge">1</span>
                      </li>
                      <li onClick={euipFlowIconClickHandler}>
                        <img src="/img/equip-flow/battery.svg" alt="배터리 아이콘" />
                        <span className="badge">1</span>
                      </li>
                      <li onClick={euipFlowIconClickHandler}>
                        <img src="/img/equip-flow/inverter.svg" alt="인버터 아이콘" />
                        <span className="badge soso-bg">1</span>
                      </li>
                      <li onClick={euipFlowIconClickHandler}>
                        <img src="/img/equip-flow/consumer.svg" alt="소비자 아이콘" />
                        <span className="badge good-bg">10</span>
                      </li>
                    </ul>
                  </div>
                  
                  <CandleGauge />
                  
                  <h5>홍길동님의 발전소 상태는 <em className="good-color">정상</em> 입니다.</h5>
                </>
              }
            />
          </div>
          
          ,
          
          <div key="now-weather">
            <DashBoardPannel
              className="now-weather"
              pannelTitle="현재 날씨"
              pannelLink=""
              pannelCont={
                <>  
                  
                  {/* 발전소 검색창 */}
                  <PlantSearch />
                  
                  <ul>
                    {/* 상단 날씨 */}
                    <li className="weather-info">
                
                      <dl>
                        <dt>서울 특별시 금천구</dt>
                        <dd className="flex-center">
                          
                          <ul className="flex-center celsius">
                            <li>
                              <img src="/img/icon/sunny-rain.svg" alt="맑음" />
                            </li>
                            <li>
                              32
                              <em className="num-font">&deg;C</em>
                            </li>
                          </ul>
                          
                          <ul className="weather-desc">
                            <li>한때 소나기</li>
                            <li>
                              <span>최고 <em className="num-font">35&deg;C</em></span>
                              <span>최저 <em className="num-font">28&deg;C</em></span>
                            </li>
                          </ul>

                        </dd>
                      </dl>          
                    
                      <ol className="flex-center time-line">
                        <li>
                          <dl>
                            <dt>지금</dt>
                            <dd>
                              <ul>
                                <li>
                                  <img src="/img/icon/rainny.svg" alt="비" />
                                </li>
                                <li>30</li>
                              </ul>
                            </dd>
                          </dl>
                        </li>
                        <li>
                          <dl>
                            <dt>오후3시</dt>
                            <dd>
                              <ul>
                                <li>
                                  <img src="/img/icon/rainny.svg" alt="비" />
                                </li>
                                <li>30</li>
                              </ul>
                            </dd>
                          </dl>
                        </li>
                        <li>
                          <dl>
                            <dt>오후4시</dt>
                            <dd>
                              <ul>
                                <li>
                                  <img src="/img/icon/rainny.svg" alt="비" />
                                </li>
                                <li>30</li>
                              </ul>
                            </dd>
                          </dl>
                        </li>
                        <li>
                          <dl>
                            <dt>오후5시</dt>
                            <dd>
                              <ul>
                                <li>
                                  <img src="/img/icon/rainny.svg" alt="비" />
                                </li>
                                <li>30</li>
                              </ul>
                            </dd>
                          </dl>
                        </li>
                        <li>
                          <dl>
                            <dt>오후6시</dt>
                            <dd>
                              <ul>
                                <li>
                                  <img src="/img/icon/rainny.svg" alt="비" />
                                </li>
                                <li>30</li>
                              </ul>
                            </dd>
                          </dl>
                        </li>
                        <li>
                          <dl>
                            <dt>오후7시</dt>
                            <dd>
                              <ul>
                                <li>
                                  <img src="/img/icon/rainny.svg" alt="비" />
                                </li>
                                <li>30</li>
                              </ul>
                            </dd>
                          </dl>
                        </li>
                      </ol>
                    </li>
                    
                    {/* 미세 먼지 */}
                    <li className="dust-info flex-center">
                      <dl className="flex-center">
                        <dt>
                          <img src="/img/icon/smile-icon.png" alt="스마일 아이콘" />
                        </dt>
                        <dd>
                          <ul>
                            <li>미세먼지</li>
                            <li className="num-font">6Mg/m2</li>
                          </ul>
                        </dd>
                      </dl>
                      <dl className="flex-center">
                        <dt>
                          <img src="/img/icon/smile-icon.png" alt="스마일 아이콘" />
                        </dt>
                        <dd>
                          <ul>
                            <li>초 미세먼지</li>
                            <li className="num-font">6Mg/m2</li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                  </ul>

                  {/* 현재시간 */}
                  <NowTime />

                </>
              }
            /> 
          </div>
        ]}
      />
  </>)
}
