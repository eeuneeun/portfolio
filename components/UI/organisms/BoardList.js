import React, { useState } from 'react';


//게시판 글 목록 리스트의 모양을 다 갖춘 컴포넌트
export default function BoardList(props) {

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

//게시판 글 목록 리스트의 컬럼 타이틀 컴포넌트 
export function BoardListCol(props){
 
    //@게시판 리스트의 컬럼명 : 배열
    const listCol = props.listCol;

    //@게시판 리스트의 컬럼 너비 - 균등 적용
    const colWidth = props.colWidth;

   return(
    <>
        {listCol && listCol.map((item)=>(
            <li className={colWidth}>{item}</li>
        ))}    
    </>
    );
}

//게시판 글 목록 각각의 개별 아이템 컴포넌트
export function BoardListItem(props){
    
    //@게시판 리스트의 컬럼 너비 - 균등 적용
    const colWidth = props.colWidth;

    //@게시판 리스트 컨텐츠 내용 : 배열
    const listCont = props.listCont

    return(
    <>
        { listCont && listCont.map((item)=>(<>
            <li className="list-item">
                <ul className="flex-center">
                    { item.map((contents)=>(<>
                        <li key={contents}
                            className={colWidth}>{contents}</li>
                    </>))}
                </ul>
            </li>
        </>))}
    </>
    )
}