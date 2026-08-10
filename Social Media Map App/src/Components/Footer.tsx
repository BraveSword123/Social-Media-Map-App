import '../App.css'

type props = {
    buttonText: string; 
    func?: () => void; 
}

function Footer({buttonText, func}: props) {
    return (
        <footer id="footer">
            <button id="footerButton" onClick = {func}>
                {/* location ? "Location: On" : "Location: Off" */ }
                {buttonText}
              </button> 
          </footer>
    ); 
}

export default Footer