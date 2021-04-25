import React, { useState, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom'
import { createData, readData, setData, upDate, Delete } from '../config/firebase';
import TextField from '@material-ui/core/TextField';
import reducer from '../reducers/index';
import { ADD_CREATE } from '../actions/index'
import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/auth";

const Main = () => {
    const [state, dispatch] = useReducer(reducer, []);
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [born, setBorn] = useState(0)
    const db = firebase.firestore();
    const history = useHistory()
    const { name } = useParams();
    const handleCreate = async () => {
        dispatch({
            type: ADD_CREATE,
            first,
            last,
            born,
        })
        //　↓確認用、後で消す。
        console.log(`${first}`)
        console.log(`${last}`)
        console.log(`${born}`)
        await db.collection('users').add({
            first: (`${first}`),
            last: (`${last}`),
            born: (`${born}`)
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            })
        // await createData(); 、、、ちょーむず。
    }
    const handleSetdata = async () => {
        await setData()
    }
    const handleRead = async () => {
        await readData();
    }
    const handleUpdate = async () => {
        await upDate();
    }
    const handleDelete = async () => {
        await Delete();
    }

    const handleClick = () => {
        history.push('/');
    };
    return (
        <div>
            <h3>Main</h3>
            <h1 style={{ color: '#3e3e3e' }}>Hello! {name}</h1>


            <TextField
                required
                id="first"
                label="first"
                defaultValue="first"
                variant="outlined"
                onChange={e => setFirst(e.target.value)}
            />
            <TextField
                required
                id="last"
                label="last"
                defaultValue="last"
                variant="outlined"
                onChange={e => setLast(e.target.value)}
            />
            <TextField
                required
                id="born"
                label="born"
                type="number"
                variant="outlined"
                onChange={e => setBorn(e.target.value)}
            />
            <br />
            <Button variant="contained" onClick={handleCreate} color="primary">create</Button>
            <Button variant="outlined" onClick={handleSetdata}>set</Button>
            <Button variant="outlined" onClick={handleRead}>read</Button>
            <Button variant="outlined" onClick={handleUpdate}>update</Button>
            <Button variant="contained" onClick={handleDelete} color="secondary">delete</Button>
            <br />
            <br />
            <Button variant="outlined" onClick={handleClick}>戻る</Button>
        </div>
    );
};

export default Main;