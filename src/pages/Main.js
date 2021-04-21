import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom'
const Main = () => {
    const history = useHistory()
    const { name } = useParams();
    const handleClick = () => {
        history.push('/');
    };
    return (
        <div>
            <h3>Main</h3>
            <h1 style={{ color: '#3e3e3e' }}>Hello! {name}</h1>
            <Button variant="outlined" onClick={handleClick}>戻る</Button>
        </div>
    );
};

export default Main;