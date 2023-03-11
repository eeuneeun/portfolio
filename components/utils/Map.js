import React, { Component } from 'react';
import GoogleMap,{} from 'google-map-react';
 
const GOOGLE_API = process.env.NEXT_PUBLIC_GOOGLE_API;
const Marker = ({ name }) => <div className="marker red-bg" onClick={showPopup}>{name}</div>;


function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_DOWN,
      style: maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true
  };
}

function showPopup(e){
  const selBranch = e.target.innerText
  

  console.log(targetBranch)

  return (
    <>
    <div className="popup-wrap">
      <div className="popup-header">{targetBranch.name}</div>
      <div className="popup-container">
        <ul>
          <li>{targetBranch.site}</li>
          <li>{targetBranch.capacity}</li>
          <li>{targetBranch.config}</li>
          <li>{targetBranch.phmMachines}</li>
        </ul>
      </div>
    </div>
    </>
  );
}


class Map extends Component {
  static defaultProps = {
    center: {
      lat: 38.15135248460305,
      lng: 127.8057077624652
    },
    zoom: 2
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '100%' }}>
        <GoogleMap
          bootstrapURLKeys={{ key: GOOGLE_API }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={createMapOptions}
        >
          {
            branchList.map((item)=>(
              <Marker
                key = {item.id}
                name = {item.name}
                lat = {item.lat}
                lng = {item.lng}
                onClick={showPopup}
              />
            ))
          }
        </GoogleMap>
      </div>
    );
  }
}
 
export default Map;