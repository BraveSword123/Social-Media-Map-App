import '../App.css'

function LargePost(props: any) {

  return(
    <article className="largePost" id="largePost">
    Visited {props.locationName}  <button>Learn More</button>
    <img src={props.img} className="image"></img>
    <br/>
    {props.desc}
    @{props.userName}
    <button>Follow</button>
    {/* Button representing Comments 
        Button representing hearts */}
    </article>
  ); 
}

export default LargePost