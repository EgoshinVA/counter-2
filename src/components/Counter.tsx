import React, {useState} from 'react';
import {Button} from "./Button";

type CounterPropsType = {
    startValue: number
    maxValue: number
    setIsChangedMode: (value: boolean) => void
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    const [title, setTitle] = useState<number>(props.startValue)

    const increment = () => title < props.maxValue && setTitle(title + 1)
    const reset = () => title > props.startValue && setTitle(props.startValue)

    return (
        <div className={'counter'}>
            <h3 className={title === props.maxValue ? 'redText' : ''}>{title}</h3>
            <Button title={'inc'} callBack={increment} disabled={title === props.maxValue}/>
            <Button title={'reset'} callBack={reset} disabled={title === props.startValue}/>
            <Button title={'set'} callBack={() => props.setIsChangedMode(true)}/>
        </div>
    );
};