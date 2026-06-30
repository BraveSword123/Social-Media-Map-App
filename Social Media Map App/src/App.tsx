/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App */ 
// import '../App.css'; 
//   <img src="./Pixel_Art/Sprite_Placeholder.png" alt="Sprite placeholder" id="Sprite">
import SidebarButton from './Components/SidebarButton';
// import sidebarCheck from './Components/SidebarButton';  
import userSprite from "./assets/Sprite_Placeholder.png"; 
import Posts from './Components/Posts';
import {useState} from 'react'; 


function App() {
    const [isbarCheck, setbarCheck] = useState("Profile"); 
  return(
    <>
    <aside id="sidebar">
    <aside id="navbarContainer">
        <SidebarButton name="Profile" onClick={() => (setbarCheck("Profile"))}/>
        <SidebarButton name="Badges" onClick={() => (setbarCheck("Badges"))}/>
        <SidebarButton name="Posts" onClick={() => (setbarCheck("Posts"))}/>
        <SidebarButton name="Locations" onClick={() => (setbarCheck("Locations"))}/>    
        </aside>
        {/* If profile button is true render this */}
       {isbarCheck ==="Profile" && <section id="postContainer">
          <Posts desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ligula turpis." img="https://free-images.com/lg/22a5/books_book_store_library.jpg"/>
          <Posts desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ligula turpis." img="https://free-images.com/lg/f1cc/imgp3030_6.jpg"/>
          <Posts desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ligula turpis." img="https://free-images.com/lg/dcfc/greece_kefalonia_fiscardo_harbor.jpg"/>
        </section> } 
</aside>
    <div id="spriteContainer">
      <img id="Sprite" src={userSprite}/> 
    </div>
    </>
  ); 
}

export default App
