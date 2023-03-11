import React from 'react';

import Link from 'next/link';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function SummaryCard(props) {
    
    //@ classeName : string
    //  - 카드형 UI 를 커스텀 하기 위한 class 명명 
    const className = props.className;

    //@ cardCont : array
    //  - 카드 안에 들어갈 페이지 요약 정보들 
    //    + title : 카드 헤더
    //    + cont : 카드 내용
    //    + link : 해당 카드와 연결할 링크 경로
    const cardCont = props.cardCont;

    return (
    <>
      {cardCont && cardCont.map((item)=>(<>
      
        <Card key={item.title} className={`summary-card ${className ? className : ""}`} variant="outlined">
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" variant="h3" component="p">
                {item.cont}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="flex-center">
            
            <Link href={item.link}>
              <a>더보기</a>
            </Link>
            
          </CardActions>
        </Card>

      </>))}
    </>
  );
}
