import '../App.css'

function LargePost(props: any) {

  return(
    <article className="largePost">
   <div id="upperlargePostContainer"><span>Visited {props.locationName}</span>  <button id="learnmoreButton">Learn More</button></div> 
    <br/>  <br/>
    <img src={props.img} className="largepostImage"></img>
    <br/>
    {props.desc}
    <div id="lowerlargePostContainer">@{props.userName}   <div id="lowerleftlargePostContainer"><button id="postfollowButton">Follow</button></div></div>
    {/* Button representing Comments 
        Button r<div id="upperlargePostContainer">epresenting hearts */}
    </article>
  ); 
}

export default LargePost