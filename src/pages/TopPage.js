import React, { useContext, useState } from 'react'
import { Store } from '../store/index'
import { Form, Button } from 'react-bootstrap'
import { ALART, INCREMENT, DECREMENT, RESET, ADD_EVENT, GUU, CHOKI, PAA } from '../actions/index'

const TopPage = () => {
    const [title, setTitle] = useState('');
    const { globalState, setGlobalState } =
        useContext(Store)

    const Click = () => {
        setGlobalState({
            type: ALART,
            title,
        });
        alert(globalState.alart)
    };
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
    }
    const guu = () => {
        setGlobalState({
            type: GUU,
        });
    }
    const choki = () => {
        setGlobalState({
            type: CHOKI,
        });
    }
    const paa = () => {
        setGlobalState({
            type: PAA,
        });
    }
    console.log(globalState)

    return (
        <>
            <p>
                <Button onClick={Click}>押して!</Button>{' '}
            </p>
            <p>
                <button onClick={guu}>ぐー</button>
                <button onClick={choki}>ちょき</button>
                <button onClick={paa}>ぱー</button>
            </p>
            <h2>あなた：{globalState.me}</h2>
            <h2>ＣＰＵ：{globalState.cpu}</h2>

            <button onClick={incrment}>いいねいいね</button>
            <button onClick={decrment}>よくないね</button>
            <button onClick={reset}>RESET</button>
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
            <div style={{ color: 'red' }}>
                <h1>{globalState.error}</h1>
            </div>
        </>
    );
};

export default TopPage
