import React from 'react';

type InputPropsType = {
    type?: string
    value: number
    className?: string
    onChange: (value: number) => void
}

export const Input: React.FC<InputPropsType> = (props) => {
    return (
        <input className={props.className} value={props.value}
               onChange={(e) => props.onChange(Number(e.currentTarget.value))} type={props.type}/>
    );
};