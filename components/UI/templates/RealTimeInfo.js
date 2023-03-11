import React from 'react';

export default function RaelTimeInfo(props) {


    return(<>
        <div className="mid flex-center">
            <div className="realtime flex-center ">
                <dl>
                    <dt>금일 예측 발전량</dt>
                    <dd>300.14 kWh</dd>
                </dl>
                <dl>
                    <dt>실시간 발전량</dt>
                    <dd>
                        <span>
                            80.14 kWh
                        </span>
                        <span className="increase">
                            ▲ 0.1 kW
                        </span>
                    </dd>
                </dl>

                <dl>
                    <dt>금일 누적 발전량</dt>
                    <dd>
                        <span>
                            160.14 kWh
                        </span>
                        <span className="decrease">
                            ▼ 0.1 kW
                        </span>
                    </dd>
                </dl>

                <dl>
                    <dt>전일 최종 발전량 / 전일 예측 발전량</dt>
                    <dd>
                        <span>
                            300.14 kWh / 300 kWh
                        </span>
                        <span>
                            예측오차 <em className="increase">▲ 10%</em>
                        </span>
                    </dd>
                </dl>
            </div>
        </div>
    </>)
}