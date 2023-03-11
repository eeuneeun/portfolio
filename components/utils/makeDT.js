import Tabulator from "tabulator-tables";
import { copyObjToJSON } from "./manipulateData";

//# 기본 테마형 데이터 테이블
//@ - objDT : 객체 - tabulator 객체가 주입될 변수
//@ - data : json - 데이터 테이블에 삽입할 데이터
//@ - targetEl : html 엘리먼트 객체 - 데이터 테이블 그릴 영역 
//@ - colInfo : 배열 - 컬럼 정보
//@ - minHeight : string - 최소 테이블 높이
//@ - maxHeight : string - 최대 테이블 높이
export function makeDT(objDT, data, targetEl, colInfo, height, minHeight, maxHeight){
  //  console.log("tabledata", data)

    objDT = new Tabulator(targetEl, {
      cellHozAlign : "center",
      cellVertAlign:"middle",
      layout:"fitColumns",
      selectable:true,
      columns:colInfo,
      data : data ? copyObjToJSON(data) : "",
      height : height && height,
      minHeight : minHeight && minHeight,
      maxHeight : maxHeight && maxHeight,
    });
}
 

//# 컬럼 자동 생성형 데이터 테이블
//@ - objDT : 객체 - tabulator 객체가 주입될 변수
//@ - data : json - 데이터 테이블에 삽입할 데이터
//@ - targetEl : html 엘리먼트 객체 - 데이터 테이블 그릴 영역 
//@ - height : string - 테이블 높이
export function autoColumntableDT(objDT, data, targetEl, height){

  objDT = new Tabulator(targetEl, {
    cellHozAlign : "center",
    cellVertAlign:"middle",
    layout:"fitColumns",
    selectable:true,
    autoColumns : true,
    data : data ? copyObjToJSON(data) : "",
    maxHeight:height && height,
  });

}


//# 하단에 Footer 있는 데이터 테이블
//@ - objDT : 객체 - tabulator 객체가 주입될 변수
//@ - data : json - 데이터 테이블에 삽입할 데이터
//@ - targetEl : html 엘리먼트 객체 - 데이터 테이블 그릴 영역 
//@ - colInfo : 배열 - 컬럼 정보
//@ - height : string - 테이블 높이
export function hasFootertableDT(objDT, data, targetEl, colInfo, minHeight, maxHeight, footerElement){

  console.log(footerElement)

  objDT = new Tabulator(targetEl, {
    cellHozAlign : "center",
    cellVertAlign:"middle",
    layout:"fitColumns",
    headerMargin:8,
    minHeight : minHeight && minHeight,
    maxHeight : maxHeight && maxHeight,
    selectable:true,
    columns:colInfo,
    data : data ? copyObjToJSON(data) : "",
    footerElement : footerElement && footerElement
  });
}


