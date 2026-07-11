import '../App.css'

function SidebarButton({name, setbarCheck, isbarCheck}: any){   

  return(
    <>
     <button className={isbarCheck === name ? 'navbarElement active' : 'navbarElement'} onClick={() => (setbarCheck(name))} 
        >{name}</button>
        </>
  ); 
}

export default SidebarButton