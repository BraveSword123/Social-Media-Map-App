
import '../App.css'
import {useState} from 'react'; 

/* function toggleSidebarButton(){
  const [isActive, setisActive] = useState(null); 
} */ 

// const [isActive, setisActive] = useState(false); 

function SidebarButton(props: any) {
    // onClick="showProfile()" "
    // id="profileButton"
  return(
        <button className="navbarElement"
        //onClick={() => setisActive((p) => !p)} 
        >{props.name}</button>
  ); 
}

export default SidebarButton