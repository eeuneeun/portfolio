import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ComposedChart, Area, Scatter} from 'recharts';


/************************ 
  
          DOUNUT 
      
*************************/

export function DounutChart(props){
    
    const width = props.width;
    const height = props.height;


    const tmpData = [
        [
            { time: '가동율', value: 75 },
            { time: '비가동율', value: 25 },
        ],
        [
            { time: '금일 발전량', value: 101 },
            { time: '금일 남은 시간', value: 101 },
        ],
        [
            { time: '실시간 발전량', value: 31 },
            { time: '전일 발전량', value: 100 },
        ]
    ];

    const COLORS = ['#2a57ff', '#ff2a5c', '#0cbc80'];

    function onPieEnter(e){
        // console.log(e)
    }

    return (<>
        {tmpData.map((item, parentsIdx) => (<>
        <div className="dounut flex-center" key={`dounut-${parentsIdx}`}>
            <PieChart width={width ? width : 220} height={height ? height : 220} onMouseEnter={onPieEnter} >
                
                <Pie
                    data={item}
                    cx={"50%"}
                    cy={"50%"}
                    innerRadius={50}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={450}
                    fill="#e1e1e1e1"
                    stroke={0}
                    stroke-linejoin= {"round"}
                    paddingAngle={0}
                    dataKey="value"
                    legendType={"circle"}
                >
                   {item.map((val, idx) => (<>
                        <Cell key={`cell-${idx}`} fill={idx == 0 ? COLORS[parentsIdx] : "#353535"} />
                    </>))}
                </Pie>
            
            </PieChart>
            
            {item.map((val, idx) => (<>
                {idx == 0 && (<>
                    <span key={`value-${val.value}`} className="value">{val.value}</span>
                    <span key={`label-${val.time}`} className="label">{val.time}</span>
                </>)}
            </>))}
       </div>
    </>))}
    </>);
}



/************************ 
  
           LINE 
      
*************************/

export function CustomLineChart(props){

    const data = [
        {
            time: '0',
            발전량: 0,
            예상수익: 0,
        },
        {
            time: '1',
            발전량: 0,
            예상수익: 0,
        },
        {
            time: '2',
            발전량: 0,
            예상수익: 0,
        },
        {
            time: '3',
            발전량: 0,
            예상수익: 0,
        },
        {
            time: '4',
            발전량: 0,
            예상수익: 0,
        },
        {
            time: '5',
            발전량: 0,
            예상수익: 0,
        },
        {
            time: '6',
            발전량: 0,
            예상수익: 0,
        },
        {
            time: '7',
            발전량: 0,
            예상수익: 0,
        },
        {
            time: '8',
            발전량: 90,
            예상수익: 80,
        },
        {
            time: '9',
            발전량: 190,
            예상수익: 100,
        },
        {
            time: '10',
            발전량: 290,
            예상수익: 200,
        },
        {
            time: '11',
            발전량: 490,
            예상수익: 430,
        },
        {
            time: '12',
            발전량: 700,
            예상수익: 1200,
        },
        {
            time: '13',
            발전량: 800,
            예상수익: 1500,
        },
        {
            time: '14',
            발전량: 700,
            예상수익: 1200,
        },
        {
            time: '15',
            발전량: 690,
            예상수익: 1000,
        },
        {
            time: '16',
            발전량: 490,
            예상수익: 500,
        },
        {
            time: '17',
            발전량: 100,
            예상수익: 300,
        },
        {
            time: '18',
            발전량: 39,
            예상수익: 50,
        },
        {
            time: '19',
            발전량: 34,
            예상수익: 43,
        },
        {
            time: '20',
            발전량: 10,
            예상수익: 30,
            
        },
        {
            time: '21',
            발전량: 0,
            예상수익: 0,
            
        },
        {
            time: '22',
            발전량: 0,
            예상수익: 0,
        },
        {
            time: '23',
            발전량: 0,
            예상수익: 0,
        },
    ];

    return (
    <LineChart
        width={650}
        height={250}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 20,
          bottom: 0
        }}
    >
        <CartesianGrid strokeDasharray="2 2" stroke="#333"/>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
    
        <Line
            dataKey="예상수익"
            stroke="#0cbc80"
            dot={false}
            activeDot={{ r: 5 }}
        />
        <Line 
            dataKey="발전량" 
            stroke="#ff2a5c"
            dot={false}
            activeDot={{ r: 5 }}
        />
    </LineChart>
    );
}


export function CustomComposeChart(props){

    const data2 = [
        {
            time: '0',
            실제: 0,
            예측: 0,
        },
        {
            time: '1',
            실제: 0,
            예측: 0,
        },
        {
            time: '2',
            실제: 0,
            예측: 0,
        },
        {
            time: '3',
            실제: 0,
            예측: 0,
        },
        {
            time: '4',
            실제: 0,
            예측: 0,
        },
        {
            time: '5',
            실제: 0,
            예측: 0,
        },
        {
            time: '6',
            실제: 0,
            예측: 0,
        },
        {
            time: '7',
            실제: 0,
            예측: 0,
        },
        {
            time: '8',
            실제: 90,
            예측: 80,
        },
        {
            time: '9',
            실제: 190,
            예측: 100,
        },
        {
            time: '10',
            실제: 290,
            예측: 200,
        },
        {
            time: '11',
            실제: 490,
            예측: 430,
        },
        {
            time: '12',
            실제: 700,
            예측: 1200,
        },
        {
            time: '13',
            실제: 800,
            예측: 1500,
        },
        {
            time: '14',
            실제: 700,
            예측: 1200,
        },
        {
            time: '15',
            실제: 690,
            예측: 1000,
        },
        {
            time: '16',
            실제: 490,
            예측: 500,
        },
        {
            time: '17',
            실제: 100,
            예측: 300,
        },
        {
            time: '18',
            실제: 39,
            예측: 50,
        },
        {
            time: '19',
            실제: 34,
            예측: 43,
        },
        {
            time: '20',
            실제: 10,
            예측: 30,
            
        },
        {
            time: '21',
            실제: 0,
            예측: 0,
            
        },
        {
            time: '22',
            실제: 0,
            예측: 0,
        },
        {
            time: '23',
            실제: 0,
            예측: 0,
        },
    ];

    return (
        <ComposedChart
            width={1300}
            height={260}
            data={data2}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            }}
        >
            <CartesianGrid stroke="#111" />
            <XAxis dataKey="time" scale="band" />
            <YAxis />

            <Tooltip />
            <Legend />
            
            <Area type="monotone" dataKey="예측" fill="#2A57FF" stroke="#fda502" />
            <Bar dataKey="실제" barSize={20} fill="#2A57FF" />
            <Line type="monotone" dataKey="예측" stroke="#ff2a5c" />
            <Scatter dataKey="예측" fill="#ff2a5c" />
        </ComposedChart>
    );
}



/************************ 
  
           BAR 
      
*************************/



export function HozBarChart(props){

    const barHeight = props.barHeight ?? 25;
    const label = props.label ?? "라벨";
    const val = props.val ?? 50;

    return (
        <dl className="hoz-bar-chart">
            <dt>{label}</dt>
            <dd style={{height:`${barHeight}px`}}>
                <span style={{width:`${val}%`}}>{val}</span>
            </dd>
        </dl>
    );
   
}



