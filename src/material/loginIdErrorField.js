import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function LoginIdErrorField(props) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch', backgroundColor:'white' },
      }}
      noValidate
      autoComplete="off"
      onChange={(e)=>{props.setId(e.target.value)}}
    >
      <div>
        <TextField
          error
          id="outlined-error-helper-text"
          label="이메일 입력"
          defaultValue=""
          helperText="이메일를 입력하세요"
        />
      </div>
    </Box>
  );
}