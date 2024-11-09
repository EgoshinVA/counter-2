import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Params} from "./components/Params";

function App() {
    const [startValue, setStartValue] = useState<number>(localStorage.getItem('startValue') ? Number(localStorage.getItem('startValue')) : 0)
    const [maxValue, setMaxValue] = useState<number>(localStorage.getItem('maxValue') ? Number(localStorage.getItem('maxValue')) :5)
    const [isChangedMode, setIsChangedMode] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [isChangedMode])

    return (
        <div className="App">
            {isChangedMode ? <Params startValue={startValue} maxValue={maxValue} setStartValue={setStartValue}
                                     setMaxValue={setMaxValue} setIsChangedMode={setIsChangedMode}/> :
                <Counter startValue={startValue} maxValue={maxValue} setIsChangedMode={setIsChangedMode}/>}
        </div>
    );
}

export default App;
