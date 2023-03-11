/* REACT */
import React, { Component, useEffect } from "react";

/* LIBRARY */
import AnimationCount from 'react-count-animation';

/* UI COMPONENTS */
import { DashBoardPannel } from "../../components/UI/organisms/Pannel";
import GridWrap from "../../components/UI/organisms/GridWrap";

import { makeDT } from "../../components/modules/makeDT";
import { CustomComposeChart, CustomLineChart, HozBarChart } from "../../components/UI/organisms/Chart";
import {DateFilter} from "../../components/UI/organisms/Filter";



const tmp = [1,2,3,4,5]
export default function power(props) {

  //* props 선언부 *
  // 1. 테마 선택
  const isWhiteMode = props.isWhiteMode;
  const setIsWhiteMode = props.setIsWhiteMode;


  //* grid 데이터 선언부 *
  let equipmentsDT;
  let forecastEquipsDT;
  
  const equipmentsCol = [
      {title:"인버터명", field:"inverter", width:"100", headerHozAlign : "center"},
      {title:"태양광명", field:"name", headerHozAlign : "center"},
      {title:"실시간 발전량", field:"realtime", headerHozAlign : "center"},
      {title:"금일 누적 발전량", field:"today", headerHozAlign : "center"},
      {title:"예측 발전량", field:"forecast", headerHozAlign : "center"},
  ];

  const forecastEquipsCol = [
    {title:"설비명", field:"name", headerHozAlign : "center"},
    {title:"관리번호", field:"inverter", width:"100", headerHozAlign : "center"},
    {title:"일자", field:"realtime", headerHozAlign : "center"},
    {title:"예측 발전량", field:"forecast", headerHozAlign : "center"},
    {title:"실제 발전량", field:"today", headerHozAlign : "center"},
    {title:"오차 허용범위", field:"today", headerHozAlign : "center"},
    {title:"예측 오차율", field:"today", headerHozAlign : "center"},
  ];

  const equipmentsData = [
    {
      inverter : "인버터 A",
      name : "강원 발전소",
      realtime : "300 kWh",
      today : "500 kWh",
      forecast : "550 kWh",
    },
    {
      inverter : "인버터 A",
      name : "서부 발전소",
      realtime : "EFG0 realtime",
      today : "500 kWh",
      forecast : "550 kWh",
    },
    {
      inverter : "인버터 A",
      name : "강원 발전소",
      realtime : "300 kWh",
      today : "500 kWh",
      forecast : "550 kWh",
    },
    {
      inverter : "인버터 A",
      name : "강원 발전소",
      realtime : "BBB realtime",
      today : "비500 kWh",
      forecast : "#25483",
    },
    {
      inverter : "인버터 A",
      name : "동서 발전소",
      realtime : "300 kWh",
      today : "500 kWh",
      forecast : "550 kWh",
    },
    {
      inverter : "인버터 A",
      name : "동서 발전소",
      realtime : "300 kWh",
      today : "500 kWh",
      forecast : "550 kWh",
      
    },
    {
      inverter : "인버터 A",
      name : "동서 발전소",
      realtime : "300 kWh",
      today : "500 kWh",
      forecast : "550 kWh",
      
    },
    {
      inverter : "인버터 A",
      name : "동서 발전소",
      realtime : "300 kWh",
      today : "500 kWh",
      forecast : "550 kWh",
      
    },
    {
      inverter : "인버터 A",
      name : "동서 발전소",
      realtime : "300 kWh",
      today : "500 kWh",
      forecast : "550 kWh",
      
    },
  ]

  const forecastEquipsData = [
    {
      inverter : "인버터 A",
      name : "강원 발전소",
      realtime : "300 kWh",
      today : "500 kWh",
      forecast : "550 kWh",
    },
    {
      inverter : "인버터 A",
      name : "서부 발전소",
      realtime : "EFG0 realtime",
      today : "500 kWh",
      forecast : "550 kWh",
    },
    {
      inverter : "인버터 A",
      name : "강원 발전소",
      realtime : "300 kWh",
      today : "500 kWh",
      forecast : "550 kWh",
    },
    {
      inverter : "인버터 A",
      name : "강원 발전소",
      realtime : "BBB realtime",
      today : "비500 kWh",
      forecast : "#25483",
    },
    {
      inverter : "인버터 A",
      name : "동서 발전소",
      realtime : "300 kWh",
      today : "500 kWh",
      forecast : "550 kWh",
    },
    {
      inverter : "인버터 A",
      name : "동서 발전소",
      realtime : "300 kWh",
      today : "500 kWh",
      forecast : "550 kWh",
      
    },
    {
      inverter : "인버터 A",
      name : "동서 발전소",
      realtime : "300 kWh",
      today : "500 kWh",
      forecast : "550 kWh",
      
    },
    {
      inverter : "인버터 A",
      name : "동서 발전소",
      realtime : "300 kWh",
      today : "500 kWh",
      forecast : "550 kWh",
      
    },
    {
      inverter : "인버터 A",
      name : "동서 발전소",
      realtime : "300 kWh",
      today : "500 kWh",
      forecast : "550 kWh",
      
    },
  ]

  useEffect(()=>{
    makeDT(equipmentsDT, equipmentsData, "#equipments", equipmentsCol);
    // makeDT(forecastEquipsDT, forecastEquipsData, "#forecastEquips", forecastEquipsCol);
    // makeDT(forecastEquipsDT, forecastEquipsData, "#genAmountEquips", forecastEquipsCol);
    
  },[])

  return (
    <>
    <h2>
      현황 &#62; 발전 현황
    </h2>

    <GridWrap
      className="info-power"
      isDraggable={true}
      isResizable={true}
      items={5}
      cols={10}
      rowHeight={155}
      layout={[
        {i: 'today-power-summary', x: 0, y: 0, w: 3, h: 2, minW: 4, maxW: 6, minH: 2},
        {i: 'today-inverter-power-summary', x: 0, y: 3, w: 3, h:3, minW: 4, maxW: 6},
        {i: 'power-trend', x: 3, y: 0, w: 7, h: 2, minW: 7, maxW: 7, minH: 2},
        {i: 'each-inverter-trend', x: 3, y: 3, w: 7, h: 3, minH: 2}
      ]}
      contents={[
        <div key="today-power-summary">
          <DashBoardPannel
            className="today-power-summary"
            pannelTitle="금일 발전량 요약 정보"
            pannelLink=""
            pannelCont={
              <>
              <div className="contents-wrap">
                <dl>
                  <dt>
                    금일 누적 발전량</dt>
                    
                  <dd>
                    <em>
                      <AnimationCount
                        start={0}
                        count={3900}
                        duration={2000}
                        // decimals={4}
                        useGroup={true}
                        animation='up'
                      />
                    </em>
                    &nbsp;kWh
                  </dd>
                </dl>

                <dl>
                  <dt>금일 예측 발전량</dt>
                  <dd><em>
                      <AnimationCount
                        start={0}
                        count={3890}
                        duration={2000}
                        // decimals={4}
                        useGroup={true}
                        animation='up'
                      />
                    </em>
                    &nbsp;kWh</dd>
                </dl>           
           
                <dl>
                  <dt>발전시간</dt>
                  <dd><em>3.1</em>&nbsp;시간</dd>
                </dl>

                <dl>
                  <dt>가동률</dt>
                  <dd><em>75</em>&nbsp;%</dd>
                </dl>           
              </div>
              </>
            }
          />
        </div>
        
        ,

        <div key="today-inverter-power-summary">
          <DashBoardPannel
            className="today-inverter-power-summary"
            pannelTitle="금일 인버터별 발전량 요약 정보"
            pannelLink=""
            pannelCont={
              <>
              <div className="contents-wrap">
                <div className="flex-center">
                  <dl>
                    <dt>MIN</dt>
                    <dd><em>408,00</em></dd>
                  </dl>

                  <dl>
                    <dt>MAX</dt>
                    <dd><em>408,00</em></dd>
                  </dl>           

                  <dl>
                    <dt>AVERAGE</dt>
                    <dd><em>408,00</em></dd>
                  </dl>           
                </div>

                <ul className="bar-chart">
                  {tmp.map((item)=>(
                 
                    <li id={item}>
                      <HozBarChart 
                        label={`인버터 0${item}`}
                        val={Math.random()*100}
                      />
                    </li>
                  
                  ))}
                </ul>
              </div>
              </>
            }
          />
        </div>
        
        ,

        <div key="power-trend">
          <DashBoardPannel
            className="power-trend"
            pannelTitle="발전량 트렌드 (실제/예측)"
            pannelLink=""
            pannelCont={
              <>
              <div>
                <DateFilter />
                <div>
                  <CustomComposeChart />
                </div>
              </div>
              </>
            }
          />
        </div>

        ,

        <div key="each-inverter-trend">
          <DashBoardPannel
            className="each-inverter-trend"
            pannelTitle="인버터별 발전량"
            pannelLink=""
            pannelCont={
              <>
              <div>
                <DateFilter />
                <div>
                  <div id="equipments"></div>
                </div>
              </div>
              </>
            }
          />
        </div>
      ]}
    />
    </>
  )
}
