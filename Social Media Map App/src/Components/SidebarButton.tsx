
import '../App.css'
// import {useState} from 'react'; 


/* function toggleSidebarButton(){
  const [isActive, setisActive] = useState(null); 
} */ 

// const [isActive, setisActive] = useState(false); 

/* function sidebarRenderCheck(props){
  if(props.name === 'profile'){
    sidebarCheck = 'profile'; 
  }
  else if(props.name === )
} */ 

// export let sidebarCheck: string; 

function SidebarButton(props: {name: string, onClick:React.MouseEventHandler<HTMLButtonElement>}){
    /* if(props.name === "Profile"){
      sidebarCheck = "Profile"; 
    }  
    else if(props.name === "Badges"){
      sidebarCheck = "Badges"; 
    }
    else if(props.name === "Posts"){
      sidebarCheck = "Posts"; 
    }
    else if(props.name === "Locations"){
      sidebarCheck = "Locations"; 
    } */ 
  return(
        <button className="navbarElement" onClick={props.onClick}
        //onClick={() => setisActive((p) => !p)} 
        >{props.name}</button>
  ); 
}

export default SidebarButton