import React, { Component, useEffect } from "react";
import { makeDT } from "../../components/modules/makeDT";
import { Icon } from "semantic-ui-react";
import { VictoryPie, VictoryChart, VictoryStack , VictoryArea, VictoryPortal, VictoryGroup, VictoryScatter } from "victory";

export default function equipment(props) {

  //* props 선언부 *
  // 1. 테마 선택
  const isWhiteMode = props.isWhiteMode;
  const setIsWhiteMode = props.setIsWhiteMode;


  //* chart 데이터 선언부 *
  // 도넛 차트
  const dounutData = [
    { x: "사용설비", y: 30 },
    { x: "전체설비", y: 70 },
  ];


  let alertReportDT;
  const alertReportCol = [
    {title:"설비명", field:"equip_name", width:"100", headerHozAlign : "center"},
    {title:"관리번호", field:"id_num", headerHozAlign : "center"},
    {title:"에러코드", field:"error_code", headerHozAlign : "center"},
    {title:"알림코드", field:"alert_code", headerHozAlign : "center"},
    {title:"발전소 정지유무", field:"is_stop", headerHozAlign : "center"},
    {title:"발생 시각", field:"start_time", headerHozAlign : "center"},
    {title:"해제 시각", field:"end_time", headerHozAlign : "center"},
    {title:"관리자 확인", field:"admin_confirm", headerHozAlign : "center"},
  ]
  const alertReportData = [
    {
            "equip_name" : "태양광1호기", 
            "error_code" : "01021232",
            "is_stop" : "O",
            "id_num" : "1", 
            "alert_code" : "상태 이상", 
            "start_time" : "2021-05-31 21:00:00", 
            "end_time" : "2021-05-31 21:00:00", 
            "admin_confirm" : "미확인", 
    },
    {
        "equip_name" : "태양광1호기",  "error_code" : "01021232",
        "id_num" : "1", 
        "is_stop" : "O",
        "alert_code" : "상태 이상", 
        "start_time" : "2021-05-31 21:00:00", 
        "end_time" : "2021-05-31 21:00:00", 
        "admin_confirm" : "미확인", 
    },
    {
        "equip_name" : "태양광1호기",  "error_code" : "01021232",
        "id_num" : "1", 
        "is_stop" : "O",
        "alert_code" : "상태 이상", 
        "start_time" : "2021-05-31 21:00:00", 
        "end_time" : "2021-05-31 21:00:00", 
        "admin_confirm" : "미확인", 
    },
    {
        "equip_name" : "태양광1호기",  "error_code" : "01021232",
        "id_num" : "1", 
        "is_stop" : "O",
        "alert_code" : "상태 이상", 
        "start_time" : "2021-05-31 21:00:00", 
        "end_time" : "2021-05-31 21:00:00", 
        "admin_confirm" : "미확인", 
    },
    {
        "equip_name" : "태양광1호기",  "error_code" : "01021232",
        "id_num" : "1", 
        "is_stop" : "O",
        "alert_code" : "상태 이상", 
        "start_time" : "2021-05-31 21:00:00", 
        "end_time" : "2021-05-31 21:00:00", 
        "admin_confirm" : "미확인", 
    },
    {
        "equip_name" : "태양광1호기",  "error_code" : "01021232",
        "id_num" : "1", 
        "is_stop" : "O",
        "alert_code" : "상태 이상", 
        "start_time" : "2021-05-31 21:00:00", 
        "end_time" : "2021-05-31 21:00:00", 
        "admin_confirm" : "미확인", 
    },
    {
        "equip_name" : "태양광1호기",  "error_code" : "01021232",
        "id_num" : "1", 
        "is_stop" : "O",
        "alert_code" : "상태 이상", 
        "start_time" : "2021-05-31 21:00:00", 
        "end_time" : "2021-05-31 21:00:00", 
        "admin_confirm" : "미확인", 
    },
    {
        "equip_name" : "태양광1호기",  "error_code" : "01021232",
        "id_num" : "1", 
        "is_stop" : "O",
        "alert_code" : "상태 이상", 
        "start_time" : "2021-05-31 21:00:00", 
        "end_time" : "2021-05-31 21:00:00", 
        "admin_confirm" : "미확인", 
    },
    {
        "equip_name" : "태양광1호기",  "error_code" : "01021232",
        "id_num" : "1", 
        "is_stop" : "O",
        "alert_code" : "상태 이상", 
        "start_time" : "2021-05-31 21:00:00", 
        "end_time" : "2021-05-31 21:00:00", 
        "admin_confirm" : "미확인", 
    },
    {
        "equip_name" : "태양광1호기",  "error_code" : "01021232",
        "id_num" : "1", 
        "is_stop" : "O",
        "alert_code" : "상태 이상", 
        "start_time" : "2021-05-31 21:00:00", 
        "end_time" : "2021-05-31 21:00:00", 
        "admin_confirm" : "미확인", 
    },
    {
        "equip_name" : "태양광1호기",  "error_code" : "01021232",
        "id_num" : "1", 
        "is_stop" : "O",
        "alert_code" : "상태 이상", 
        "start_time" : "2021-05-31 21:00:00", 
        "end_time" : "2021-05-31 21:00:00", 
        "admin_confirm" : "미확인", 
    },
    {
        "equip_name" : "태양광1호기",  "error_code" : "01021232",
        "id_num" : "1", 
        "is_stop" : "O",
        "alert_code" : "상태 이상", 
        "start_time" : "2021-05-31 21:00:00", 
        "end_time" : "2021-05-31 21:00:00", 
        "admin_confirm" : "미확인", 
    },
    {
        "equip_name" : "태양광1호기",  "error_code" : "01021232",
        "id_num" : "1", 
        "is_stop" : "O",
        "alert_code" : "상태 이상", 
        "start_time" : "2021-05-31 21:00:00", 
        "end_time" : "2021-05-31 21:00:00", 
        "admin_confirm" : "미확인", 
    },
    {
        "equip_name" : "태양광1호기",  "error_code" : "01021232",
        "id_num" : "1", 
        "is_stop" : "O",
        "alert_code" : "상태 이상", 
        "start_time" : "2021-05-31 21:00:00", 
        "end_time" : "2021-05-31 21:00:00", 
        "admin_confirm" : "미확인", 
    },
    {
        "equip_name" : "태양광1호기",  "error_code" : "01021232",
        "id_num" : "1", 
        "is_stop" : "O",
        "alert_code" : "상태 이상", 
        "start_time" : "2021-05-31 21:00:00", 
        "end_time" : "2021-05-31 21:00:00", 
        "admin_confirm" : "미확인", 
    },
    {
        "equip_name" : "태양광1호기",  "error_code" : "01021232",
        "id_num" : "1", 
        "is_stop" : "O",
        "alert_code" : "상태 이상", 
        "start_time" : "2021-05-31 21:00:00", 
        "end_time" : "2021-05-31 21:00:00", 
        "admin_confirm" : "미확인", 
    },
  ]
 
  useEffect(()=>{
    makeDT(alertReportDT, alertReportData, "#alertReport", alertReportCol);
  },[])

  return (
    <>
    <div className="status">
      <h2>
        <Icon name='bell' inverted color={isWhiteMode ? "green" : "grey"} />
        현황 &#62; 알림현황
      </h2>
      <div className="status-wrap flex-center">
        <div className="gen-amount">
          <h3>알림 OVERVIEW</h3>
          
          <div className="pannel alert-overview">
            <div className="pannel-header">기기별 알림 상태</div>
            <div className="pannel-container">
              <div className="equip-overview">
                <ul className="dounut flex-center">
                  <li>
                    <span>상태 이상</span>
                    <VictoryPie
                      colorScale={["#FF5F6D", "#444" ]}
                      innerRadius={80}
                      data={dounutData}
                    />
                  </li>
  
                  <li>
                    <span>확인 필요</span>
                    <VictoryPie
                      colorScale={["#ffa600", "#444" ]}
                      innerRadius={80}
                      data={dounutData}
                    />
                  </li>

                  <li>
                    <span>정상 작동</span>
                    <VictoryPie
                      colorScale={["#ffa600", "#444" ]}
                      innerRadius={80}
                      data={dounutData}
                    />
                  </li>
                </ul>

                <div className="hr"></div>

                <div className="flow-img">
                    상태 흐름도 그림
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="gen-detail">
          <h3>알림 DETAIL</h3>
          <div className="pannel alert-report">
            <div className="pannel-header">알림 리포트</div>
            <div className="pannel-container">
            <div className="option flex-center">
                <div>
                    <select name="gen_name" id="genName">
                        <option value="">발전소 선택</option>
                        <option value="1">동서 발전소</option>
                        <option value="2">동부 발전소</option>
                        <option value="4">중부 발전소</option>
                    </select>
            
                    <select name="gen_name" id="">
                        <option value="">알림종류 선택</option>
                        <option value="1">상태이상</option>
                        <option value="2">확인필요</option>
                        <option value="3">정상작동</option>
                    </select>

                    <select name="gen_name" id="">
                        <option value="">에러코드 선택</option>
                        <option value="1">1023102</option>
                        <option value="2">1023102</option>
                        <option value="3">1023102</option>
                    </select>

                    <select name="gen_name" id="">
                        <option value="">설비종류 선택</option>
                        <option value="1">태양광 1호</option>
                        <option value="2">태양광 2호</option>
                        <option value="3">태양광 3호</option>
                        <option value="4">태양광 4호</option>
                    </select>
                </div>
                
                <div className="btn-wrap flex-center">
                  <button className="btn green-bg">엑셀 다운로드</button>
                </div>
              </div>


                <div id="alertReport"></div>
            </div>
          </div>
        </div>    
      </div>
    </div>
    </>
  )
}
