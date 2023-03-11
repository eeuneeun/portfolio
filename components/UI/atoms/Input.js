import React, { useState, useEffect } from 'react';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import InputBase from '@material-ui/core/InputBase';
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import DatePicker from 'react-datepicker';
// import { ko } from "date-fns/esm/locale";

/* 원자 단위의 Input 그룹 정의 */

/* 기본 ChckBox */
export function Chkbox(props) {

  //@ label : string
  const label= props.label

  //@ label : string
  const labelPlacement = props.labelPlacement;
  
  //@ checked : boolean
  const checked = props.checked

  //@ onChange : function
  const onChange = props.onChange

  //@ icon : object
  const icon = props.icon

  //@ checkedIcon : object
  const checkedIcon = props.checkedIcon


  /* state */
  const [chked, setIschked] = useState(false);
  
  /* function */
  function chkHandler(e){
    setIschked(e.target.checked);
  };

  return (
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={onChange}
            icon={icon ? icon : <CheckBoxOutlineBlankIcon fontSize="medium" />}
            checkedIcon={checkedIcon ? checkedIcon : <CheckBoxIcon fontSize="medium" />}
          />
        }
        
        label={label ? label : ""}
        labelPlacement={labelPlacement ? labelPlacement : "end"}
      />
  )
}


/* 상단에 Placehoder 가 유지되는 Custom Text Input */
export function BasicTextInput(props) {

  //@ label : string
  const label= props.label
  
  //@ placeholder : string
  const placeholder= props.placeholder

  //@ id : string
  const id= props.id

  //@ name : string
  const name= props.name

  //@ className : string
  const className= props.className

  //@ onChange : function 
  const onChange= props.onChange
  
  //@ error : boolean
  const error=props.error

  return (
    <TextField 
      name={name && name}
      error={error && error}
      id={id && id}
      label={label && label}
      placeholder={placeholder && placeholder}
      className={className ? `default-text-input ${className}` : "default-text-input"}
      onChange={onChange && onChange}
    />
  )
}



/* 검색용 Text Input */
export function SearchInput(props) {

  //@ placeholder : string
  const placeholder= props.placeholder
  
  //@ id : string
  const id= props.id

  //@ name : string
  const name = props.name

  //@ className : string
  const className= props.className
  const classNameForIcon = props.classNameForIcon

  //@ onChange : function 
  const onChange= props.onChange
  
  return (
    <div className="search-input-wrap">
      <InputBase
        id={id && id}
        className={className && className}
        placeholder={placeholder && placeholder}
        name = {name && name}
        inputProps={{ 'aria-label': '내 발전소 검색' }}
      />

      <IconButton type="submit" className={ classNameForIcon && classNameForIcon } aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>
  )
}


/* 날짜 선택용 Input : Datepicker */
export function DateSelectInput(props){
  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  
  return (
    <DatePicker
      // locale={ko}
      className=""
      selected={startDate}
      dateFormat="yyyy-MM-dd"
      startDate={startDate}
      endDate={endDate}
      selectsRange
      // inline
      onChange={onChange}
      closeOnScroll={(e) => e.target === document}
    />
  );

}