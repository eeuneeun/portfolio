import React, { useRef, useState } from 'react';

/* 파일업로드 기능 정의  */
export default function FileUpload(props) {

    const setFileArr = props.setFileArr

    // 드래그중인지 판별
    const [isDragging, setIsDragging] = useState(false);

    // 드래그 이벤트를 감지하는 ref 참조변수
    // label 태그에 태깅
    const dragRef = useRef();
    
    function preventDefaultAction(e){
        console.log(e)
        e.preventDefault();
        e.stopPropagation();

    };
    
    function handleDragOut(e){
        preventDefaultAction(e)
        setIsDragging(false);
    }
    
    function handleDragOver(e){
        preventDefaultAction(e)

    }
    
    function handleDrop(e){
        preventDefaultAction(e)
        setIsDragging(false);
    }
    
    return (
        <>
        <div className="file-upload-wrap">
           
            <label
                className={isDragging ? "DragDrop-File-Dragging" : "DragDrop-File"}
                // 드래그 중일때와 아닐때의 클래스 이름을 다르게 주어 스타일 차이
                
                htmlFor="fileUpload"
                ref={dragRef}
                // dragenter={preventDefaultAction}
                dragover={preventDefaultAction}
                dragleave={preventDefaultAction}
                drop={preventDefaultAction}
                onChange={preventDefaultAction}
            >
                <div
                    className="drag-area"
                >
                    사진을 이곳에 드래그 해주세요!
                </div> 
            </label>

            <input
                id="fileUpload"
                multiple="multiple"
                type="file"
                name="filename[]"
                onChange={preventDefaultAction}
            />
        </div>
        </>
    );
}