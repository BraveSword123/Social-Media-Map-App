import '../App.css'

function Footer(props: any) {
    return (
        <footer id="footer">
            <button id="footerButton" onClick = {props.func}>
                {/* location ? "Location: On" : "Location: Off" */ }
                {props.buttonText}
              </button> 
          </footer>
    ); 
}

export default Footer