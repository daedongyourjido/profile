import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useNavigate} from 'react-router-dom';

export default function ChangePwButton(props) {
    const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', marginTop:'10px', justifyContent: 'center', alignItems: 'center' }} >
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" 
      sx={{
        borderColor: '#045369',
        color: '#045369',
        width: '35ch'
        
      }}
        onClick={()=>{
            if(!props.oldPw)
                props.setOldPwEmpty(true);
            else if(props.oldPw)
                props.setOldPwEmpty(false);
            if(!props.pw)
                props.setPwEmpty(true);
            else if(props.pw)
                props.setPwEmpty(false);
            if(!props.pwCheck)
                props.setPwCheckEmpty(true);
            else if(props.pwCheck)
                props.setPwCheckEmpty(false);
                if(props.pw.length < 8)
                props.setPwWrong(true);
            else
                props.setPwWrong(false);
            if(props.pw != props.pwCheck)
                props.setPwDup(true);
            if(props.oldPw && props.pw){
                if(props.pwCheck && props.pw.length >= 8){
                    if(props.pw === props.pwCheck){
                        props.setChanged(true);
                    }

                }
            }
      }}>비밀번호 변경</Button>
    </Stack>
    </div>
  );
}