import React, { useState } from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';


/* 원자 단위의 Switch 그룹 정의  */


/* 상단 테마 변경 스위치 */
export function BasicSwitch(props) {

    //@ 스위치 클래스를 지정 : string
    const className = props.className ?? "";

    //@ 스위치가 표현하게 될 값을 지정 : string
    const value = props.value ?? "";

    //@ 스위치 라벨을 지정 : string
    const label = props.label ?? "";

    //@ 스위치 라벨의 위치를 지정 : string
    //  top, start, bottom, end
    const labelPlacement = props.labelPlacement ?? "end"

    //@ 스위치 사이즈 : string
    const size = props.size ?? "small";

    //@ 스위치 바인딩 될 함수 : function
    const onChange = props.onChange;

    //@ 스위치 색상 : string
    //  primary, default
    const color = props.color ?? 'default'
    

    const [checked, setChecked] = useState(false);

    const toggleChecked = () => {
      setChecked(!checked);
      onChange && onChange();
    };
  

    return (
    <>
        <FormControlLabel
            control={
                <Switch size={size} checked={checked} onChange={toggleChecked} color={color} />
            }
            value={value}
            label={label}
            labelPlacement={labelPlacement}
            className={className}
        />
    </>
  );
}
