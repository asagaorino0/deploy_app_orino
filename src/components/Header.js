
import React, { useContext } from 'react';
import { AppBar, Toolbar } from '@material-ui/core'
import { useParams, useHistory } from 'react-router-dom';
import { Store } from '../store/index'
const Header = () => {
    const history = useHistory()
    const { nameH } = useParams();
    console.log("0", nameH)
    const { globalState, setGlobalState } = useContext(Store)
    const onTop = () => {
        // setGlobalState({
        //     type: NAME_H,
        //     nameH,
        // });
        history.push('/');
        console.log("1", globalState.nameH, nameH)
    }
    const onClick = () => {
        // setGlobalState({
        //     type: NAME_H,
        //     nameH,
        // });
        const nameH = (globalState.nameH)
        history.push(`/Main/${nameH}`);
        console.log("2", globalState.nameH, nameH)
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <h3>GlobalState</h3>
                {/* <Link to="/"><h3>Login:</h3></Link> */}
                {/* <h3 style={{ color: '#3e3e3e' }}>Hello! {nameH}</h3> */}
                <h3 onClick={onTop}>☆Login:</h3>
                <h3 onClick={onClick}>{globalState.nameH}</h3>
                <h1 onClick={onClick}>{nameH}</h1>
                {/* <Link to='/Main/'{...nameH}><h3>{nameH} </h3></Link> */}

            </Toolbar>
        </AppBar>
    );
}

export default Header
