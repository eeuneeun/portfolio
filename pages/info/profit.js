/* React */
import React, { useEffect, useState } from "react";

/* Next Js */
import { useRouter } from 'next/router'

/* Redux */
import { wrapper } from '../../store/store';
import { useSelector, useDispatch, connect } from 'react-redux';
import {setRecData, setSmpData, setSmpProfitData, setGenAmountInfoData } from '../../store/reducers/profitSlice';

/* Library */
import AnimationCount from 'react-count-animation';
import axios from "axios";
import moment from "moment";

/* Utils */
import { hasFootertableDT, makeDT } from "../../components/utils/makeDT";
import { addCommaToMoney, addMarkToStr, calcSummary, copyObjToJSON } from "../../components/utils/manipulateData"; 

/* UI Components */
import { DashBoardPannel } from "../../components/UI/organisms/Pannel";
import GridWrap from "../../components/UI/organisms/GridWrap";


import {DateFilter} from "../../components/UI/organisms/Filter";
import { getGenAmount } from "../../components/utils/api/apiFunctions";
import { InfoIconButton } from "../../components/UI/atoms/Button";


/* .Env Var 선언부 */
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;

/* API Params */
let recApiParams = {
  url : API_URL+"api/v1/rec",
  method : "get",
  withCredentials : true,
};

let smpApiParams = {
  url : API_URL+"api/v1/smp",
  method : "get",
  withCredentials : true,
};

function profit(props) {

  /* Util Objects 선언부 */
  // 1. 라우팅용 라우터
  const router = useRouter();

  // 2. 리덕스 컨트롤용 디스패치
  const dispatch = useDispatch()

  // 3. REC 조회용 날짜 객체
  const DATE_today = moment().format('YYYY-MM-DD')
  const DATE_defaultShowDay = moment().subtract(12, 'days').format('YYYY-MM-DD')
  const DATE_nowHour = moment().format('HH');
  
  // 4. SMP 표기용 객체
  let nowSmpVal = "0";
  let beforeSmpVal = "0";

  // 5. SMP 수익금 데이터 테이블용 고정 상수
  let smpProfitInfoDT;
  const smpProfitInfoCol = [
    {title:"일시(시간별)", field:"hour", headerHozAlign:"center"},
    {title:"발전량(kW)", field:"kW", headerHozAlign:"center", sorter:"number"},
    {title:"SMP 가격(원)", field:"value", sorter:"number", headerHozAlign:"center"},
    {title:"수익금(원)", field:"profit", hozAlign:"center", headerHozAlign:"center", },
  ]

  // 6. REC 수익금 데이터 테이블용 고정 상수
  let recProfitInfoDT;
  const recProfitInfoCol = [
    {title:"일시(시간별)", field:"hour", headerHozAlign:"center"},
    {title:"REC 가격(원)", field:"won", headerHozAlign:"center", sorter:"number"},
    {title:"거래량", field:"amount", sorter:"number", headerHozAlign:"center"},
    {title:"REC 거래 수익금(원)", field:"profit", hozAlign:"center", headerHozAlign:"center"},
  ]






  /* Redux : authSlice 관련 선언부 */
  const { 
      isLogin, // 로그인 여부
      isAdmin, // 관리자 여부
      accToken, // AccessToken 값 
      selectedPlant, // 선택된 발전소
      recData, // REC 가격 정보
      smpData, // SMP 가격 정보
      smpProfitData, // SMP 수익 테이블용 정보
      genAmountInfoData // 발전량 정보
    } = useSelector(state => ({
      isLogin: state.authSlice.isLogin,
      isAdmin: state.authSlice.isAdmin,
      accToken: state.tokenSlice.accToken,
      selectedPlant: state.tokenSlice.selectedPlant,
      recData : state.profitSlice.recData,
      smpData : state.profitSlice.smpData,
      smpProfitData : state.profitSlice.smpProfitData,
      genAmountInfoData : state.profitSlice.genAmountInfoData,
  }));


  /* useState */
  const [isLoading, setIsLoading] = useState(true)

  const [rec, setRec ] = useState([
    {
      date: DATE_today, //2021-08-26
      hour: "24",
      value: "0",
      areaType: "0 || 1", 
    }
  ])  

  const [ smp, setSmp ] = useState([
    {
      date: DATE_today, //2021-08-26
      value: "0",
      diff: "▲ 000 (+0.0%)",
      areaType: "0", 
    }
  ]);  

  const [smpSummary, setSmpSummary] = useState();



  /* Function 선언부 */

  // ★ REC 정보 호출
  function getRecData(){
    recApiParams = {
      ...recApiParams,
      headers: {
        Authorization: `Bearer ${accToken}`
      },
      params:{
        startDate : DATE_defaultShowDay,
        endDate : DATE_today
      }
    }
    
    axios(recApiParams).then((res)=>{
      
      if(res.status == 200){
        const data = res.data;
        setRec(data);
      }
    }).catch((err)=> {
      console.error(err);
    });
  }

  // - REC 수익금 데이터 테이블용 객체 가공
  function getRecDataForDT(){
    let recForDT = [
      {hour : "2021-08-03", won : "32,000", amount : "5,000", profit : "240,000,000"}
    ]
    return recForDT;
  };



  
  // ★ SMP 정보 호출
  function getSmpData(startDate, endDate){
    smpApiParams = {
      ...smpApiParams,
      headers: {
        Authorization: `Bearer ${accToken}`
      },
      params:{
        startDate : startDate ? startDate : DATE_today,
        endDate : endDate ? endDate : DATE_today
      }
    }
    
    axios(smpApiParams).then((res)=>{
      
      if(res.status == 200){
        const data = res.data;
        dispatch(setSmpData(data));
      }
    }).catch((err)=> {
      console.error(err);
    });
  }
  
  // - SMP 현재 가격 추출
  function getSmpNow(){
    smpData != undefined &&
     smpData.map((item, idx)=>{
        if(item.hour == DATE_nowHour){
          nowSmpVal = item.value;
        }
      })

    return(nowSmpVal);
  }

  // - SMP 현재 증감율 계산
  function getSmpDiff(){  
    smpData != undefined &&
      smpData.map((item, idx)=>{
        if( item.hour == DATE_nowHour-1){
          beforeSmpVal = item.value;
            
        }
      });

      let change = (nowSmpVal-beforeSmpVal).toFixed(2)
      const changePer = ((change/nowSmpVal)*100).toFixed(2)
     
      return(addMarkToStr(change +" \u00A0 \u00A0 \u00A0 "+ changePer + "%"));
  }

  // - SMP 수익금 데이터 테이블용 객체 가공
  async function getSmpDataForDT(){
    let tmp = [];
    let smpTmpArrForSummary = []
    const tmpKW = genAmountInfoData // - 발전량
    
    const smpProfitData = await smpData && 
    
    smpData.map((item, idx)=>{ 
      // FORMAT {hour : "", kW: "1000", value: "", profit:""}
      
        if(idx <= DATE_nowHour){
          tmp.push({
            hour : idx < 10 ? 
                      DATE_today + " \u00A0 " + "0" + item.hour +"시"
                      : 
                      DATE_today + " \u00A0 " + item.hour +"시",
            kW : addCommaToMoney(tmpKW[idx]),
            value : item.value,
            profit : addCommaToMoney(parseFloat(tmpKW[idx] * item.value).toFixed(2))
          });

          smpTmpArrForSummary.push(parseFloat(tmpKW[idx] * item.value).toFixed(2))
        
          if(idx == DATE_nowHour){
          
            const smpArrForSummary = calcSummary(smpTmpArrForSummary)
            setSmpSummary(smpArrForSummary);

          }
        }
      })
    
    return tmp;
  };



  const smpDTfooterEl = 
    <ul className="summary">
      <li>
        <dl>
          <dt>수익 합계</dt>
          <dd>{smpSummary && addCommaToMoney(smpSummary.sum)}</dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>수익 최소액</dt>
          <dd>{smpSummary && addCommaToMoney(smpSummary.min)}</dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>수익 최대액</dt>
          <dd>{smpSummary && addCommaToMoney(smpSummary.max)}</dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>수익 평균</dt>
          <dd>{smpSummary && addCommaToMoney(smpSummary.avg)}</dd>
        </dl>
      </li>
    </ul>
  ;



/*********************************************** 

                  UseEffect

**********************************************/


  useEffect(()=>{
    //setInterval
    getSmpData();
    getRecData();
    getGenAmount(accToken,
        {
          type : "hour",
          plantId : selectedPlant != undefined ? selectedPlant[0].id : ""
        }
    ).then((result)=>{
      if(result != undefined){
        console.log(result)
        dispatch(setGenAmountInfoData(result.reverse()));
      }
    });
  },[accToken])


  useEffect(()=>{
    console.log(genAmountInfoData)

    if(genAmountInfoData != undefined ){

      getSmpDataForDT().then((result)=>{

        dispatch(setSmpProfitData(result))
       
        makeDT(smpProfitInfoDT, result, "#smpProfitInfo", smpProfitInfoCol, "100%", "200px", "100%" );
      });
    }

  },[genAmountInfoData])



  useEffect(()=>{
    let recProfitInfoData = getRecDataForDT().reverse();
    makeDT(recProfitInfoDT, recProfitInfoData, "#recProfitInfo", recProfitInfoCol, "100%");
    setIsLoading(false)
  },[rec])



  useEffect(()=>{
    getGenAmount(accToken,
      {
        type : "hour",
        plantId : selectedPlant != undefined ? selectedPlant[0].id : ""
      }
    ).then((result)=>{
      if(result != undefined){
        console.log(result)
        dispatch(setGenAmountInfoData(result.reverse()));
      }
    });
  },[selectedPlant])

  return (
    <>
    <h2>
      정보 &#62; 수익 정보
    </h2>

    <GridWrap
      className="info-profit"
      isDraggable={true}
      isResizable={true}
      items={5}
      cols={10}
      rowHeight={155}
      layout={[
        {i: 'today-profit-summary', x: 0, y: 0, w: 3, h: 1},
        {i: 'today-rec-info', x: 0, y: 3, w: 3, h:3},
        {i: 'today-smp-info', x: 0, y: 3, w: 3, h:1},
        {i: 'smp-profit-info', x: 3, y: 0, w: 7, h: 3},
        {i: 'rec-trade-info', x: 3, y: 3, w: 3, h: 2},
        {i: 'rec-profit-info', x: 6, y: 3, w: 4, h: 2}
      ]}
      contents={[
        <div key="today-profit-summary">
          <DashBoardPannel
            className="today-profit-summary"
            pannelTitle="금일 수익 요약 정보"
            pannelLink=""
            pannelCont={
              <>
              <div className="contents-wrap">
                <dl>
                  <dt>
                    금일 누적 수익금</dt>
                    
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
                  <dt>금일 예측 수익금</dt>
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
              </div>
              </>
            }
          />
        </div>
        
        ,

        <div key="today-rec-info">
          <DashBoardPannel
            className="today-rec-info"
            pannelTitle="현재 REC 단가"
            pannelTitleRightCont="마지막 업데이트 21.08.24 화요일"
            pannelLink=""
            pannelCont={
              <>
              {!isLoading && 
              <div className="contents-wrap">
                <div className="flex-col-center">

                  <dl className="now flex-between">
                    <dt><em>{rec[0].priceF}</em> 원</dt>
                    <dd>+1.000 (0.66%)</dd>
                  </dl>

                  <ul className="now-detail flex-center">
                    <li>
                      <dl>
                        <dt>거래물량</dt>
                        <dd><em>{rec[0].trdAmountF}</em></dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>상한가</dt>
                        <dd><em>{rec[0].maxAvgF}</em></dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>하한가</dt>
                        <dd><em>{rec[0].minAvgF}</em></dd>
                      </dl>
                    </li>
                  </ul>

                  <dl className="rec-history">
                    <dt>REC 일별 단가</dt>
                    <dd>
                      <table>
                        <thead>
                          <th>일자</th>
                          <th>종가</th>
                          <th>변동</th>
                        </thead>
                        <tbody>
                          { rec && rec.map((item, idx)=>{
                            
                            if(idx < 6){
                              return (
                                <tr key={`recItem-${idx}`}>
                                  <td>{item.date}</td>
                                  <td>{item.priceF}</td>
                                  <td>{item.diff}</td>
                                </tr>
                              )
                            }
                          
                          })}
                        
                        </tbody>
                      </table>
                    </dd>
                  </dl>           
                </div>
              </div>
              }
              </>
            }
          />
        </div>

        ,

        <div key="today-smp-info">
          <DashBoardPannel
            className="today-smp-info"
            pannelTitle="현재 SMP 단가"
            pannelTitleRightCont="마지막 업데이트 21.08.24 화요일"
            pannelCont={
              <>
              {!isLoading &&
              <div className="contents-wrap">
                <dl className="now flex-between">
                  <dt><em>{getSmpNow()}</em></dt>
                  <dd>
                    {getSmpDiff()}
                  </dd>
                </dl>
              </div>
              }
              </>
            }
          />
        </div>
        
        ,

        <div key="smp-profit-info">
          <DashBoardPannel
            className="smp-profit-info"
            pannelTitle="SMP 수익금"
            pannelTitleRightCont="메시지 업데이트 21.08.19 오후 13:30"
            pannelCont={
              <>
              {!isLoading && (<>
                <div className="data-table-wrap">
                  <DateFilter />
                  <div id="smpProfitInfo"></div>
                </div>
                
                <ul className="summary">
                  <li>
                    <dl>
                      <dt>수익 합계</dt>
                      <dd>{smpSummary && addCommaToMoney(smpSummary.sum)}</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>수익 최소액</dt>
                      <dd>{smpSummary && addCommaToMoney(smpSummary.min)}</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>수익 최대액</dt>
                      <dd>{smpSummary && addCommaToMoney(smpSummary.max)}</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>수익 평균</dt>
                      <dd>{smpSummary && addCommaToMoney(smpSummary.avg)}</dd>
                    </dl>
                  </li>
                </ul>
                </>) }
              </>
            }
          />
        </div>

        ,

        <div key="rec-trade-info">
          <DashBoardPannel
            className="rec-trade-info"
            pannelTitle="REC 거래 정보"
            pannelTitleRightCont={(<InfoIconButton 
            
            />)}
            pannelLink=""
            pannelCont={
              <>
              <dl>
                <dt>미 정상 REC</dt>
                <dd><em>10,000</em> REC</dd>
                <dd>홍길동님 발전소A의 가중치는 <em>1.5</em></dd>
              </dl>

              <dl>
                <dt>현재까지 등록한 REC 수익</dt>
                <dd>10,000,000 원</dd>
              </dl>
              </>
            }
          />
        </div>

        ,

        <div key="rec-profit-info">
          <DashBoardPannel
            className="rec-profit-info"
            pannelTitle="REC 수익금"
            pannelLink=""
            pannelCont={
              <>
              <div id="recProfitInfo"></div>
              </>
            }
          />
        </div>
        
      ]}
    />
    </>
  )
}

const mapStateToProps = state => {
  // getState와 같은 이름으로 지어도 되지만,
  // 관행상 mapStateToProps를 사용한다
  console.log(state)
  return state
}

export default connect(mapStateToProps)(profit)