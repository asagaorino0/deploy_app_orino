import React, { useState } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from '../config/firebase'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const history = useHistory()
    const handleClick = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                console.log('success login')
                var user = userCredential.user;
                const name = (userCredential.user.email)
                history.push(`/Main/${name}`)
                console.log(userCredential.user.email)
                // ...
                console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            });
    }
    const googleClick = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/admin.directory.customer.readonly');
        // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().languageCode = 'jp';
        // To apply the default browser preference instead of explicitly setting it.
        // firebase.auth().useDeviceLanguage();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
                const name = (user.displayName)
                history.push(`/Main/${name}`)
                console.log(name)
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                console.log(errorCode, errorMessage, email, credential)
            });
    }
    const signOut = () => {
        firebase.auth().signOut().then(() => {
            const name = ('ログアウトしました')
            console.log(name)
        }).catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
    }
    const { name } = useParams();
    return (
        <div>
            <h1 style={{ color: '#3e3e3e' }}>{name}</h1>
            <TextField id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <TextField id="password" label="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
            {error}
            <Button variant="outlined" onClick={handleClick}>Login</Button><br />
            {error}
            <Button variant="contained" onClick={googleClick} color="primary">google</Button><br />
            {error}
            <Button variant="outlined" onClick={signOut}>Logout</Button><br />
            {error}
            <Link to='/CreateUser' >アカウント作成</Link>
        </div>
    );
};

export default Login;