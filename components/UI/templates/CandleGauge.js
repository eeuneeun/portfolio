/* React */
import React, { useState } from 'react';
import Draggable from "react-draggable"; 

/* Next JS */
import Link from "next/link";


export default function CandleGauge(props) {
    
    // 드래그 포인터의 포지션 값
    const [position, setPosition] = useState({ x: 0, y: 0 }); 

    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y }); 
      };
    return(
        <>
            <div className="candle-gauge">
                <div className="candle-gauge-wrap flex-center">
                    <span>
                        <img src="/img/bad.svg" alt="매우 위험" />
                    </span>
                    <ul className="flex-center">
                        <li>매우위험</li>
                        <li>위험</li>
                        <li>보통</li>
                        <li>정상</li>
                        <li>매우좋음</li>
                    </ul>
                    <span>
                        <img src="/img/good.svg" alt="매우 좋음" />
                    </span>
                </div>
               
                <span className="pointer">
                    <img src="/img/pointer.svg" alt="포인터" />
                </span>
            </div>
        </>
    )

}

export function LabelOfCandleGauge(props){
    return(
        <>
            <ul>
                <li>내 발전소 상태</li>
                <li>인버터</li>
                <li>수배전</li>
                <li>통신</li>
            </ul>
        </>
    ); 
}