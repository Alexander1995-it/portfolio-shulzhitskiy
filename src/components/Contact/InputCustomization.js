import * as React from 'react';
import {styled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const CssTextField = styled((props) => (
    <TextField
        InputProps={{disableUnderline: true}}
        {...props}
    />
))(() => ({
    '& .MuiInputBase-input': {
        color: '#999',
        fontSize: '20px',
        maxWidth: '500px',

        backgroundColor: '#343333'
    },
    '& label.Mui-focused': {
        color: '#d7bdbc',
        fontSize: '25px',
    },
    '& label': {
        color: '#999',
        fontSize: '20px',
        opacity: '0.6'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            fontSize: '25px',
            border: '2px solid #9c5451',
            opacity: '0.5',
        },
        '&:hover fieldset': {
            border: '2px solid #9c5451',
            opacity: '1'

        },
        '&.Mui-focused fieldset': {
            border: '2px solid #9c5451',
        },
    },
}));

export default function CustomizedInputs(props) {
    return (
        <FormControl variant="standard">
            <CssTextField {...props} value={''} id="custom-css-outlined-input"/>
        </FormControl>
    )
}
