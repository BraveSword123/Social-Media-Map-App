
import '../App.css'
// import {useState} from 'react'; 


// const [isActive, setisActive] = useState(false); 

type props = {
  img: string; 
}

function Badge({img}: props) {

  return(
    <button className="badge">
        <img src={img} className="badgeImage"></img>
    </button>
  ); 
}

export default Badge