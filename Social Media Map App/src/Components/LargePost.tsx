import '../App.css'

function LargePost(props: any) {

  return(
    <article className="largePost">
    Visited {props.location}  <button>Learn More</button>
    <img src={props.img}></img>
    <br/>
    {props.desc}
    @{props.userName}
    <button>Follow</button>
    {/*Button representing Comments 
        Button representing hearts
    */}
    </article>
  ); 
}

export default LargePost