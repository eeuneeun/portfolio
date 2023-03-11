import React, { Component, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

export default function DataTable(props) {
  // @ 컬럼으로 들어갈 컨텐츠가 정의된 배열 : []
  const col = props.col;
  
  // @ 데이터로 배열 : []
  const data = props.data;
  
  // @ 한 페이지에 보여줄 데이터의 row 숫자 : number
  const pageSize = props.pageSize;

  // @ 테이블 UI 세로 사이즈 : string
  const tableHeight = props.tableHeight;

  return (
    <div style={{width: '100%'}}>
      <DataGrid
        columns={col}
        rows={data}
        autoHeight={true}
        pageSize={pageSize ? pageSize : 5}
        autoPageSize={!pageSize && true}
        disableSelectionOnClick
        // checkboxSelection
      />
    </div>
  );
}