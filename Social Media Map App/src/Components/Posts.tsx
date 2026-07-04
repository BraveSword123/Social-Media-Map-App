import '../App.css'

function Posts(props: any) {

  return(
    <article className="post">
        <img src={props.img} className="image"></img>
        <p className="postText">{props.desc}</p>
    </article>
  ); 
}

export default Posts