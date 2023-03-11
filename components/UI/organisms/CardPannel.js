import React, { useState } from 'react';
import Card from '../molecules/Card';

//카드 패널의 모양을 다 갖춘 컴포넌트
export default function CardPannel(props) {

    //@게시판 리스트의 컬럼명 : 배열
    const listCol = props.listCol;
    
    //@게시판 리스트의 컬럼 너비 - 균등 적용
    const colWidth = props.colWidth;

    //@게시판 리스트 컨텐츠 내용 : 배열
    const listCont = props.listCont

    return (
    <>
        <ul className="list">
            <li className="list-col">
                <ul className="flex-center">
                   <BoardListCol
                        colWidth={colWidth}
                        listCol={listCol}
                   />
                </ul>
            </li>
            <BoardListItem 
                colWidth={colWidth}
                listCont={listCont}
            />
        </ul>
    </>
  );
}
