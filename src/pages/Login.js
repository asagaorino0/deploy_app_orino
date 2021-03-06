import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from '../config/firebase'
import { NAME_GOOGLE, NAME_EMAIL, NAME_LOGOUT } from '../actions/index'
import { Store } from '../store/index'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const history = useHistory()
    const { globalState, setGlobalState } = useContext(Store)
    const handleClick = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                console.log('success login')
                // var user = userCredential.user;
                const name = (userCredential.user.email)
                history.push(`/Main/${name}`)
                setGlobalState({
                    type: NAME_EMAIL,
                    name,
                });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            });
    }
    const gClick = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().languageCode = 'jp';
        provider.setCustomParameters({
            'login_hint': 'user@example.com'
        });
        firebase.auth().signInWithRedirect(provider);
        firebase.auth()
            .getRedirectResult()
            .then((result) => {
                if (result.credential) {
                    /** @type {firebase.auth.OAuthCredential} */
                    var credential = result.credential;
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = credential.accessToken;
                    // ...
                    const name = (user.displayName)
                    history.push(`/Main/${name}`)
                    setGlobalState({
                        type: NAME_GOOGLE,
                        name,
                    });
                    console.log(globalState.name)
                }
                // The signed-in user info.
                var user = result.user;
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
    const googleClick = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        // provider.addScope('https://www.googleapis.com/auth/admin.directory.customer.readonly');
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
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
                setGlobalState({
                    type: NAME_GOOGLE,
                    name,
                });
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
            const name = ('???????????????????????????')
            setGlobalState({
                type: NAME_LOGOUT,
                name,
            });
        }).catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
    }
    return (
        <div>
            <h3 style={{ color: '#3e3e3e' }}>{globalState.name}</h3>
            <TextField id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <TextField id="password" label="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
            <br />
            {error}
            <Button variant="contained" onClick={handleClick} color="primary">????????????Login</Button><br />
            <br />
            {error}
            <Button variant="contained" onClick={googleClick} color="primary">google???????????????</Button><br />
            <br />
            {error}
            <Button variant="contained" onClick={gClick} color="primary">google???????????????.direct</Button><br />
            <br />
            {error}
            <Button variant="contained" onClick={signOut}>Logout</Button><br />
            <br />
            <br />
            {error}
            <Link to='/CreateUser' >?????????????????????</Link>
        </div>
    );
};

export default Login;
