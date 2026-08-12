import '../App.css'

type props = {
  name: string; 
  setbarCheck: React.Dispatch<React.SetStateAction<string>>;
  isbarCheck: string; 
  icon?: any; // Make a different type later, and make required later 
  
}
function SidebarButton({name, setbarCheck, isbarCheck, icon}: props){   

  return(
    <>
     <button className={isbarCheck === name ? 'navbarElement active' : 'navbarElement'} onClick={() => (setbarCheck(name))}> 
        { /* <img src={icon} id="sidebarIcon"/> */ }
          {icon}
        </button>
        </>
  ); 
}

export default SidebarButton