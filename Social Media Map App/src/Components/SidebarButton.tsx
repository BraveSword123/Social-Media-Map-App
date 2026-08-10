import '../App.css'

type props = {
  name: string; 
  setbarCheck: React.Dispatch<React.SetStateAction<string>>;
  isbarCheck: string; 
  icon?: string; 
  
}
function SidebarButton({name, setbarCheck, isbarCheck, icon}: props){   

  return(
    <>
     <button className={isbarCheck === name ? 'navbarElement active' : 'navbarElement'} onClick={() => (setbarCheck(name))} 
        >{icon}</button>
        </>
  ); 
}

export default SidebarButton