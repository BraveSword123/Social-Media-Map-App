import '../App.css'

function LocationDescButton(props: any) {

  return(

<article className="sideBarLocationMessages locationDescButton">
    {props.locationName}
    <br/>
    <span className="subtitleLocationDescButton">{props.locationType}
    <br/>
    {props.locationDistance}
    </span>
</article> 
  ); 
}

export default LocationDescButton
      
    