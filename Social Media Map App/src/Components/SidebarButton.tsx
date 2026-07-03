
import '../App.css'
import {useState} from 'react'; 

 function SidebarButton(props: {name: string, onClick:React.MouseEventHandler<HTMLButtonElement>}){ 
  const [isClicked, setisClicked] = useState(false); 
  
  return(
      <button className="navbarElement" onClick={props.onClick} 
        >{props.name}</button>  
  ); 
}

export default SidebarButton