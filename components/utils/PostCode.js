import React from 'react';
import DaumPostcode from 'react-daum-postcode';

export default function PostCode(props){
    // @ setZipCode : function
    //   - 우편번호 State 값 조작 Hook
    const setZipCode = props.setZipCode;

    // @ setAddress : function
    //   - 우편번호 State 값 조작 Hook
    const setAddress = props.setAddress;

    // @ closeModal : function
    //   - 주소찾기 모달창 닫기 함수
    const closeModal = props.closeModal;


    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        setZipCode(data.zonecode)
        setAddress(fullAddress)
        closeModal();
        // console.log(data.zonecode + fullAddress);
        // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    }

    return (
        <DaumPostcode
            onComplete={handleComplete}
            { ...props }
        />
    );
}
