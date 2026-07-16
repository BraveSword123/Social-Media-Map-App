import '../App.css'

function SidebarButton({name, setbarCheck, isbarCheck, icon}: any){   

  return(
    <>
     <button className={isbarCheck === name ? 'navbarElement active' : 'navbarElement'} onClick={() => (setbarCheck(name))} 
        >{icon}</button>
        </>
  ); 
}

export default SidebarButton