import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';

//@ 스텝퍼
//  : 등록 폼에서 사용되는 단계별 진행 표현
export default function DefaultStepper(props) {
    
    //@ 스텝퍼 클래스 : string
    const className = props.className;

    //@ 스텝퍼 클래스 : state
    //  - 현재 몇 단계인지 표현 0, 1, 2...
    const activeStep = props.activeStep;
    
    //@ 스텝퍼 단계에 들어갈 텍스트 : []
    //  - 배열 안에 들어가는 요소는 string
    const stepsTextArr = props.stepsTextArr;

    return (
        <>
        <Stepper 
            className={className ? className : ""}
            activeStep={activeStep-1} 
            alternativeLabel
        >
        
            {stepsTextArr.map((item) => (
            <Step key={item}>
                <StepLabel>{item}</StepLabel>
            </Step>
            ))}
        
        </Stepper>
        </>
    )
}