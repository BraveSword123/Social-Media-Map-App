import '../App.css'
import LargePost from "../Components/LargePost";
// import { useState } from "react"; 

type props = {
  img: string; 
  desc: string; 
  renderlargePost?: boolean; 
}

function MiniPost({img, desc, renderlargePost}: props) {

 // const [renderlargePost, setrenderlargePost] = useState(false); 

  return(

    <article className="minipost"
   onClick={() => 
      {
        if(renderlargePost){
          console.log("Post is already rendered"); 
        }
        else {
          <LargePost img={img} desc={desc}/> 
          console.log("Rendering Post Right Now"); 
        }
      }
    } 
    >
          {/*renderlargePost ? <LargePost img={props.img} desc={props.desc}/> : console.log("Post Already Exist"); */}
          {/* Only do this once when clicked and do it again 
            if the page is closed 
            
            Render this in App.tsx where I want to put it

          Notes: 
          Maybe I could use useState to check whether the
          large post is being rendered  
          Maybe we could make a useState function that runs whenever 
          a miniPost component is clicked on like if its clicked 
          on and its false do this and if its true do this 
          We would also need logic attached to large Post based on whether 
          this close button is pressed. 
          Maybe useState should start by being written in LargePost 
          and then we can import that variable here 

          Idk cause like for useState it would have to be
          miniPost clicked true the close button clicked its true 
          should I write all of this in App.tsx then 
          Well no cause then I would have to copy paste
          code and the close button isnt reachable 
          in App.tsx 
        */ }
        <img src={img} className="minipostImage"></img>
        <p className="minipostText">{desc}</p>
    </article>
  ); 
}

export default MiniPost