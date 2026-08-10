import '../App.css'
// import { useState } from "react";

 type props = {
  img: string; 
  desc: string; 
  userName: string; 
  locationName: string; 
 // renderlargePost?: boolean; 
}

function LargePost({img, desc, userName, locationName} : props) {

// const [renderlargePost, setrenderlargePost] = useState(false);

  return(
    <article className="largePost">
   <div className="upperlargePostContainer">
    <span>Visited {locationName}</span> 
    <button className="learnmoreButton">Learn More</button>
    <button className="postCloseButton">
      {/* onClick={() => setrenderlargePost(false)} */}
    X</button> 
    </div> 
    <br/>
    <img src={img}/>
    <p>{desc}</p>   
    <div className="lowerlargePostContainer"><span>@{userName}</span> 
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