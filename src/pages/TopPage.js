import React, { useContext } from 'react'
import { Store } from '../store/index'
import Button from 'react-bootstrap/Button'
import { INCREMENT, DECREMENT, RESET } from '../actions/index'

const TopPage = () => {
    const Click = () => {
        alert('Hello world');
        console.log('Hello world')
    }
    const { globalState, setGlobalState } =
        useContext(Store)
    const incrment = () => {
        setGlobalState({
            type: INCREMENT,
        });
    };
    const decrment = () => {
        setGlobalState({
            type: DECREMENT
        });
    };
    const reset = () => {
        setGlobalState({
            type: RESET
        });
    };
    console.log(globalState)

    return (
        <div>
            {/* <header> */}
            <p>
                <Button onClick={Click}>押して!</Button>{' '}
            </p>
            {/* </header> */}
            <button onClick={incrment}>いいねいいね</button>
            <button onClick={decrment}>よくないね</button>
            <button onClick={reset}>reset</button>
            <h1>{globalState.count}</h1>
        </div>
    );
}

export default TopPage
