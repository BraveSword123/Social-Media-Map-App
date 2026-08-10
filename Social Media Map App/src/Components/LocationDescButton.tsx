import '../App.css'

type props = {
  locationName: string; 
  locationType: string; 
  locationDistance: string;
}

function LocationDescButton({locationName, locationType, locationDistance}:props) {

  return(

<article className="sideBarLocationMessages locationDescButton">
    {locationName}
    <br/>
    <span className="subtitleLocationDescButton">{locationType}
    <br/>
    {locationDistance}
    </span>
</article> 
  ); 
}

export default LocationDescButton
      
    