import '../App.css'
// import {useState} from 'react'; 

/* function SidebarButton(props: {name: string, onClick:React.MouseEventHandler<HTMLButtonElement>}){ */ 
function SidebarButton({name, setbarCheck}: any){
// const [isClicked, setisClicked] = useState(false); 
// const [isbarCheck, setbarCheck] = useState("Profile"); 
  
  return(
    <>
      <button className="navbarElement" onClick={() => (setbarCheck(name))} 
        >{name}</button>  
        {/*       <button className="navbarElement" onClick={props.onClick} 
        >{props.name}</button>   */}
        </>
  ); 
}

export default SidebarButton