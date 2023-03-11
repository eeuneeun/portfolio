
// - 금액에 세 자릿 수 마다 콤마(,) 추가
export function addCommaToMoney(val) {
    const str = ''+val;
    return str.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}


// - 문자열에 증감 마크 (▲ , ▼) 추가
export function addMarkToStr(val){
  let mark = ""; 
  let markClass = ""; 
  
  if(val == 0){
    
    mark = "";
    markClass = "same";

  }else if(val.indexOf("-") != -1){
    
    mark = "▲";
    markClass = "increase";
  
  }else if(val.indexOf("-") == -1){

    mark = "▼";
    markClass = "decrease";

  }

  return (<>
    <em className={markClass}>{mark + val}</em>
  </>);
}


// - 최소값, 최대값, 평균값, 더한값을 구하는 함수들
export function calcSummary(arr){

  const beforeArr = arr
  
  function sum(beforeArr){
    let tmp = 0;
    
    beforeArr.map((item, idx)=>{
      tmp = +(tmp + parseFloat(item)).toFixed(2);
    })
    return tmp;
  }

  function min(beforeArr){
    return Math.min(...beforeArr)
  }

  function max(beforeArr){
    return Math.max(...beforeArr)
  }

  function avg(beforeArr){
    return (sum(beforeArr)/beforeArr.length).toFixed(2)
  }

  const sumVal = sum(beforeArr);
  const minVal = min(beforeArr);
  const maxVal = max(beforeArr);
  const avgVal = avg(beforeArr);

  return ({
    sum : sumVal,
    min : minVal,
    max : maxVal,
    avg : avgVal,
  });
}

// - 불변 객체를 깊은 복사하는 함수
export function copyObjToJSON(Obj){
  return JSON.parse(JSON.stringify(Obj));
}
