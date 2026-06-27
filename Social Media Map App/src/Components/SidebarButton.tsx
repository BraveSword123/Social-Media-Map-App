import '../App.css'

function SidebarButton(props) {
    // onClick="showProfile()" "
    // id="profileButton"
  return(
        <button className="navbarElement">{props.name}</button>
  ); 
}

export default SidebarButton