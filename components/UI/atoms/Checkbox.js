import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Chkbox(props) {

  /* props */
  const labelTxt= props.labelTxt
  

  /* state */
  const [checked, setChecked] = useState(false);
  
  /* function */
  function chkHandler(e){
    setChecked(e.target.checked);
  };

  return (
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={chkHandler}
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
          />
        }
        
        label={labelTxt}
      />
  )
}
