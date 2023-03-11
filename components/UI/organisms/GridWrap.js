import React, { Component, useRef, useEffect, useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);



function getFromLS(key) {
    let ls = {};
    if (global.localStorage) {
        try {
            ls = JSON.parse(global.localStorage.getItem("dashboard-pannel-layout")) || {};
        } catch (e) {
            /*Ignore*/
        }
    }
    return ls[key];
}
  

function saveToLS(key, value) {
    if (global.localStorage) {
        global.localStorage.setItem(
            "dashboard-pannel-layout",
            JSON.stringify({
                [key]: value
            })
        );
    }
}



export default function GridWrap(props){
    
    const contents = props.contents;
    const layoutSet = props.layout;

    const [layout, setLayout] = useState(
        getFromLS("layout") ? getFromLS("layout") : layoutSet);


    function onLayoutChange(layout) {
        /*eslint no-console: 0*/
        saveToLS("layout", layout);
        setLayout(layout);
    }

    useEffect(()=>{
        setLayout(layoutSet);
    },[])

    return(
        <ReactGridLayout
            className={props.className}
            margin={[10,10]}
            isDraggable={props.isDraggable}
            isResizable={props.isResizable}
            cols={props.cols}
            layout={layout}
            rowHeight={props.rowHeight}
            onLayoutChange={onLayoutChange}
        >
            {contents}
        </ReactGridLayout>
    );
};