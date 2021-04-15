import React, { useEffect, useContext } from 'react'
import { fetchGetTodoData, fetchGetTodoCheck } from '../apis/index'
import { Store } from '../store/index'
import { GET_TODO, GET_CHECK1, GET_CHECK2 } from '../actions/index'
import Cardtodo from '../components/Card_todo'

function SecondPage() {
    const { globalState, setGlobalState } =
        useContext(Store)
    useEffect(() => {
        fetchGetTodoData().then(res => {
            setGlobalState({
                type: GET_TODO,
                data: res.data
            })
        })
    }, [])

    const todoCheck1 = () => {
        // const { globalState, setGlobalState } = useContext(Store)
        // useEffect(() => {
        fetchGetTodoCheck().then(res => {
            setGlobalState({
                type: GET_CHECK1,
                data: res.data
            })
        })
        // } , [])
        console.log(globalState)
    }
    const todoCheck2 = () => {
        fetchGetTodoCheck().then(res => {
            setGlobalState({
                type: GET_CHECK2,
                data: res.data
            })
        })
        console.log(globalState)
    }
    const todoCheck0 = () => {
        fetchGetTodoCheck().then(res => {
            setGlobalState({
                type: GET_TODO,
                data: res.data
            })
        })
        console.log(globalState)
    }
    console.log(globalState)

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <button onClick={todoCheck1} >
                    奇数だけ表示!!!
                </button>
            </div>
            <div>
                <button onClick={todoCheck2}>
                    偶数だけ表示!!!
                </button>
            </div>
            <div>
                <button onClick={todoCheck0}>
                    全部表示!!!!!!!
                </button>
            </div>
            {
                globalState.user_todo.map((user, id) => {
                    return (
                        <Cardtodo user={user} key={id} />
                    )
                })
            }
        </div >
    )
}

export default SecondPage