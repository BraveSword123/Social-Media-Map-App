// import { BrowserRouter, Route } from 'react-router-dom';
// import App from './App.tsx'
import { Link } from 'react-router-dom';
import styles from '../Components/login.module.css';

function Login(){
    return(
    <div id={styles.wrapper}>
    <div>Sign In</div>
    <Link to="/">
    <button id={styles.button}>Continue with Google</button>
    </Link>
    </div>
    ); 
}

export default Login