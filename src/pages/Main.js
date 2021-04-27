import React, { useState, useReducer, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom'
import { createData, readData, choiceData, setData, upDate, Delete } from '../config/firebase';
import TextField from '@material-ui/core/TextField';
import reducer from '../reducers/index';
import { ADD_CREATE, CHOICE_DOC } from '../actions/index'
import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/auth";
import Table from 'react-bootstrap/Table'
import { Store } from '../store/index'

const Main = () => {
    const [state, dispatch] = useReducer(reducer, []);
    const [id, setId] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [born, setBorn] = useState(0)
    const db = firebase.firestore();
    const doc = firebase.firestore();
    const history = useHistory()
    const { name } = useParams();
    const { globalState, setGlobalState } = useContext(Store)
    const handleCreate = async () => {
        dispatch({
            type: ADD_CREATE,
            id,
            first,
            last,
            born,
        })
        //　↓確認用、後で消す。
        console.log(`${id}`)
        console.log(`${first}`)
        console.log(`${last}`)
        console.log(`${born}`)
        // await db.collection('users').add({
        await db.collection('users').doc(`${id}`).set({
            // id: (`${id}`),
            first: (`${first}`),
            last: (`${last}`),
            born: (`${born}`),
            capital: false,
        },
            { merge: false })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                // db.collection("users").doc(docRef.id).set({
                //     item: "555",
                // })
                alert(first + last + " が登録されました。")
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
        const querySnapshot = firebase.toString
        console.log(querySnapshot);
    }

    //number,map,,,,
    const handleChoice = async () => {
        dispatch({
            type: ADD_CREATE,
            // id,
            first,
            // last,
            born,
        })
        // console.log(`${id}`)
        console.log("姓:", `${first}`)
        // console.log(`${last}`)
        console.log(`${born}`)

        // await db.collection("users").where("first", "==", `${first}`)
        await db.collection("users").where("born", "==", 1815)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                    setGlobalState({
                        type: CHOICE_DOC,
                        id,
                        first,
                        last,
                        born,
                    })
                });
                console.log(globalState.choice)
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
                var docRef = db.collection("users");
            });
        // await choiceData();
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
                id="id"
                label="必須"
                defaultValue="ニックネーム"
                variant="outlined"
                onChange={e => setId(e.target.value)}
            />
            <br />
            <TextField
                required
                id="first"
                label="必須"
                defaultValue="姓"
                variant="outlined"
                onChange={e => setFirst(e.target.value)}
            />
            <TextField
                required
                id="last"
                label="必須"
                defaultValue="名"
                variant="outlined"
                onChange={e => setLast(e.target.value)}
            />
            <TextField
                required
                id="born"
                label="必須"
                type="number"
                defaultValue="1950"
                variant="outlined"
                onChange={e => setBorn(e.target.value)}
            />
            <br />
            <Button variant="contained" onClick={handleCreate} color="primary">create</Button>
            <Button variant="outlined" onClick={handleSetdata}>set</Button>
            <Button variant="outlined" onClick={handleRead}>read</Button>
            <Button variant="outlined" onClick={handleChoice}>choice </Button>
            <Button variant="outlined" onClick={handleUpdate}>update</Button>
            <Button variant="contained" onClick={handleDelete} color="secondary">delete</Button>
            <br />
            <br />
            <Button variant="outlined" onClick={handleClick}>戻る</Button>

            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>first</th>
                            <th>last</th>
                            <th>born</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            globalState.choice.map((data, index) => {
                                return (

                                    <tr key={data.id}>
                                        <td>{data.first}</td>
                                        <td>{data.last}</td>
                                        <td>{data.born}</td>
                                    </tr>
                                );
                            })
                        } */}
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default Main;