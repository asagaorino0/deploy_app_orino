import React, { useContext, useState, useReducer } from 'react'
import { Store } from '../store/index'
import { Form, Button } from 'react-bootstrap'
import { INCREMENT, DECREMENT, RESET, ADD_EVENT } from '../actions/index'
import reducer from '../reducers/index';

const TopPage = () => {
    const [title, setTitle] = useState('');
    const Click = () => {
        alert(globalState.nandemo);
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
    const handleClick = () => {
        setGlobalState({
            type: ADD_EVENT,
            title,
        });
        // console.log('top', title)
        console.log('.title', globalState.nandemo)
    }
    console.log(globalState)
    return (
        <>
            <p>
                <Button onClick={Click}>押して!</Button>{' '}
            </p>
            <button onClick={incrment}>いいねいいね</button>
            <button onClick={decrment}>よくないね</button>
            <button onClick={reset}>reset</button>
            <h1>{globalState.count}</h1>
            <Form>
                {/* <Form.Group controlId="formBasicPassword"> */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>なにか文字を入力してください</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="nandemo"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Button onClick={handleClick}>hello!</Button>{' '}
            </Form>
            <h1>{globalState.nandemo}</h1>
        </>
    );
};

export default TopPage
