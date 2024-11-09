import React from 'react';

type ButtonsPropsType = {
    title: string
    callBack: () => void
    disabled?: boolean
}

export const Button: React.FC<ButtonsPropsType> = (props) => {
    return (
        <button disabled={props.disabled} onClick={props.callBack}>
            {props.title}
        </button>
    );
};