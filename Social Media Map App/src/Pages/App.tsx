import SidebarButton from "../Components/SidebarButton";
import userSprite from "../Images/Sprite_Placeholder.png";
import bunnyBadge from "../Images/bunny_placeholder.png";
import dolphinBadge from "../Images/dolphin_placeholder.png";
import jellyfishBadge from "../Images/jellyfish_placeholder.png";
import goldfishBadge from "../Images/goldfish_placeholder.png";
import swanBadge from "../Images/swan_placeholder.png";
import MiniPost from "../Components/MiniPost";
import Badge from "../Components/Badge";
import LocationDescButton from "../Components/LocationDescButton";
import LargePost from "../Components/LargePost";
import {useState} from 'react'; 

function App() {
 const [isbarCheck, setbarCheck] = useState("Profile"); 
 const [location, setLocation] = useState(false); 

  return(
    <>
    <aside id="sidebar">
     <aside id="navbarContainer">
        <SidebarButton name="Profile" setbarCheck={setbarCheck} isbarCheck={isbarCheck}/>
        <SidebarButton name="Badges" setbarCheck={setbarCheck} isbarCheck={isbarCheck}/>
        <SidebarButton name="Posts" setbarCheck={setbarCheck} isbarCheck={isbarCheck}/>
        <SidebarButton name="Locations" setbarCheck={setbarCheck} isbarCheck={isbarCheck}/> 
        </aside> 
       {isbarCheck ==="Posts" && <section id="minipostContainer">
          <MiniPost desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ligula turpis." img="https://free-images.com/lg/22a5/books_book_store_library.jpg"/>
          <MiniPost desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ligula turpis." img="https://free-images.com/lg/f1cc/imgp3030_6.jpg"/>
          <MiniPost desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ligula turpis." img="https://free-images.com/lg/dcfc/greece_kefalonia_fiscardo_harbor.jpg"/>
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
         {  location === false && <article id="turnOnLocationMessage" className="sideBarLocationMessages">
            Please let this site know your location to use this feature. 
          </article>}
          { location === true && 
          <section id="locationButtonContainer">
          <LocationDescButton locationName = "Location Name" locationType="Location Type" locationDistance="5 min"/> 
          <LocationDescButton locationName = "Location Name" locationType="Location Type" locationDistance="5 min"/> 
          <LocationDescButton locationName = "Location Name" locationType="Location Type" locationDistance="5 min"/> 
          </section>
          } 
          <footer id="locationFooter">
            <button id="toggleLocationButton" onClick = {() => setLocation((p) => !p)}>
                {location ? "Location: On" : "Location: Off"}
              </button> 
          </footer>
        </section>
        }

        { isbarCheck === "Profile" &&   <section id="profileContainer">
    <button id="viewAccountButton">View Account</button>
   </section>
        }
</aside>
  {/* <LargePost locationName="Location Name" img="https://free-images.com/lg/22a5/books_book_store_library.jpg" userName="userName"/> */}
    <div id="spriteContainer">
      <img id="Sprite" src={userSprite}/> 
    </div>
    </>
  ); 
}

export default App
