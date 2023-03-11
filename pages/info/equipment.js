import React, { Component, useEffect } from "react";
import { makeDT } from "../../components/modules/makeDT";
import { Icon } from "semantic-ui-react";
import { VictoryPie } from "victory";


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
  let equipmentsDT;
  let equipListDT;
  
  const equipmentsCol = [
      {title:"설비명", field:"equip_name", width:"100", headerHozAlign : "center"},
      {title:"개수", field:"count", headerHozAlign : "center"},
      {title:"상태", field:"now_status", headerHozAlign : "center"},
      {title:"마지막 통신시간", field:"last_connection", headerHozAlign : "center"},
  ];

  const equipListCol = [
    {title:"설비명", field:"equip_name", width:"100", headerHozAlign : "center"},
    {title:"관리번호", field:"id_num", headerHozAlign : "center"},
    {title:"수량", field:"count", headerHozAlign : "center"},
    {title:"구매일자", field:"perchase_date", headerHozAlign : "center"},
    {title:"사이즈(mm)", field:"size", headerHozAlign : "center"},
    {title:"무게", field:"weight", headerHozAlign : "center"},
    {title:"용량", field:"amount", headerHozAlign : "center"},
    {title:"관리 담당자", field:"manager", headerHozAlign : "center"},
    {title:"유지 보수 이력", field:"history", headerHozAlign : "center"},
  ];

  const equipmentsData = [
    {
      equip_name : "모듈",
      count : "6개",
      now_status : "6개 작동중",
      last_connection : "2021-05-31 08:00:00",
    },
    {
      equip_name : "인버터",
      count : "2개",
      now_status : "1개",
      last_connection : "2021-05-31 08:00:00",
    },
    {
      equip_name : "인버터 A",
      count : "1개",
      now_status : "1개 작동중",
      last_connection : "2021-05-31 08:00:00",
    },
    {
      equip_name : "인버터 A",
      count : "1개",
      now_status : "1개 작동중",
      last_connection : "2021-05-31 08:00:00",
    },
    {
      equip_name : "인버터 A",
      count : "1개",
      now_status : "1개 작동중",
      last_connection : "2021-05-31 08:00:00",
    },
   
  ]
  
  const equipListsData = [
    {
      equip_name : "모듈",
      id_num : "1",
      count : "6개",
      perchase_date : "2018-01-01",
      size : "600 X 1306 X 40",
      weight : "10kg",
      amount : "1.1MW",
      manager : "홍길동",
      history : "3일전",
    },
    {
      equip_name : "모듈",
      id_num : "1",
      count : "6개",
      perchase_date : "2018-01-01",
      size : "600 X 1306 X 40",
      weight : "10kg",
      amount : "1.1MW",
      manager : "홍길동",
      history : "3일전",
    },
    {
      equip_name : "모듈",
      id_num : "1",
      count : "6개",
      perchase_date : "2018-01-01",
      size : "600 X 1306 X 40",
      weight : "10kg",
      amount : "1.1MW",
      manager : "홍길동",
      history : "3일전",
    },
    {
      equip_name : "모듈",
      id_num : "1",
      count : "6개",
      perchase_date : "2018-01-01",
      size : "600 X 1306 X 40",
      weight : "10kg",
      amount : "1.1MW",
      manager : "홍길동",
      history : "3일전",
    },
    {
      equip_name : "모듈",
      id_num : "1",
      count : "6개",
      perchase_date : "2018-01-01",
      size : "600 X 1306 X 40",
      weight : "10kg",
      amount : "1.1MW",
      manager : "홍길동",
      history : "3일전",
    },
    {
      equip_name : "모듈",
      id_num : "1",
      count : "6개",
      perchase_date : "2018-01-01",
      size : "600 X 1306 X 40",
      weight : "10kg",
      amount : "1.1MW",
      manager : "홍길동",
      history : "3일전",
    },
    {
      equip_name : "모듈",
      id_num : "1",
      count : "6개",
      perchase_date : "2018-01-01",
      size : "600 X 1306 X 40",
      weight : "10kg",
      amount : "1.1MW",
      manager : "홍길동",
      history : "3일전",
    },
    {
      equip_name : "모듈",
      id_num : "1",
      count : "6개",
      perchase_date : "2018-01-01",
      size : "600 X 1306 X 40",
      weight : "10kg",
      amount : "1.1MW",
      manager : "홍길동",
      history : "3일전",
    },
    {
      equip_name : "모듈",
      id_num : "1",
      count : "6개",
      perchase_date : "2018-01-01",
      size : "600 X 1306 X 40",
      weight : "10kg",
      amount : "1.1MW",
      manager : "홍길동",
      history : "3일전",
    },
    {
      equip_name : "모듈",
      id_num : "1",
      count : "6개",
      perchase_date : "2018-01-01",
      size : "600 X 1306 X 40",
      weight : "10kg",
      amount : "1.1MW",
      manager : "홍길동",
      history : "3일전",
    },
    {
      equip_name : "모듈",
      id_num : "1",
      count : "6개",
      perchase_date : "2018-01-01",
      size : "600 X 1306 X 40",
      weight : "10kg",
      amount : "1.1MW",
      manager : "홍길동",
      history : "3일전",
    },
  ]
  
  useEffect(()=>{
    makeDT(equipmentsDT, equipmentsData, "#equipments", equipmentsCol);
    makeDT(equipListDT, equipListsData, "#equipList", equipListCol, "800px");
  },[])

  return (
    <>
    <div className="status">
      <h2>
        <Icon name='bell' inverted color={isWhiteMode ? "green" : "grey"} />
        현황 &#62; 설비 현황
      </h2>
      <div className="status-wrap flex-center">
        <div className="gen-amount">
          <h3>설비 OVERVIEW</h3>
          <div className="pannel overview">
            <div className="pannel-header">설비별 작동 상태</div>
            <div className="pannel-container">
              
              <div className="equip-overview">
                <ul className="dounut flex-center">
                  <li>
                    <span>모듈</span>
                    <VictoryPie
                      colorScale={["#FF5F6D", "#444" ]}
                      innerRadius={80}
                      data={dounutData}
                    />
                  </li>
  
                  <li>
                    <span>인버터</span>
                    <VictoryPie
                      colorScale={["#ffa600", "#444" ]}
                      innerRadius={80}
                      data={dounutData}
                    />
                  </li>
  
                  <li>
                    <span>ESS</span>
                    <VictoryPie
                      colorScale={["#068d3a", "#444" ]}
                      innerRadius={80}
                      data={dounutData}
                    />
                  </li>
                </ul>

                <ul className="dounut flex-center">
                  <li>
                    <span>접속함</span>
                    <VictoryPie
                      colorScale={["#FF5F6D", "#444" ]}
                      innerRadius={80}
                      data={dounutData}
                    />
                  </li>
  
                  <li>
                    <span>RTU</span>
                    <VictoryPie
                      colorScale={["#ffa600", "#444" ]}
                      innerRadius={80}
                      data={dounutData}
                    />
                  </li>
  
                  <li>
                    <span>수배전반</span>
                    <VictoryPie
                      colorScale={["#068d3a", "#444" ]}
                      innerRadius={80}
                      data={dounutData}
                    />
                  </li>
                </ul>
              </div>
            
              <div className="inverter">
                <div id="equipments"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="gen-detail">
          <h3>설비 DETAIL</h3>
          <div className="pannel each-plant-info">
            <div className="pannel-header">설비별 정보</div>
            <div className="pannel-container">
              <div className="option flex-center">
                <div>
                  <select name="gen_name" id="genName">
                    <option value="">발전소 선택</option>
                    <option value="1">동서 발전소</option>
                    <option value="2">동부 발전소</option>
                    <option value="4">중부 발전소</option>
                  </select>

                  <select name="gen_name" id="genName">
                    <option value="">날짜 선택</option>
                    <option value="1">2021</option>
                    <option value="2">2020</option>
                    <option value="3">2019</option>
                    <option value="4">2018</option>
                  </select>
                </div>
                
                <div className="btn-wrap flex-center">
                  <button className="btn">작동제어</button>
                  <button className="btn">관리대장</button>
                </div>
              </div>

              <div id="equipList"></div>
            </div>
          </div>
        </div>    
      </div>
    </div>
    </>
  )
}
