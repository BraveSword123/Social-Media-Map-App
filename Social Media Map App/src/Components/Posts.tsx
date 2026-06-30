
import '../App.css'
// import {useState} from 'react'; 


// const [isActive, setisActive] = useState(false); 

function Posts(props: any) {
    // onClick="showProfile()" "
    // id="profileButton"
    /* if(props.name === "Profile"){
      return<button>Create Post</button>; 
    } */ 
  return(
    <article className="post">
        <img src={props.img} className="image"></img>
        <p className="postText">{props.desc}</p>
    </article>
  ); 
}

export default Posts