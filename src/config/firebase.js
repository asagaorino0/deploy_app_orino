import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
//create
export const createData = async () => {
    await db.collection("users").add({
        first: "Aaa",
        last: "Lovelace",
        born: 2000
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })

        .catch((error) => {
            console.error("Error adding document: ", error);
        })
}
//read
export const readData = async () => {
    await db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log({ doc })
            console.log(`${doc.id} => ${doc.data().first}`);
            console.log(`${doc.id} => ${doc.data().last}`);
            console.log(`${doc.id} => ${doc.data().born}`);
        });
    });
}
export const setData = async () => {
    await
        db.collection("cities").doc("LA").set({
            name: "Los Angeles",
            state: "CA",
            country: "USA"
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
}
export const upDate = async () => {
    await
        db.collection("cities").doc("LA").update({
            name: "San Francisco",
            state: "AA"
        })
            .then(() => {
                console.log("Document successfully updated!");
            });
}
export const Delete = async () => {
    await
        db.collection("cities").doc("LA").delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
}
export default firebase;