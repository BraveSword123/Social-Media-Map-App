import SidebarButton from "../Components/SidebarButton";
import userSprite from "../Images/Sprite_Placeholder.png";
import bunnyBadge from "../Images/bunny_placeholder.png";
import dolphinBadge from "../Images/dolphin_placeholder.png";
import jellyfishBadge from "../Images/jellyfish_placeholder.png";
import goldfishBadge from "../Images/goldfish_placeholder.png";
import swanBadge from "../Images/swan_placeholder.png";
import Posts from "../Components/Posts";
import Badge from "../Components/Badge";
// import Login from './Login.tsx'

import {useState} from 'react'; 
import { Link } from 'react-router-dom';
// import {HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 const [isbarCheck, setbarCheck] = useState("Profile"); 
    const [location, setLocation] = useState(false); 

  return(
    <>
    <aside id="sidebar">
     <aside id="navbarContainer">
        <SidebarButton name="Profile" onClick={() => (setbarCheck("Profile"))}/>
        <SidebarButton name="Badges" onClick={() => (setbarCheck("Badges"))}/>
        <SidebarButton name="Posts" onClick={() => (setbarCheck("Posts"))}/>
        <SidebarButton name="Locations" onClick={() => (setbarCheck("Locations"))}/>    
        </aside> 

       {isbarCheck ==="Posts" && <section id="postContainer">
          <Posts desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ligula turpis." img="https://free-images.com/lg/22a5/books_book_store_library.jpg"/>
          <Posts desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ligula turpis." img="https://free-images.com/lg/f1cc/imgp3030_6.jpg"/>
          <Posts desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ligula turpis." img="https://free-images.com/lg/dcfc/greece_kefalonia_fiscardo_harbor.jpg"/>
        </section> } 
        { isbarCheck === "Badges" && <section id="badgeContainer">
          <Badge img={bunnyBadge}/>
          <Badge img={dolphinBadge}/>
          <Badge img={jellyfishBadge}/>
          <Badge img={goldfishBadge}/>
          <Badge img={swanBadge}/>
        </section>
        }
        { isbarCheck === "Locations" && <section id="locationsContainer">
          <article id="turnOnLocationMessage">
            Please let this site know your location to use this feature. 
          </article>
          <footer id="locationFooter">
            <button id="toggleLocationButton" onClick = {() => setLocation((p) => !p)}>
                {location ? "Location: On" : "Location: Off"}
              </button> 
          </footer>
        </section>
        }
        { isbarCheck === "Profile" &&   <section id="profileContainer">
    <button id="viewAccountButton">View Account</button>
    {/* <Link to="/login">
    <button>Login</button>
    </Link> */ }
   </section>
        }
</aside>
    <div id="spriteContainer">
      <img id="Sprite" src={userSprite}/> 
    </div>
    {/* <Router>
     <Routes>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </Router> */ }
    </>
  ); 
}

export default App
