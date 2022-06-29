import React from 'react'
import { Input } from '@mui/material'

export const FormInput = (props) => {
    return (
        <>
            <input className='FormInput' 
            type={props.type} 
            placeholder={props.placeholder} 
            text={props.text}
            value={props.value}            
            onChange={props.onChange}
            />
        </>
    )
}

export const MultilineInput = (props) => {
    return (
        <>
            <Input
            className='MultilineInput' 
            multiline
            rows={props.rows}
            type={props.type} 
            placeholder={props.placeholder} 
            text={props.text}
            value={props.value}            
            onChange={props.onChange}
            />
        </>
    )
}

export const MultilineInput1 = (props) => {
    return (
        <>
            <Input
            className='MultilineInput1' 
            multiline
            rows={props.rows}
            type={props.type} 
            placeholder={props.placeholder} 
            text={props.text}
            value={props.value}            
            onChange={props.onChange}
            />
        </>
    )
}