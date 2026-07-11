import '../App.css'

function MiniPost(props: any) {

  return(
    <article className="minipost">
        <img src={props.img} className="image"></img>
        <p className="minipostText">{props.desc}</p>
    </article>
  ); 
}

export default MiniPost