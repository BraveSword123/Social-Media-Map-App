
import '../App.css'
// import {useState} from 'react'; 


// const [isActive, setisActive] = useState(false); 

function Badge(props: any) {

  return(
    <button className="badge">
        <img src={props.img} className="badgeImage"></img>
    </button>
  ); 
}

export default Badge