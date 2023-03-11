import Tabulator from "tabulator-tables";

// 기본 테마형 데이터 테이블 생성
// @objDT : 객체 - tabulator 객체가 주입될 변수
// @data : json - 데이터 테이블에 삽입할 데이터
// @targetEl : html 엘리먼트 객체 - 데이터 테이블 그릴 영역 
// @colInfo : 배열 - 컬럼 정보
// @height : string - 테이블 높이
export function makeDT(objDT, data, targetEl, colInfo, height){
    objDT = new Tabulator(targetEl, {
        cellHozAlign : "center",
        cellVertAlign:"middle",
        layout:"fitColumns",
        headerMargin:8,
        maxHeight:height && height,
        selectable:true,
        columns:colInfo,
        data : data,
        // autoColumns : true,
      });
}
