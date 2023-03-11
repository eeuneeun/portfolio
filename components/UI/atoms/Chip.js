import React from 'react';
import Chip from '@material-ui/core/Chip';

export default function BasicChip(props) {

  // @ className : string 
  const className = props.className;
  
  // @ Material UI 가 제공하는 Style : string
  //   - option : default, outlined 
  const variant = props.variant;
  
  // @ Material UI 가 제공하는 Size : string
  //   - option : midiuim, samll
  const size = props.size;

  // @ Material UI 가 제공하는 Color : string
  //  - option : default, primary, secondary
  const color = props.color;
  
  // @ Chip 에 들어갈 글씨 : string
  const label = props.label;

  // @ Chip 앞쪽으로 들어가는 작은 아이콘 : object
  //  - option : none, letter, img
  const avatar = props.avatar;
  
  // @ Chip 뒤쪽으로 들어가는 삭제 아이콘 : object
  //  - option : none, default, cutom object
  const deleteIcon = props.deleteIcon;

  // @ 클릭 가능 여부 : boolean
  const clickable = props.clickable;

  // @ 삭제 아이콘 클릭시 실행될 함수 : function
  const onDelete = props.onDelete;
  
  // @ 클릭시 실행될 함수 : function
  const onClick = props.onClick;

  return (
    <Chip
      classes={{ label: className && className }}
      variant={variant && variant}
      size={size && size}
      avatar={avatar && avatar}
      label={label && label}
      clickable
      color={color && color}
      onDelete={onDelete && onDelete}
      deleteIcon={deleteIcon && deleteIcon}
      onClick={onClick && onClick}
    />
  );
}