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


    let genInfoDT;
    let ownerInfoDT;
    let officeInfoDT;
    let equipInfoDT;

    const genInfoCol = [
        {title:"발전소명", field:"gen_name", width:"100", headerHozAlign : "center"},
        {title:"위치", field:"location", headerHozAlign : "center"},
        {title:"건설 타입", field:"type", headerHozAlign : "center"},
        {title:"관리코드", field:"mng_code", headerHozAlign : "center"},
        {title:"상업 개시일", field:"start_date", headerHozAlign : "center"},
        {title:"PPA 계약", field:"ppa", headerHozAlign : "center"},
    ]
    const ownerInfoCol = [
        {title:"소유주명", field:"owner_name", width:"100", headerHozAlign : "center"},
        {title:"연락처", field:"phone", headerHozAlign : "center"},
        {title:"사업자번호", field:"num", headerHozAlign : "center"},
    ]
    
    const officeInfoCol = [
        {title:"설비명", field:"gen_name", width:"100", headerHozAlign : "center"},
        {title:"담당 업무", field:"job", headerHozAlign : "center"},
        {title:"유관부서", field:"office", headerHozAlign : "center"},
        {title:"정", field:"main", headerHozAlign : "center"},
        {title:"부", field:"minor", headerHozAlign : "center"},
        {title:"연락처", field:"phone", headerHozAlign : "center"},
    ]
    
    const equipInfoCol = [
        {title:"설비명", field:"gen_name", width:"100", headerHozAlign : "center"},
        {title:"점검일", field:"chk_date", headerHozAlign : "center"},
        {title:"유지보수 점검사", field:"chk_person", headerHozAlign : "center"},
        {title:"유지보수 점검 담당자", field:"chk_person2", headerHozAlign : "center"},
        {title:"유지보수 내역", field:"chk_info", headerHozAlign : "center"},
        {title:"발생원인", field:"reason", headerHozAlign : "center"},
        {title:"조치결과", field:"result", headerHozAlign : "center"},
        {title:"연락처", field:"phone", headerHozAlign : "center"},
        {title:"확인자", field:"manager", headerHozAlign : "center"},
    ]
    
    const genInfoData = [
        {
            "gen_name" : "태양광1호기", 
            "location" : "고성",
            "type" : "육지/임야",
            "mng_code" : "1", 
            "start_date" : "2021-05-31", 
            "ppa" : "2021-05-31", 
            
        },
        {
            "gen_name" : "태양광1호기", 
            "location" : "고성",
            "type" : "육지/임야",
            "mng_code" : "1", 
            "start_date" : "2021-05-31", 
            "ppa" : "2021-05-31", 
            
        },
        {
            "gen_name" : "태양광1호기", 
            "location" : "고성",
            "type" : "육지/임야",
            "mng_code" : "1", 
            "start_date" : "2021-05-31", 
            "ppa" : "2021-05-31", 
            
        },
        {
            "gen_name" : "태양광1호기", 
            "location" : "고성",
            "type" : "육지/임야",
            "mng_code" : "1", 
            "start_date" : "2021-05-31", 
            "ppa" : "2021-05-31", 
            
        },
        {
            "gen_name" : "태양광1호기", 
            "location" : "고성",
            "type" : "육지/임야",
            "mng_code" : "1", 
            "start_date" : "2021-05-31", 
            "ppa" : "2021-05-31", 
            
        },
    ]
 
    const ownerInfoData = [
        {
            "owner_name" : "태양광1호기", 
            "phone" : "010-3940-6027",
            "num" : "1456876-21654654",
        },
        {
            "owner_name" : "태양광1호기", 
            "phone" : "010-3940-6027",
            "num" : "1456876-21654654",
        },
        {
            "owner_name" : "태양광1호기", 
            "phone" : "010-3940-6027",
            "num" : "1456876-21654654",
        },
        {
            "owner_name" : "태양광1호기", 
            "phone" : "010-3940-6027",
            "num" : "1456876-21654654",
        },
    ]

    const officeInfoData = [
        {
            "gen_name" : "태양광1호기", 
            "job" : "하드웨어 관리",
            "office" : "하드웨어 관리팀",
            "main" : "홍길동",
            "minor" : "김춘향",
            "phone" : "02-6666-6666",
        },
        {
            "gen_name" : "태양광1호기", 
            "job" : "하드웨어 관리",
            "office" : "하드웨어 관리팀",
            "main" : "홍길동",
            "minor" : "김춘향",
            "phone" : "02-6666-6666",
        },
        {
            "gen_name" : "태양광1호기", 
            "job" : "하드웨어 관리",
            "office" : "하드웨어 관리팀",
            "main" : "홍길동",
            "minor" : "김춘향",
            "phone" : "02-6666-6666",
        },
        {
            "gen_name" : "태양광1호기", 
            "job" : "하드웨어 관리",
            "office" : "하드웨어 관리팀",
            "main" : "홍길동",
            "minor" : "김춘향",
            "phone" : "02-6666-6666",
        },
    ]

    const equipInfoData = [
        {
            "gen_name" : "태양광1호기", 
            "chk_date" : "2021-05-31",
            "chk_person" : "홍길동",
            "chk_person2" : "김춘향",
            "chk_info" : "미작동으로 인한 점검",
            "reason" : "노후",
            "result" : "교체",
            "phone" : "02-6666-6666",
            "manager" : "이원",
        },
        {
            "gen_name" : "태양광1호기", 
            "chk_date" : "2021-05-31",
            "chk_person" : "홍길동",
            "chk_person2" : "김춘향",
            "chk_info" : "미작동으로 인한 점검",
            "reason" : "노후",
            "result" : "교체",
            "phone" : "02-6666-6666",
            "manager" : "이원",
        },
        {
            "gen_name" : "태양광1호기", 
            "chk_date" : "2021-05-31",
            "chk_person" : "홍길동",
            "chk_person2" : "김춘향",
            "chk_info" : "미작동으로 인한 점검",
            "reason" : "노후",
            "result" : "교체",
            "phone" : "02-6666-6666",
            "manager" : "이원",
        },
        {
            "gen_name" : "태양광1호기", 
            "chk_date" : "2021-05-31",
            "chk_person" : "홍길동",
            "chk_person2" : "김춘향",
            "chk_info" : "미작동으로 인한 점검",
            "reason" : "노후",
            "result" : "교체",
            "phone" : "02-6666-6666",
            "manager" : "이원",
        },
        {
            "gen_name" : "태양광1호기", 
            "chk_date" : "2021-05-31",
            "chk_person" : "홍길동",
            "chk_person2" : "김춘향",
            "chk_info" : "미작동으로 인한 점검",
            "reason" : "노후",
            "result" : "교체",
            "phone" : "02-6666-6666",
            "manager" : "이원",
        },
    
        {
            "gen_name" : "태양광1호기", 
            "chk_date" : "2021-05-31",
            "chk_person" : "홍길동",
            "chk_person2" : "김춘향",
            "chk_info" : "미작동으로 인한 점검",
            "reason" : "노후",
            "result" : "교체",
            "phone" : "02-6666-6666",
            "manager" : "이원",
        },
    
        {
            "gen_name" : "태양광1호기", 
            "chk_date" : "2021-05-31",
            "chk_person" : "홍길동",
            "chk_person2" : "김춘향",
            "chk_info" : "미작동으로 인한 점검",
            "reason" : "노후",
            "result" : "교체",
            "phone" : "02-6666-6666",
            "manager" : "이원",
        },
    
        {
            "gen_name" : "태양광1호기", 
            "chk_date" : "2021-05-31",
            "chk_person" : "홍길동",
            "chk_person2" : "김춘향",
            "chk_info" : "미작동으로 인한 점검",
            "reason" : "노후",
            "result" : "교체",
            "phone" : "02-6666-6666",
            "manager" : "이원",
        },
    
        {
            "gen_name" : "태양광1호기", 
            "chk_date" : "2021-05-31",
            "chk_person" : "홍길동",
            "chk_person2" : "김춘향",
            "chk_info" : "미작동으로 인한 점검",
            "reason" : "노후",
            "result" : "교체",
            "phone" : "02-6666-6666",
            "manager" : "이원",
        },
    
        {
            "gen_name" : "태양광1호기", 
            "chk_date" : "2021-05-31",
            "chk_person" : "홍길동",
            "chk_person2" : "김춘향",
            "chk_info" : "미작동으로 인한 점검",
            "reason" : "노후",
            "result" : "교체",
            "phone" : "02-6666-6666",
            "manager" : "이원",
        },
    ]

    useEffect(()=>{
        makeDT(genInfoDT, genInfoData, "#genInfo", genInfoCol);
        makeDT(ownerInfoDT, ownerInfoData, "#ownerInfo", ownerInfoCol);
        makeDT(officeInfoDT, officeInfoData, "#officeInfo", officeInfoCol);
        makeDT(equipInfoDT, equipInfoData, "#equipInfo", equipInfoCol);

        var container = document.getElementById('map');
        var options = {
        center: new kakao.maps.LatLng(36.96155332523879, 127.81501206573043),
        level: 15
        };

        var map = new kakao.maps.Map(container, options);
    },[])

    return (
    <>
    <div className="status manage">
      <h2>
        <Icon name='bell' inverted color={isWhiteMode ? "green" : "grey"} />
        관리 &#62; 관리
      </h2>
      <div className="status-wrap flex-center">
        <div className="gen-amount">
          <h3>관리 OVERVIEW</h3>
          
          <div className="pannel alert-overview">
            <div className="pannel-header">발전소 정보</div>
            <div className="pannel-container">
                <div className="map flex-center">
                    <div id="map"></div>
                </div>

                <div className="hr"></div>

                <div id="genInfo"></div>
            </div>
          </div>
        </div>
        
        <div className="gen-detail">
          <h3>관리 DETAIL</h3>
            <div className="upper flex-center">
                    
                <div className="pannel owner">
                    <div className="pannel-header">사업주 정보</div>
                    <div className="pannel-container">
                        <div className="option flex-center flex-hoz-right">
                            <div className="btn-wrap flex-center">
                                <button className="btn">수정하기</button>
                            </div>

                        </div>

                        <div id="ownerInfo"></div>
                    </div>
                </div>

                <div className="pannel alert-report">
                    <div className="pannel-header"> 부서 정보</div>
                    <div className="pannel-container">
                    <div className="option flex-center">
                        <div>
                            <select name="gen_name" id="genName">
                                <option value="">설비 선택</option>
                                <option value="1">모듈</option>
                                <option value="2">인버터</option>
                                <option value="4">기타</option>
                            </select>
                    
                            <select name="gen_name" id="">
                                <option value="">부서 선택</option>
                                <option value="1">관리부</option>
                                <option value="2">기사님</option>
                                <option value="3">동서 사무국</option>
                            </select>
                        </div>
                        
                        <div className="btn-wrap flex-center">
                             <button className="btn">수정하기</button>
                        </div>
                    </div>

                    <div id="officeInfo"></div>
                    
                    </div>
                </div>
            </div>

            <div className="pannel equip_info">
                <div className="pannel-header">사업주 정보</div>
                <div className="pannel-container">
                <div className="option flex-center">
                    <div>
                    <select name="gen_name" id="genName">
                                <option value="">설비 선택</option>
                                <option value="1">모듈</option>
                                <option value="2">인버터</option>
                                <option value="4">기타</option>
                            </select>
                    
                            <select name="gen_name" id="">
                                <option value="">날짜 선택</option>
                                <option value="1">1월</option>
                                <option value="2">2월</option>
                                <option value="3">3월</option>
                            </select>
                    </div>
                    
                    <div className="btn-wrap flex-center">
                    <button className="btn green-bg">엑셀 다운로드</button>
                    </div>
                </div>

                <div id="equipInfo"></div>

                </div>
            </div>
        </div>    
      </div>
    </div>
    </>
  )
}
