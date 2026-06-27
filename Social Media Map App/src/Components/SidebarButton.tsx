
import '../App.css'
import {useState} from 'react'; 

/* function toggleSidebarButton(){
  const [isActive, setisActive] = useState(null); 
} */ 

// const [isActive, setisActive] = useState(false); 

function SidebarButton(props: any) {
    // onClick="showProfile()" "
    // id="profileButton"
    /* if(props.name === "Profile"){
      return<button>Create Post</button>; 
    } */ 
  return(
        <button className="navbarElement"
        //onClick={() => setisActive((p) => !p)} 
        >{props.name}</button>
  ); 
}

export default SidebarButton