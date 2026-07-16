import { Link } from 'react-router-dom';
import styles from '../createaccount.module.css';
import {useState} from 'react'; 

function CreateAccount(){

    const [email, setEmail] = useState(" "); 
    const [password, setPassword] = useState(" "); 

    const handleSubmit = (e:any) => {
        e.preventDefault(); 
    }; 

    return(
    <div id={styles.wrapper}>
    <div>Create Account</div>
    <form onSubmit={handleSubmit}>
        <label> Email:  
        <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}></input>
        </label>
        <br/>
        <br/>
        <label> Password:  
        <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}></input>
        </label>
        <br/>
        <br/>
    <Link to="/">
    {/* onClick function here is for debugging */}
    <button id={styles.button} onClick={() => console.log(email, password)}>Submit</button>
    </Link>
    </form>
    </div>
    ); 
}

export default CreateAccount