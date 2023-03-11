import React, { Component, useEffect } from "react";
import { makeDT } from "../../components/modules/makeDT";
import { Icon } from "semantic-ui-react";
import { VictoryPie } from "victory";
import Dounut from "../../components/modules/Dounut";


export default function equipment(props) {

  //* props 선언부 *
  // 1. 테마 선택
  const isWhiteMode = props.isWhiteMode;
  const setIsWhiteMode = props.setIsWhiteMode;


  //* chart 데이터 선언부 *
  // 도넛 차트
  const dounutData = [
    { x: "사용보고서", y: 30 },
    { x: "전체보고서", y: 70 },
  ];

  // 라인 차트
  const options = {
    chart: {
      type: 'areaspline',
      styledMode: true,
    },
    highcharts_axis_title : false,
    title: false,
    series: [{
      data: [1, 2, 3.,80,90,100,200,80,60]
    }]
  }

  //* grid 데이터 선언부 *
  let avgInfoDT;
  let profitDT;
  let genAmountDT;
  let errorInfoDT;
  let ecoInfoDT;
  let equipDT;
  
    const avgInfoCol = [
        {title:"발전소명", field:"gen_name", width:"100", headerHozAlign : "center"},
        {title:"총 발전량", field:"total_gen", headerHozAlign : "center"},
        {title:"총 발전시간", field:"total_gen_time", headerHozAlign : "center"},
        {title:"평균 발전량", field:"avg_gen", headerHozAlign : "center"},
        {title:"평균 발전시간", field:"avg_gen_time", headerHozAlign : "center"},
    ];

    const profitCol = [
        {title:"월", field:"month", width:"100", headerHozAlign : "center"},
        {title:"예측 수익금", field:"forecast_profit", headerHozAlign : "center"},
        {title:"총 수익금", field:"total_profit", headerHozAlign : "center"},
        {title:"예측 오차율", field:"forecast_interval", headerHozAlign : "center"},
        {title:"발전소 지출", field:"gen_budget", headerHozAlign : "center"},
        {title:"합계", field:"total_cost", headerHozAlign : "center"},
    ];

    const genAmountCol = [
        {title:"월", field:"month", width:"100", headerHozAlign : "center"},
        {title:"예측 발전량", field:"forecast_gen", headerHozAlign : "center"},
        {title:"총 발전량", field:"total_gen", headerHozAlign : "center"},
        {title:"예측 오차율", field:"forecast_interval", headerHozAlign : "center"},
        {title:"총 발전시간", field:"total_gen_time", headerHozAlign : "center"},
        {title:"평균 발전량", field:"avg_gen_amount", headerHozAlign : "center"},
        {title:"평균 발전시간", field:"avg_gen_time", headerHozAlign : "center"},
    ];

    const errorInfoCol = [
        {title:"월", field:"month", width:"100", headerHozAlign : "center"},
        {title:"총 에러 발생 건수", field:"total_error", headerHozAlign : "center"},
        {title:"에러 해결 건수", field:"clear_error", headerHozAlign : "center"},
        {title:"에러 미해결 건수", field:"not_clear_error", headerHozAlign : "center"},
        {title:"조치 현황", field:"now_status", headerHozAlign : "center"},
    ];

    const ecoInfoCol = [
        {title:"월", field:"month", width:"100", headerHozAlign : "center"},
        {title:"탄소 배출 절감", field:"carbon_minus", headerHozAlign : "center"},
        {title:"환경 기여도", field:"benefit", headerHozAlign : "center"},
    ];

    const equipCol = [
        {title:"월", field:"month", width:"100", headerHozAlign : "center"},
        {title:"새 장비", field:"new", headerHozAlign : "center"},
    ];

    const avgInfoData = [
        {
            gen_name : "A 발전소",
            total_gen : "300 MWh",
            total_gen_time : "140 H",
            avg_gen : "2.14 MWh",
            avg_gen_time : "3.5 H",
        },
        {
            gen_name : "A 발전소",
            total_gen : "300 MWh",
            total_gen_time : "140 H",
            avg_gen : "2.14 MWh",
            avg_gen_time : "3.5 H",
        },
        {
            gen_name : "A 발전소",
            total_gen : "300 MWh",
            total_gen_time : "140 H",
            avg_gen : "2.14 MWh",
            avg_gen_time : "3.5 H",
        },
        {
            gen_name : "A 발전소",
            total_gen : "300 MWh",
            total_gen_time : "140 H",
            avg_gen : "2.14 MWh",
            avg_gen_time : "3.5 H",
        },
        {
            gen_name : "A 발전소",
            total_gen : "300 MWh",
            total_gen_time : "140 H",
            avg_gen : "2.14 MWh",
            avg_gen_time : "3.5 H",
        },
    ]
  
    const profitData =[
    {
        month : "1",
        forecast_profit : "30,000,000원",
        total_profit : "30,000,000원",
        forecast_profit : "30,000,000원",
        forecast_interval : "0%",
        gen_budget : "20,000원",
        total_cost : "27,000,000원",
    },
    {
        month : "2",
        forecast_profit : "30,000,000원",
        total_profit : "30,000,000원",
        forecast_profit : "30,000,000원",
        forecast_interval : "0%",
        gen_budget : "20,000원",
        total_cost : "27,000,000원",
    },
    {
        month : "3",
        forecast_profit : "30,000,000원",
        total_profit : "30,000,000원",
        forecast_profit : "30,000,000원",
        forecast_interval : "0%",
        gen_budget : "20,000원",
        total_cost : "27,000,000원",
    },
    {
        month : "4",
        forecast_profit : "30,000,000원",
        total_profit : "30,000,000원",
        forecast_profit : "30,000,000원",
        forecast_interval : "0%",
        gen_budget : "20,000원",
        total_cost : "27,000,000원",
    },
    {
        month : "5",
        forecast_profit : "30,000,000원",
        total_profit : "30,000,000원",
        forecast_profit : "30,000,000원",
        forecast_interval : "0%",
        gen_budget : "20,000원",
        total_cost : "27,000,000원",
    },
    {
        month : "6",
        forecast_profit : "30,000,000원",
        total_profit : "30,000,000원",
        forecast_profit : "30,000,000원",
        forecast_interval : "0%",
        gen_budget : "20,000원",
        total_cost : "27,000,000원",
    }
    ];
   
    const genAmountData =[
        {
            month : "1",
            forecast_gen : "2.74 MWh",
            total_gen : "2.74 MWh",
            forecast_profit : "30,000,000원",
            forecast_interval : "0%",
            total_gen_time : "140 H",
            avg_gen_amount : "2.74 MWh",
            avg_gen_time : "3.5 H",
        },
        {
            month : "1",
            forecast_gen : "2.74 MWh",
            total_gen : "2.74 MWh",
            forecast_profit : "30,000,000원",
            forecast_interval : "0%",
            total_gen_time : "140 H",
            avg_gen_amount : "2.74 MWh",
            avg_gen_time : "3.5 H",
        },
        {
            month : "1",
            forecast_gen : "2.74 MWh",
            total_gen : "2.74 MWh",
            forecast_profit : "30,000,000원",
            forecast_interval : "0%",
            total_gen_time : "140 H",
            avg_gen_amount : "2.74 MWh",
            avg_gen_time : "3.5 H",
        },
        {
            month : "1",
            forecast_gen : "2.74 MWh",
            total_gen : "2.74 MWh",
            forecast_profit : "30,000,000원",
            forecast_interval : "0%",
            total_gen_time : "140 H",
            avg_gen_amount : "2.74 MWh",
            avg_gen_time : "3.5 H",
        },
    ]

    const errorInfoData =[
        {
            month : "1",
            total_error : "100 건",
            clear_error : "99 건",
            not_clear_error : "1 건",
            now_status : "모듈 교체 진행중",
        },
        {
            month : "2",
            total_error : "100 건",
            clear_error : "99 건",
            not_clear_error : "1 건",
            now_status : "모듈 교체 진행중",
        }
    ]

    const ecoInfoData =[
        {
            month : "1",
            carbon_minus : "-",
            benefit : "-",
        },
        {
            month : "2",
            carbon_minus : "-",
            benefit : "-",
        },
    ]

    const equipData =[
        {
            month : "1",
            new : "3 개",
        },
        {
            month : "2",
            new : "13 개",
        },
    ]


    useEffect(()=>{
        makeDT(avgInfoDT, avgInfoData, "#avgInfo", avgInfoCol);
        makeDT(profitDT, profitData, "#profitList", profitCol);
        makeDT(genAmountDT, genAmountData, "#genAmount", genAmountCol);
        makeDT(errorInfoDT, errorInfoData, "#errorInfo", errorInfoCol);
        makeDT(ecoInfoDT, ecoInfoData, "#ecoInfo", ecoInfoCol);
        makeDT(equipDT, equipData, "#equip", equipCol);
      },[])

  return (
    <>
    <div className="status">
        <h2>
            <Icon name='bell' inverted color={isWhiteMode ? "green" : "grey"} />
            현황 &#62; 보고서
        </h2>
        <div className="status-wrap flex-center">
            <div className="gen-amount">
            <h3>보고서 OVERVIEW</h3>
            <div className="pannel overview">
                <div className="pannel-header">2021년 6월 발전 요약</div>
                <div className="pannel-container">
                
                <div className="equip-overview">
                    <ul className="dounut flex-center">
                    <li>
                        <span>수익</span>
                        <Dounut
                            size={"150"}
                            color={"#FF5F6D"} 
                            value={"60"}
                            text={"20% 증가"}  
                        />
                    </li>
    
                    <li>
                        <span>발전량</span>
                        <Dounut
                            size={"150"}
                            color={"#ffa600"} 
                            value={"70"}
                            text={"25% 증가"}  
                        />
                    </li>
    
                    <li>
                        <span>에러 발생 건수</span>
                        <Dounut
                            size={"150"}
                            color={"#068d3a"} 
                            value={"60"}
                            text={"10% 감소"}  
                        />
                    </li>
                    </ul>
                </div>

                <div className="hr"></div>

                <div className="inverter">
                    <div id="avgInfo"></div>
                </div>
            </div>
        </div>
    </div>


        
        <div className="gen-detail">
          <h3>보고서 DETAIL</h3>
          <div className="pannel report-info">
            <div className="pannel-header">보고서별 정보</div>
            <div className="pannel-container">
                <h4>수익</h4>
                <div id="profitList"></div>

                <div className="hr"></div>

                <h4>발전량</h4>
                <div id="genAmount"></div>

                <div className="hr"></div>

                <h4>에러발생 건수</h4>
                <div id="errorInfo"></div>

                <div className="hr"></div>
                
                <div className="last flex-center">
                    <div>
                        <h4>환경기여도</h4>
                        <div id="ecoInfo"></div>
                    </div>
                    <div>
                        <h4>장비</h4>
                        <div id="equip"></div>
                    </div>
                </div>
            </div>
          </div>
        </div>    
      </div>
    </div>
    </>
  )
}
