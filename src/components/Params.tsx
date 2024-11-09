import React from 'react';
import {Input} from "./Input";
import {Button} from "./Button";

type ParamsPropsType = {
    startValue: number
    maxValue: number
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    setIsChangedMode: (value: boolean) => void
}

export const Params: React.FC<ParamsPropsType> = (props) => {
    const maxValueClassName = props.startValue >= props.maxValue || props.maxValue < 0 ? 'errorBlock' : ''
    const startValueClassName = props.startValue >= props.maxValue || props.startValue < 0 ? 'errorBlock' : ''

    const onCLickSetIsChangedMode = () => {
        props.startValue < props.maxValue && props.startValue >= 0 && props.setIsChangedMode(false)
    }

    return (
        <div className={'params'}>
            <p>Max value: </p>
            <Input className={maxValueClassName} value={props.maxValue} onChange={props.setMaxValue} type={'number'}/>
            <p>Start value: </p>
            <Input className={startValueClassName} value={props.startValue} onChange={props.setStartValue}
                   type={'number'}/>
            <Button disabled={props.startValue >= props.maxValue || props.startValue < 0} title={'set'}
                    callBack={onCLickSetIsChangedMode}/>
        </div>
    );
};