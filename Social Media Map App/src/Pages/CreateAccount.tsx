import { Link } from 'react-router-dom';
import styles from '../createaccount.module.css';
import {useState} from 'react'; 
import Title from "../Images/App Title.png"

function CreateAccount(){

    const [email, setEmail] = useState(" "); 
    const [password, setPassword] = useState(" "); 

    const handleSubmit = (e:any) => {
        e.preventDefault(); 
    }; 

    return(
    <div id={styles.wrapper}>
    <img src={Title}/>
    <div id={styles.formWrapper}>
        <span>
            Create Account
        </span>
    <form onSubmit={handleSubmit}>
        <label> Email:        </label>  
        <br/> 
        <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}></input>
        <br/>
        <label>Password:</label>
        <br/>
        <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}></input>
        <br/>
    <Link to="/">
    {/* onClick function here is for debugging */}
    <button id={styles.signinButton} onClick={() => console.log(email, password)}>Submit</button>
    </Link>
    </form>
    </div>
    </div>
    ); 
}

export default CreateAccount