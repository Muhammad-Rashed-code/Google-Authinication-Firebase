import React, { useState } from 'react';
import './Registration.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase.init';

const auth = getAuth(app);




const Registration = () => {
    const [user, setUser] = useState();



    // Google Provider
    const googleProvider = new GoogleAuthProvider();
    // GitHub Provider
    const githubProvider = new GithubAuthProvider();








    const googleLogin = () => {



        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user)
            }).catch((error) => {
                console.log(error);
            })
    }



    const githubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            }).catch((error) => {
                console.log(error);
            })
    }


    return (
        <div>
            <h3 className='mt-3'>Please Create a New Account</h3>
            <button onClick={googleLogin} className='googleLogin'>Sign Up with Google</button> <br />
            <button onClick={githubLogin} className='googleLogin my-3'>Sign Up with GitHub</button><br />
            <button className='loginoldaccount'>login your account</button>







            {
                user?.uid && <div>
                    <h3>Name: {user?.displayName}</h3>
                    <h4>Email: {user?.email}</h4>
                    <img src={user?.photoURL} alt="UserPhoto" />
                </div>
            }


        </div>


    );
};

export default Registration;