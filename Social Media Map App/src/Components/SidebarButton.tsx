import '../App.css'
import {useState} from 'react'; 

/* function SidebarButton(props: {name: string, onClick:React.MouseEventHandler<HTMLButtonElement>}){ */ 
function SidebarButton({name, setbarCheck, isbarCheck}: any){   

  return(
    <>
     <button className={isbarCheck === name ? 'navbarElement-active' : 'navbarElement'} onClick={() => (setbarCheck(name))} 
        >{name}</button>
      {/* <button className="navbarElement" onClick={() => (setbarCheck(name))} 
        >{name}</button> /*} 
        {/*       <button className="navbarElement" onClick={props.onClick} 
        >{props.name}</button>   */}
        </>
  ); 
}

export default SidebarButton