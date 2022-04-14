import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>it is login</h2>
            <button onClick={signInWithGoogle} style={{ marginBottom: '30px' }}>Google Sign In</button>
            <form action="">
                <input type="text" placeholder='Your email' />
                <br />
                <input type="password" name="" id="" placeholder='Your passwords' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;