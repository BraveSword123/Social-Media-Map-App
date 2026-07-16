import '../App.css'

function LargePost(props: any) {

  return(
    <article className="largePost">
   <div className="upperlargePostContainer">
    <span>Visited {props.locationName}</span> 
    <button className="learnmoreButton">Learn More</button>
    <button className="postCloseButton">X</button>
    </div> 
    <br/>
    <img src={props.img}/>
    <p>{props.desc}</p>   
    <div className="lowerlargePostContainer"><span>@{props.userName}</span> 
      <div className="lowerleftlargePostContainer">
        <button className="postfollowButton">Follow</button>
        <div>Comment</div> {/* Placeholder for Comment Icon */}
        <div>Like</div> {/* Placeholder for Like Icon */}
      </div>
    </div>
    {/* Button representing Comments 
        Button r<div id="upperlargePostContainer">epresenting hearts */}
    </article>
  ); 
}

export default LargePost